import React, { useState, useEffect } from 'react';
import { View,StyleSheet, TextInput, Text, TouchableOpacity, Image, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useFirebaseUserStore } from '@/src/stores/FirebaseUserStore';
import { colors } from '@/src/constants/Colors';

export default function SmartSignInScreen() {
    const setFirebaseUser = useFirebaseUserStore((s) => s.setFirebaseUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async () => {
        setMessage('');
        if (!email || !password) {
            setMessage('❌ Email and password are required.');
            return;
        }

        try {
            setIsLoading(true);
            const userCredential = await auth().signInWithEmailAndPassword(
                email.trim().toLowerCase(),
                password.trim()
            );
            const user = userCredential.user;
            setFirebaseUser(user);
            console.log('✅ Signed in successfully!');
        } catch (error: any) {
            console.log('Sign-in error:', error);
            setMessage('❌ Invalid email or password.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('@/assets/logo_transparent.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Welcome text */}
                    <Text style={styles.title}>Welcome Back!</Text>
                    <Text style={styles.subtitle}>Sign in to continue</Text>

                    {/* Email input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#B0B0B0"
                        value={email}
                        onChangeText={(text) => setEmail(text.replace(/\r?\n|\r/g, ''))}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    {/* Password input */}
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            placeholderTextColor="#B0B0B0"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={styles.eye}>{showPassword ? '🙈' : '👁️'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sign In button */}
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colors.main }]}
                        onPress={handleSignIn}
                        disabled={isLoading}
                    >
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>

                    {/* Error message */}
                    {message ? <Text style={styles.error}>{message}</Text> : null}
                </ScrollView>
            </TouchableWithoutFeedback>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    scrollContent: { paddingTop: 50, paddingHorizontal: 16, paddingBottom: 24 },
    logoContainer: { alignItems: 'center', marginBottom: 20 },
    logo: { width: 280, height: 80 },
    title: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 10 },
    subtitle: { textAlign: 'center', color: '#888', marginBottom: 20 },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 14,
        fontSize: 16,
        marginBottom: 12
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 50,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    passwordInput: { flex: 1, fontSize: 16, paddingVertical: 14, color: '#000' },
    eye: { marginLeft: 10, color: '#888', fontSize: 16 },
    button: {
        borderRadius: 50,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
    error: { textAlign: 'center', color: 'red', marginTop: 8 }
});
