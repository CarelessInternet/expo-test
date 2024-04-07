import { Appearance, Pressable, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Link } from 'expo-router';
import Text from '@/Text';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
	const theme = useTheme();

	return (
		<View className="flex-1 items-center justify-center">
			<Text>Ok</Text>
			<Link href="/home/">
				<Text>go to home</Text>
			</Link>
			<View className="mx-4 mt-4 h-16 w-64 items-center justify-center p-1">
				<Pressable
					className="h-full w-full flex-row items-center justify-center rounded-2xl border-4 border-lime-500"
					onPress={() => {
						Appearance.setColorScheme(theme.dark ? 'light' : 'dark');
					}}
				>
					<FontAwesome name="apple" size={24} color={theme.dark ? '#fff' : '#25292e'} className="pr-2" />
					<Text className="text-xl">Change Theme</Text>
				</Pressable>
			</View>
		</View>
	);
}
