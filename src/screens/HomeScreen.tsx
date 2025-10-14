console.log('// HomeScreen.tsx');
import React, { useEffect, useCallback, useRef } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { abs } from '@/src/config/ABStyles';
import { CatInterface } from '@/src/types/cat';
import { CatCard } from '@/src/components/CatCard';
import { NaviParamList } from '@/src/types/navi';

import { HomeList } from '@/src/screens/HomeList';

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NaviParamList>>();

    const handleItemPress = async (item: CatInterface) => {
        navigation.navigate('ABStack', {
            screen: 'BeautyScreen',
            params: {
                repo: item.id,
                gh: item.gh,
                title: item.title,
            }
        });
    };

    const renderItem = useCallback(
        ({ item }: { item: CatInterface }) => (
            <CatCard item={item} onPress={() => handleItemPress(item)} />
        ), []
    );

    return (
        <View style={abs.ViewContainer}>
            <FlatList
                data={HomeList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    );
};

