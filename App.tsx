// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Toast from "react-native-toast-message";
import { Colors } from '@/src/constants/Colors';
import { BannerAd, BannerAdSize, TestIds, MobileAds } from 'react-native-google-mobile-ads';
import { ABDrawerNavigator, ABStackNavigator } from '@/src/navigation/ABNavigator';
import SignScreen from '@/src/screens/user/SignScreen';

const Root_Stack = createNativeStackNavigator();

export default function App() {
    React.useEffect(() => {
        MobileAds()
            .initialize()
            .then(() => console.log('AdMob initialized ✅'));
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Root_Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Root_Stack.Screen name="Sign" component={SignScreen} />
                    <Root_Stack.Screen name="HomeDrawer" component={ABDrawerNavigator} />
                    <Root_Stack.Screen name="ABStack" component={ABStackNavigator} options={{ headerShown: false, }} />
                </Root_Stack.Navigator>

                <StatusBar style="dark" backgroundColor={Colors.statusBarLight} translucent={false} />

            </NavigationContainer>
            <Toast />
        </GestureHandlerRootView>
    );
}
