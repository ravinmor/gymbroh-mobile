/* eslint-disable prettier/prettier */
import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthData, authService} from '../Services/authService';

type AuthContextData = {
	authData?: AuthData;
	loading: boolean;
	signIn(): Promise<void>;
	signOut(): void;
};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
	const [authData, setAuthData] = useState<AuthData>();

	//the AuthContext start with loading equals true
	//and stay like this, until the data be load from Async Storage
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//Every time the App is opened, this provider is rendered
		//and call de loadStorage function.
		loadStorageData();
	}, []);

	async function loadStorageData(): Promise<void> {
		try {
			//Try get the data from Async Storage
			const authDataSerialized = await AsyncStorage.getItem('@AuthData');
			if (authDataSerialized) {
				//If there are data, it's converted to an Object and the state is updated.
				const _authData: AuthData = JSON.parse(authDataSerialized);
				setAuthData(_authData);
			}
		} catch (error) {
		} finally {
			//loading finished
			setLoading(false);
		}
	}

	const signIn = async (email, password) => {
		const _authData = await authService.signIn(
			email,
			password,
		);

		if(_authData.status == 400) {
			alert(_authData.message)
			return
		}

		setAuthData(_authData);

		AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
	};

	const signOut = async () => {
		//Remove data from context, so the App can be notified
		//and send the user to the AuthStack
		setAuthData(undefined);

		//Remove the data from Async Storage
		//to NOT be recoverede in next session.
		await AsyncStorage.removeItem('@AuthData');
	};

	return (
		//This component will be used to encapsulate the whole App,
		//so all components will have access to the Context
		<AuthContext.Provider value={{authData, loading, signIn, signOut}}>
			{children}
		</AuthContext.Provider>
	);
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}

export {AuthContext, AuthProvider, useAuth};
