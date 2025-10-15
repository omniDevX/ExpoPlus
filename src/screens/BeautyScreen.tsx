// HomeScreen.tsx
import React, { useEffect, useCallback, useRef } from 'react';
import { View, Text, FlatList, Button, Alert, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'; // Import useRoute to get route params

import { useCatList } from '@/src/screens/BeautyList';

import { abs } from '@/src/config/ABStyles';
import { CatInterface } from '@/src/types/cat';
import { CatCard } from '@/src/components/CatCard';
import { NaviParamList } from '@/src/types/navi';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

type BeautyScreenRouteProp = RouteProp<{ BeautyScreen: { repo: string; gh: string; title: string } }, 'BeautyScreen'>;

export const BeautyScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NaviParamList>>();
    const route = useRoute<BeautyScreenRouteProp>();
    const { repo, gh, title } = route.params; // Destructure params from route

    const categories = useCatList(gh, repo);
    const [catList, setCatList] = React.useState<CatInterface[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        if (!categories) return;
        const selectedCats = categories[repo as keyof typeof categories] || [];
        setCatList(selectedCats);
        setLoading(false);
    }, [categories, repo]);

    if (loading || !catList.length) return <ActivityIndicator size="large" />;

    const handlePress = async (item: CatInterface) => {
        const itemGh = item.gh ?? gh; // Use item.gh if available, otherwise fallback to root category gh
        const itemRepo = item.repo ?? repo; // Use item.repo if available, otherwise fallback to root category repo


        // Navigate to the appropriate screen
        navigation.navigate('SlideScreen', {
            gh: itemGh,
            repo: itemRepo,
            folder: item.id,
            title: item.title
        });
    };

    const renderItem = ({ item }: { item: CatInterface }) => (
        <CatCard item={item} onPress={() => handlePress(item)} />
    );

    return (
        <View style={abs.ViewContainer}>
            <FlatList
                style={{ flex: 1 }}
                data={catList}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <BannerAd
                    // unitId={"ca-app-pub-9117325879733746/2194727225"}
                    unitId={TestIds.BANNER}
                    size={BannerAdSize.BANNER}
                />
            </View>


        </View>
    );
};

