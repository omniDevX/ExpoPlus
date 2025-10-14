import { NavigatorScreenParams } from '@react-navigation/native';

export type NaviParamList = {
    HomeScreen: undefined;
    BeautyScreen: { repo: string; gh: string; title: string };
    SlideScreen: { repo: string; gh: string; title: string; folder: string };

    ABStack: NavigatorScreenParams<ABStack>;

};



export type ABStack = {
    BeautyScreen: { repo: string; gh: string | undefined; title: string };
    SlideScreen: { repo: string; gh: string | undefined; title: string; folder: string };
};