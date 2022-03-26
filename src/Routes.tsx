import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const { Navigator, Screen } = createStackNavigator()

import ListGym from "./Pages/ListGym/ListGym"
import ListEntitySon from "./Pages/ListEntitySon/ListEntitySon"
import Header from "./Components/Header/Header"
import ScheduledExercises from "./Pages/ScheduledExercises/ScheduledExercises"
import ExercisesOfTheDay from "./Pages/ExercisesOfTheDay/ExercisesOfTheDay"
import ListPersonals from "./Pages/ListPersonals/ListPersonals"
import ListStudents from "./Pages/ListStudents/ListStudents"
import Login from "./Pages/Auth/Login/Login"
import SiginIn from "./Pages/Auth/SignUp/SiginIn"
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword"

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#1D1D1D' } }}>
                <Screen
                    name="Login"
                    component={Login}
                />
                <Screen
                    name="ResetPassword"
                    component={ResetPassword}
                />
                <Screen
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
                    component={ListPersonals}
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
            </Navigator>
        </NavigationContainer>
    )
}