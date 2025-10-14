// src/navigation/HomeNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NaviParamList } from '@/src/types/navi';
import { HomeScreen, BeautyScreen, SlideScreen } from '@/src/screens';
import { Colors } from '@/src/config/Colors';
import CustomDrawerContent from "@/src/navigation/DrawerContent";

// 🟣 Drawer: Main App Area (Home)
export const ABDrawerNavigator = () => {
    const Drawer = createDrawerNavigator<NaviParamList>();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ drawerStyle: { width: 250 }, headerStyle: { backgroundColor: Colors.statusBarLight }, headerTintColor: Colors.headerFont, drawerLabelStyle: { fontSize: 16 }, }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: true, title: '💖 Beautiful Asian Girls 👑' }} />
        </Drawer.Navigator>
    );
};

// 🟢 Stack: Detail flow (Beauty → Slide)
export const ABStackNavigator = () => {
    const Stack = createStackNavigator<NaviParamList>();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.mainCatLight },
                headerTintColor: Colors.headerFont,
            }}
        >
            <Stack.Screen name="BeautyScreen" component={BeautyScreen} options={({ route }) => ({ title: (route?.params as any)?.title ?? 'Beauty', headerShown: true, })} />
            <Stack.Screen name="SlideScreen" component={SlideScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
