import axios from "axios";
import { Cat2SubMap } from '@/src/types/cat';
import React from "react";

const CAT_JSON = `https://raw.githubusercontent.com/ai8ai/ABCatMain/refs/heads/main/json/cat2.json`; // JSON URL

export const useCatList = (gh: string, repo: string) => {
    const [catList, setCatList] = React.useState<Cat2SubMap | null>(null);
    console.log("Repo in useCatList:", repo);
    const IMG_LIST = `https://raw.githubusercontent.com/${gh}/${repo}/refs/heads/main/fs.txt`;
    const NETLIFY_ABCAT = `https://${repo}.netlify.app/`;  // Base URL for images  https://sjustin.netlify.app/denim/014f07895a897121ed3c49b114ea985b.jpg

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get<Cat2SubMap>(CAT_JSON);
                const allData = res.data;
                const catData = allData[repo];
                // console.log("STEP 1: fetching catData: ", catData, IMG_LIST);

                const imageListRes = await axios.get(IMG_LIST);
                const imageList = imageListRes.data.split("\n").map((line: string) => line.trim());
                // console.log("STEP 2: fetching CAT_JSON");
                const formattedImages = imageList.map((filePath: string) => {
                    // Split the file path by backslashes
                    // console.log("STEP 3: fetching CAT_JSON");
                    const pathParts = filePath.split("\\");

                    // Get the directory name and file name
                    const directory = pathParts[pathParts.length - 2]; // The second last part (e.g., 'denim')
                    const fileName = pathParts[pathParts.length - 1];   // The last part is the file name
                    // console.log("STEP 4: fetching CAT_JSON");
                    return `${directory}/${fileName}`;  // e.g., 'denim/wangxinyao_C (2088).jpg'
                });

                // console.log("---ff----- Fetched image list:", formattedImages);
                const groupedImages = formattedImages.reduce((acc: any, filePath: any) => {
                    // console.log("STEP 5: fetching CAT_JSON");
                    const category = filePath.split("/")[0]; // Get category (e.g., 'denim', 'editors_picks', etc.)

                    // Initialize the category if it doesn't exist
                    if (!acc[category]) acc[category] = [];
                    // console.log("STEP 6: fetching CAT_JSON");
                    // Add the image to the category group
                    acc[category].push(filePath);

                    return acc;
                }, {});

                // Map through the catData and attach one random image for each item based on item.id
                const repoData = catData?.map(item => {
                    // Get the images for the current repo (category)
                    const categoryImages = groupedImages[item.id] || [];
                    // console.log("STEP 7: fetching CAT_JSON");

                    // Pick a random image for this category
                    const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];

                    return {
                        ...item,
                        cover: `${NETLIFY_ABCAT}${randomImage}`, // Attach the random image URL to the cover
                    };
                }) || [];

                // console.log("STEP 8: fetching CAT_JSON");

                setCatList({ [repo]: repoData });

            } catch (error) {
                console.warn(`❌ Failed to fetch ${repo} data, using fallback:`, error);
            }
        };

        fetchData();
    }, [repo]); // only re-fetch when repo changes

    return catList;
};
