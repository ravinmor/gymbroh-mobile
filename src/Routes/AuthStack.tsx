import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Pages/Auth/Login/Login';
import ResetPassword from '../Pages/Auth/ResetPassword/ResetPassword';
import SiginIn from '../Pages/Auth/SignUp/SiginIn';
import Header  from '../Components/Header/Header';
import SimpleHeader from '../Components/Header/SimpleHeader';

const Stack = createStackNavigator();

export const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#1D1D1D' } }}>
			<Stack.Screen
				name="Login"
				component={Login}
			/>
			<Stack.Screen
				name="ResetPassword"
				component={ResetPassword}
				options={{
					headerShown: true,
					header: () => <SimpleHeader 
						title="" 
					/>
				}}
			/>
			<Stack.Screen
				name="SiginIn"
				component={SiginIn}
				options={{
					headerShown: true,
					header: () => <Header 
						goBackButton={true}
						cancelButton={false}
						title="Cadastre-se" 
					/>
				}}
			/>
		</Stack.Navigator>
	);
};
