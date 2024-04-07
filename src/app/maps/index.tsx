import { View } from 'react-native';
import MapView from 'react-native-maps';

export default function Page() {
	return (
		<View className="flex-1">
			<MapView style={{ width: '100%', height: '100%' }} />
		</View>
	);
}
