import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignIn = async () => {
        if (!email || !password) {
            setMessage('❌ Email and password are required.');
            return;
        }

        try {
            const app = getApp();
            const authInstance = getAuth(app);
            await signInWithEmailAndPassword(authInstance, email.trim(), password.trim());
            setMessage('✅ Signed in successfully!');
        } catch (err) {
            console.error('Sign-in error:', err);
            setMessage('❌ Invalid email or password.');
        }
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
            <Button title="Sign In" onPress={handleSignIn} />
            <Text>{message}</Text>
        </View>
    );
}
