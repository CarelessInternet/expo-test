import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import Text from '@/Text';
import { Link, router } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
	const isPresented = router.canGoBack();
	const width = useSharedValue(96);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			{!isPresented && <Link href="/">Dismiss</Link>}
			<Text>Hello from modal</Text>
			<Animated.View
				className={`h-24 bg-violet-500`}
				style={{ width }}
				onTouchEnd={() => {
					width.value = withSpring(width.value + 50);
				}}
			/>
		</View>
	);
}
