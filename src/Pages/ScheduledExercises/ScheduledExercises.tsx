import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import ExerciseItem from '../../Components/ExerciseItem/ExerciseItem';
import Footer from '../../Components/Footer/Footer';
import NoScheduledComponent from '../../Components/HandleExceptionComponents/NoScheduledComponent';
import { useAuth } from '../../Context/Auth';
import api from '../../Services/api';

import theme from "./theme.tsx"

type UserProps = {
	username: string;
	user_lastname: string;
	email: string;
	birthdate: string;
	gender: string;
	cpf: string;
	cnpj: string;
	postal_code: string;
	street: string;
	address_number: string;
	neighborhood: string;
	city: string;
	state_initials: string;
	password: string;
	role: string
};

interface EntitySonRouteParams {
  id: string
}

export default function ScheduledExercises() {
    const route = useRoute()
    const navigation = useNavigation();
    const _auth = useAuth();
    const [ father, setFather ] = useState<UserProps[]>([])

    const params = route.params as EntitySonRouteParams
    const userId = params ? params.id : _auth.authData.id

    useEffect(() => {
        apiGet(`users/getFather`)
    }, [])

    
    const apiGet = async (apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}/${userId}`;
        let headers = {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
            'Authorization': `Bearer ${_auth.authData.token}`
        };

        let obj = {
            method: 'GET',
            headers: headers,
        };

        return fetch(URL, obj)
        .then(async resp => {
            let json = null;
            json = await resp.json();
            if(json.length == 0) {
                navigation.navigate('LinkUserScanner', {
                    title: 'Vincule-se a um Instrutor!',
                    subtitle: 'Você precisa vincular-se a um instrutor para ter acesso aos seus treinos. Basta apontar a camera do seu celular para o QR Code, ou digitar o código que te enviarem',
                    link: _auth.authData.id
                })
                return
            }
            
            if (resp.ok) {
                return json;
            }
            return json.then(err => {
                console.log('error :', err);
                throw err;
            });
        })
        .then(json => json);
    }
    
    function handleNavigateToCreateExercise(id, date) {
        navigation.navigate('CreateExercise', { date, id })
    }

    LocaleConfig.locales.pt = {
        monthNames: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ],
        monthNamesShort: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
        ],
        dayNames: [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado"
        ],
        dayNamesShort: [
            "Dom",
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Sex",
            "Sáb"
        ]
    };
    
    LocaleConfig.defaultLocale = "pt";
        
    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };
  
	
    const loadItems =(day) => {
        setTimeout(() => {
			api.get(`/schedules/${userId}`).then(response => {
				const newItems = {};
		
				response.data.map(exercise => {
					newItems[exercise.day] = []
					newItems[exercise.day].push({
						id: exercise.id,
						name: exercise.description,
						repetitions: exercise.repetitions,
						series: exercise.series,
						user_id: exercise.user_id,
						type: exercise.type,
						exercise_id: exercise.exercise_id,
						height: Math.max(50, Math.floor(Math.random() * 150))
					})
				})
			
				Object.keys(items).forEach(key => {
					newItems[key] = items[key];
				});
				setItems(newItems);
			})
        }, 1000);
    }
    const [items, setItems] = useState({});

    const renderItem = (item) => {
      return (
        <ExerciseItem item={item} />
      );
    };

	const yourDate = new Date()
	const today = timeToString(yourDate)

    return (
        <View style={{flex: 1}}>
			<Agenda
					items={items}
					loadItemsForMonth={loadItems}
					renderItem={renderItem}
					theme={theme}

					pastScrollRange={4}
					futureScrollRange={4}

					renderEmptyData={() => {return <NoScheduledComponent />;}}
                    onDayLongPress={(e) => {
                        if(_auth.authData.role == 'student') {
                            return
                        }
                        handleNavigateToCreateExercise(userId, e.dateString)
                    }}
					selected={today}
			/>
            <Footer settings={true} />
		</View>
    );
}
