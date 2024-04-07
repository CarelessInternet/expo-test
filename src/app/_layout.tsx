import './global.css';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Tabs } from 'expo-router';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome';

SplashScreen.preventAutoHideAsync();

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
	initialRoutename: 'index',
};

export default function Layout() {
	const [fontsLoaded, fontError] = useFonts({
		Inter_500Medium,
	});
	const colourScheme = useColorScheme();

	useEffect(() => {
		if (fontsLoaded || fontError) {
			// Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	// Prevent rendering until the font has loaded or an error was returned
	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<ThemeProvider value={colourScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Tabs>
				<Tabs.Screen name="index" options={{ headerShown: false, title: 'Index' }} />
				<Tabs.Screen
					name="home"
					options={{
						tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
						title: 'Home',
					}}
				/>
			</Tabs>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
