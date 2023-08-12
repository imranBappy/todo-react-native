import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/MaterialIcons'

const LoginScreen = () => {
    // useEffect(() => {
    //     configureGoogleSignIn();
    // }, []);

    // const configureGoogleSignIn = () => {
    //     GoogleSignin.configure({
    //         webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your own Web Client ID
    //         offlineAccess: true, // if you want to access Google API on behalf of the user
    //     });
    // };

    // const handleGoogleSignIn = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         // You can use the userInfo object to authenticate the user with your backend
    //         // For example, send the user's ID token to your server for verification
    //         console.log(userInfo);
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // User cancelled the login flow
    //             console.log('Google sign-in cancelled');
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // Operation (e.g. sign-in) is in progress already
    //             console.log('Google sign-in in progress');
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // Play services not available or outdated
    //             console.log('Google Play services not available');
    //         } else {
    //             // Some other error occurred
    //             console.log('Error:', error.message);
    //         }
    //     }
    // };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#4285F4', padding: 10, borderRadius: 4 }} onPress={() => {
                // handleGoogleSignIn
            }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Login with Google</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
