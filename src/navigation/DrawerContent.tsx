import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, Share, Linking, Alert } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import { s_global } from "@/src/config/s_global";


// Define a more specific type for Ionicons names
type IoniconName = "help-circle-outline" | "sync-outline" | "star-outline" | "gift-outline" | "cloud-upload-outline" | "share-social-outline" | "mail-outline" | "settings-outline";

const CustomDrawerContent = (props: any) => {

    const handleShareApp = async () => {
        try {
            await Share.share({
                message: 'Check out Asian Beauty! https://play.google.com/store/apps/details?id=com.aixpertlab.asianbeautyycc&pcampaignid=web_share',
            });
        } catch (error) {
            Alert.alert('Error', 'Could not share app.');
        }
    };


    const handleRateUs = () => {
        Linking.openURL('market://details?id=com.aixpertlab.asianbeautyycc').catch(() => {
            Alert.alert('Error', 'Could not open app store.');
        });
    };

    const handlePrivacyPolicy = () => {
        Linking.openURL('https://aidres.com/privacypolicy').catch(() => {
            Alert.alert('Error', 'Could not open app store.');
        });
    };


    const handleSupport = () => {
        props.navigation.closeDrawer();
        props.navigation.navigate('DetailStack', { screen: 'SupportHub' });
    };

    const handleContactUs = () => {
        const email = 'aidresart@gmail.com';
        const subject = encodeURIComponent('Support Request');
        const body = encodeURIComponent('Hello,\n\nI need help with...');
        const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;

        Linking.openURL(mailtoURL).catch(() => {
            Alert.alert('Error', 'Could not open email client.');
        });
    };

    const statusList = [
        { icon: 'star-outline', label: 'Rate Us ⭐', onPress: handleRateUs },
        { icon: 'share-social-outline', label: 'Share App', onPress: handleShareApp },
        { icon: 'mail-outline', label: 'Contact Us', onPress: handleContactUs },

        { icon: 'shield-outline', label: 'Privacy Policy', onPress: handlePrivacyPolicy },
    ];

    return (
        // <ImageBackground
        //     source={require("@/assets/images/dianyan.png")}
        //     resizeMode="cover" // To ensure the image covers the whole area
        //     style={styles.drawerBackground}
        // >
        <DrawerContentScrollView {...props} contentContainerStyle={s_global.Drawer_Container}>
            <View style={s_global.Drawer_Header}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.closeDrawer();
                        props.navigation.navigate('DetailStack', { screen: 'BizInfo' });
                    }}
                >
                    <Image
                        source={require("@/assets/images/drawer.png")}
                        style={{ width: 200, height: 420, }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>


            <View style={{ padding: 10, paddingTop: 10 }}>
                {statusList.map((item, index) => (
                    <React.Fragment key={index}>
                        {/* Divider before "Share App" */}
                        {/* {(item.label === "Deleted" || item.label === "Privacy Policy") && (
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 12 }} />
                        )} */}
                        <TouchableOpacity style={s_global.DrawerItem} onPress={item.onPress}>
                            <Ionicons name={item.icon as IoniconName} size={20} color="#888" style={{ marginRight: 8 }} />
                            <Text style={s_global.Text888}>{item.label}</Text>
                            <Ionicons name="chevron-forward-outline" size={18} color="#888" />
                        </TouchableOpacity>
                    </React.Fragment>
                ))}
            </View>

            <View style={s_global.DrawerFooter}>
                <TouchableOpacity
                    style={s_global.SettingsButton}
                    onPress={() => Linking.openURL('https://ko-fi.com/aidres')}
                >
                    <Ionicons name="cafe-outline" size={20} color="#888" />
                    <Text style={s_global.Text888}>Buy Me a Coffee ☕</Text>
                    <Ionicons name="chevron-forward-outline" size={18} color="#888" style={{ marginRight: 4 }} />
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView >
        // </ImageBackground>
    );
};

export default CustomDrawerContent;

// const styles = StyleSheet.create({
//     drawerBackground: {
//         flex: 1, // Ensures the image covers the full area
//         justifyContent: 'center',
//         alignItems: 'center', // Centers content if necessary
//     },
// });