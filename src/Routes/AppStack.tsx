import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Header  from '../Components/Header/Header';
import ListGym from '../Pages/ListGym/ListGym';
import ListStudents from '../Pages/ListStudents/ListStudents';
import ListEntitySon from '../Pages/ListEntitySon/ListEntitySon';
import ExercisesOfTheDay from '../Pages/ExercisesOfTheDay/ExercisesOfTheDay';
import ListPersonal from '../Pages/ListPersonals/ListPersonals';
import ScheduledExercises from '../Pages/ScheduledExercises/ScheduledExercises';
import Configurations from '../Pages/Configurations/Configs/Configurations';
import System from '../Pages/Configurations/System/System';
import Licence from '../Pages/Configurations/System/Licence';
import SecurityAndPrivacity from '../Pages/Configurations/SecurityAndPrivacity/SecurityAndPrivacity';
import Terms from '../Pages/Configurations/Terms/Terms';
import EditProfile from '../Pages/Configurations/EditProfile/EditProfile';
import { useAuth } from '../Context/Auth';
import CreateExercise from '../Pages/CreateExercise/CreateExercise';
import LinkUser from '../Pages/LinkUser/LinkUser';
import SimpleHeader from '../Components/Header/SimpleHeader';
import LinkUserScanner from '../Pages/LinkUser/LinkUserScanner';

const Stack = createStackNavigator();

const { Navigator, Screen, Group } = createStackNavigator()

export const AppStack = () => {
    const auth = useAuth()

	const userRole = auth.authData.role

	function chooseStackScreenByUserRole() {
		if(userRole == 'admin') {
			return (
				<Group>
					<Screen
						name="ListGym"
						component={ListGym}
						options={{
							headerShown: true,
							header: () => <Header 
								goBackButton={false}
								cancelButton={false}
								title="Listagem de acadêmias" 
							/>
						}}
					/>
					<Screen
						name="ListPersonals"
						component={ListPersonal}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}} 
					/>
					<Screen
						name="ListStudents"
						component={ListStudents}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}} 
					/>
					<Screen
						name="ListEntitySon"
						component={ListEntitySon}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}} 
					/>
					<Screen
						name="CreateExercise"
						component={CreateExercise}
						options={{
							headerShown: true,
							header: () => <Header
								goBackButton={true}
								cancelButton={false}
								title="Criar exercício"
							/>
						}} 
					/>
				</Group>
			)
		} else if (userRole == 'gym') {
			return (
				<Group>
					<Screen
						name="ListPersonals"
						component={ListPersonal}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}} 
					/>
					<Screen
						name="ListStudents"
						component={ListStudents}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}} 
					/>
					<Screen
						name="ListEntitySon"
						component={ListEntitySon}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}} 
					/>
					<Screen
						name="CreateExercise"
						component={CreateExercise}
						options={{
							headerShown: true,
							header: () => <Header
								goBackButton={true}
								cancelButton={false}
								title="Criar exercício"
							/>
						}} 
					/>
				</Group>
			)
		} else if (userRole == 'personal') {
			return (
				<Group>
					<Screen
						name="ListStudents"
						component={ListStudents}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}}
					/>
					<Screen
						name="ListEntitySon"
						component={ListEntitySon}
						options={{
							headerShown: true,
							header: () => <Header
								title="Listagem"
							/>
						}} 
					/>
					<Screen
						name="CreateExercise"
						component={CreateExercise}
						options={{
							headerShown: true,
							header: () => <Header
								goBackButton={true}
								cancelButton={false}
								title="Criar exercício"
							/>
						}} 
					/>
				</Group>
			)
		} else if (userRole == 'student') {
			return
		}
	}
	
	return (
		<Navigator screenOptions={{ 
			headerShown: false,
			cardStyle: { backgroundColor: '#1D1D1D' },
			cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
		}}>
			<Group>
				{chooseStackScreenByUserRole()}
			</Group>
			<Group>
				<Screen
					name="ScheduledExercises"
					component={ScheduledExercises}
					options={{
						headerShown: true,
						header: () => <Header
							title="Lista de treinos"
						/>
					}} 
				/>
				<Screen
					name="ExercisesOfTheDay"
					component={ExercisesOfTheDay}
					options={{
						headerShown: true,
						header: () => <Header
							title="Exercícios"
						/>
					}} 
				/>
				<Screen
					name="EditProfile"
					component={EditProfile}
					options={{
						headerShown: true,
						header: () => <Header
							goBackButton={true}
							cancelButton={false}
							title="Editar Perfil"
						/>
					}} 
				/>
				<Screen
					name="Configurations"
					component={Configurations}
					options={{
						headerShown: true,
						header: () => <Header
							goBackButton={true}
							cancelButton={false}
							title="Configurações"
						/>
					}} 
				/>
				<Screen
					name="System"
					component={System}
					options={{
						headerShown: true,
						header: () => <Header
							goBackButton={true}
							cancelButton={false}
							title="Sistema"
						/>
					}} 
				/>
				<Screen
					name="Licence"
					component={Licence}
					options={{
						headerShown: true,
						header: () => <Header
							goBackButton={true}
							cancelButton={false}
							title="Licença"
						/>
					}} 
				/>
				<Screen
					name="Terms"
					component={Terms}
					options={{
						headerShown: true,
						header: () => <Header
							goBackButton={true}
							cancelButton={false}
							title="Termos de serviço"
						/>
					}} 
				/>
				<Screen
					name="SecurityAndPrivacity"
					component={SecurityAndPrivacity}
					options={{
						headerShown: true,
						header: () => <Header
							goBackButton={true}
							cancelButton={false}
							title="Segurança e privacidade"
						/>
					}} 
				/>
				<Screen
					name="LinkUser"
					component={LinkUser}
					options={{
						headerShown: true,
						header: () => <SimpleHeader
							title="" 
						/>
					}}
				/>
				<Screen
					name="LinkUserScanner"
					component={LinkUserScanner}
					options={{
						headerShown: true,
						header: () => <SimpleHeader
							title="" 
						/>
					}}
				/>
			</Group>
		</Navigator>
	);
};
