import api from '../Services/api'

export type AuthData = {
	token: any;
	email: string;
	name: any;
	status: number;
	message: string;
	id: string;
	role: string;
};


const signIn = (email: string, _password: string): Promise<AuthData> => {
	return new Promise((resolve, reject) => {
		api.post('/login', { email: email, password: _password }).then(response => {
			resolve({
				token: response.data.token,
				email: email,
				username: response.data.username,
				id: response.data.id,
				role: response.data.role,
				status: response.data.status,
				message: response.data.message
			} as unknown as AuthData)
        })
	})
};

export const authService = {
  	signIn,
};