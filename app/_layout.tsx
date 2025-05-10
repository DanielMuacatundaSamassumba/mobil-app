import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/screens/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/screens/SignUp" options={{
        headerShown: true,
        headerTitle: "Cadastro",
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
      }} />
   
    </Stack>

  );
}
