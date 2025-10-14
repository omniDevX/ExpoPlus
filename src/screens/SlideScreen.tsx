// HomeScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Image, View, TouchableOpacity, } from 'react-native';
import { saveImage } from '@/src/components/SaveImage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RouteProp, useRoute } from "@react-navigation/native";

import { abs } from '@/src/config/ABStyles';
import Toast from 'react-native-toast-message';

const GITHUB_API_URL = (gh: string, repo: string, folder: string) => `https://api.github.com/repos/${gh}/${repo}/contents/${folder}`;
const GITHUB_RAW_URL = (gh: string, repo: string, folder: string) => `https://raw.githubusercontent.com/${gh}/${repo}/main/${folder}/`;

type BeautyScreenRouteProp1 = RouteProp<{ BeautyScreen: { repo: string; gh: string; title: string, folder: string } }, 'BeautyScreen'>;

export const SlideScreen = () => {
    const route = useRoute<BeautyScreenRouteProp1>();
    const { repo, gh, title, folder } = route.params;

    const [images, setImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoSlideshow, setIsAutoSlideshow] = useState(false);
    const [resizeMode, setResizeMode] = useState<'cover' | 'contain'>('cover');

    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        const fetchImageList = async () => {
            try {
                console.log(repo + "//slide repo - folder " + folder + " - gh:" + gh)
                const response = await fetch(GITHUB_API_URL(gh as string, repo as string, folder as string));
                if (!response.ok) throw new Error("Failed to fetch image list");
                const files = await response.json();

                // Filter only image files
                const imageFiles = files
                    .filter((file: any) => file.type === 'file' && /\.(jpg|jpeg|webp|png|gif|JPG|JPEG|PNG|WEBP)$/i.test(file.name))
                    .map((file: any) => GITHUB_RAW_URL(gh as string, repo as string, folder as string) + file.name);

                const shuffledImages = imageFiles.sort(() => Math.random() - 0.5);
                setImages(shuffledImages);
            } catch (error) {
                console.error("Error fetching image list:", error);
            }
        };
        fetchImageList();
    }, [repo, folder]);

    const getResizeMode = (imageUrl: string, callback: (mode: "cover" | "contain") => void) => {
        Image.getSize(imageUrl, (width, height) => {
            const aspectRatio = height / width;
            console.log(aspectRatio.toFixed(2))

            const mode = aspectRatio > 1.4 ? "cover" : "contain";
            callback(mode);
        }, (error) => {
            console.error("Failed to get image size:", error);
            callback("cover");
        });
    };

    useEffect(() => {
        if (images.length > 0) {
            getResizeMode(images[currentImage], (mode) => setResizeMode(mode));

            const nextIndex = (currentImage + 1) % images.length;
            Image.prefetch(images[nextIndex]);

            // 👇 start slideshow automatically once images are loaded
            if (!isAutoSlideshow) {
                startAutoSlideshow();
            }
        }

        // cleanup on unmount
        return () => stopAutoSlideshow();
    }, [images]);


    const goToNextImage = () => { setCurrentImage((prev) => (prev + 1) % images.length); };

    const startAutoSlideshow = (isInitial = false) => {
        setIsAutoSlideshow(true);
        intervalRef.current = window.setInterval(() => { goToNextImage(); }, 3000);

        // Show toast (auto-start or manual)
        if (isInitial) {
            Toast.show({ type: 'info', text1: 'Slideshow started automatically', position: 'bottom', visibilityTime: 2000 });
        } else {
            Toast.show({ type: 'info', text1: 'Slideshow started', text2:'Tap to download', position: 'bottom', visibilityTime: 2000 });
        }
    };

    const stopAutoSlideshow = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsAutoSlideshow(false);
    };

    const toggleSlideshow = () => {
        if (isAutoSlideshow) {
            stopAutoSlideshow();
            // ToastAndroid.show('Tap to resume slideshow', ToastAndroid.SHORT);
            Toast.show({ type: 'success', text1: 'Click download button to save 👉', text2: 'Tap to resume slideshow', position: 'top',topOffset: 100, visibilityTime: 1000 });
        } else {
            startAutoSlideshow();
        }
    };

    return (
        <View style={abs.SliderContainer}>
            {!isAutoSlideshow && images.length > 0 && (
                <TouchableOpacity
                    onPress={() => images[currentImage] && saveImage(images[currentImage])}
                    style={abs.downloadButton}
                >
                    <MaterialCommunityIcons name="download" size={24} color="white" />
                </TouchableOpacity>


            )}
            <TouchableOpacity onPress={toggleSlideshow} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Image source={{ uri: images[currentImage] }} style={[abs.sliderImage, { resizeMode }]} />
            </TouchableOpacity>

        </View>
    );
};
