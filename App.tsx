import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import { AuthProvider } from './src/Context/Auth';
import { Router } from './src/Routes/Router';

import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold
	})

	if(!fontsLoaded) {
		return null;
	}
	
	return (
		<AuthProvider>
			<StatusBar barStyle="light-content" />
			<Router />
		</AuthProvider>
	);
}
