import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { CatInterface } from '@/src/types/cat';
import { abs } from '@/src/config/ABStyles';

type Props = {
    item: CatInterface;
    onPress: () => void;
};

export const CatCard = React.memo(({ item, onPress }: Props) => {
    const [loading, setLoading] = useState(true);

    return (
        <TouchableOpacity style={abs.CatContainer} onPress={onPress}>
            <Image source={{ uri: item.cover }} style={abs.CatCoverImg} onLoadEnd={() => setLoading(false)} />
            {loading && (
                <View style={abs.CatView} pointerEvents="none"                 >
                    <ActivityIndicator size="small" color={'#F28500'} />
                </View>
            )}
            <Text style={abs.CatTitle} numberOfLines={2}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );
});
