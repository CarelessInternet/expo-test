import { Link } from 'expo-router';
import Text from '@/Text';

export default function Page() {
	return (
		<>
			<Text>No way</Text>
			<Link href="/">
				<Text>go to index</Text>
			</Link>
			<Link href="/home/modal">
				<Text>Modal</Text>
			</Link>
		</>
	);
}
