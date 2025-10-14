import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const abs = StyleSheet.create({
    ViewContainer: { flex: 1, backgroundColor: Colors.mainCatLight, padding: 10, },
    SliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CatContainer: {
        alignItems: 'center',
        width: '48%',
        aspectRatio: 9 / 16,
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
    },
    CatCoverImg: {
        height: '88%',
        width: '100%',
        aspectRatio: 10 / 16,
        borderRadius: 8,
    },
    CatView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '12%', // Because image height is 88%, spinner covers only image area
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 8,
    },
    CatTitle: {
        marginTop: 5,
        fontSize: 14,
        color: Colors.catFont,
        textAlign: 'center',
    },
    sliderImage: {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        resizeMode: 'cover',
    },
    downloadButton: { position: 'absolute', top: 20, right: 20, backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: 10, borderRadius: 20, zIndex: 10 }

});
