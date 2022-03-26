import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useAuth } from "../../Context/Auth";
import api from "../../Services/api";
import styles from "./styles";

interface FooterProps {
    settings: boolean
}

export default function Footer({ settings }: FooterProps) {
    const navigation = useNavigation()
    const auth = useAuth()
    const [ isNotStudent, setIsNotStudent ] = useState(false)
    const [ isPersonal, setIsPersonal ] = useState(false)
    const [ father, setFather ] = useState({})
    const [ isLinked, setIsLinked ] = useState(false);

    const role = auth.authData.role
    const id = auth.authData.id

    useEffect(() => {
        setIsNotStudent(role == 'student' ? false : true)
        setIsPersonal(role == 'personal')
        apiGet('users/getFather');
    }, [isLinked])

    const apiGet = async (apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}/${auth.authData.id}`;
        let headers = {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
            'Authorization': `Bearer ${auth.authData.token}`
        };

        let obj = {
            method: 'GET',
            headers: headers,
        };

        return fetch(URL, obj)
        .then(async resp => {
            let json = null;
            json = await resp.json();
            console.log(json)
            if(json.length > 0) {
                setIsLinked(true)
            }
            console.log(isLinked)
            
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

    function handleNavigateTo(id: string) {
        navigation.navigate('Configurations')
    }

    function handleNavigateToLinkUser() {
        if(auth.authData.role == 'gym') {
            navigation.navigate('LinkUser', { 
                title: 'Vincule os seus Instrutores!',
                subtitle: 'Basta instruir seus Instrutores a apontarem a camera do celular para este QR code através do App serão automaticamente vinculados',
                description: 'Ou basta pressionar o ícone abaixo para enviar seu código de vinculo para o seu Instrutor',
                link: id
            })
            return;
        } else if(auth.authData.role == 'personal') {
            navigation.navigate('LinkUser', {
                title: 'Vincule os seus alunos!',
                subtitle: 'Basta instruir seus alunos a apontarem a camera do celular para este QR code que automaticamente serão vinculados',
                description: 'Ou basta pressionar o ícone abaixo para enviar seu código de vinculo para o seu aluno',
                link: id
            })
            return;
        } else if(auth.authData.role == 'student') {
            navigation.navigate('LinkUserScanner', {
                title: 'Vincule-se a um Instrutor!',
                subtitle: 'Basta apontar a camera do seu celular para o QR Code, ou digitar o código que te enviarem',
                link: id
            })
            return;
        }
        navigation.navigate('LinkUserScanner', {
            title: 'Você não deveria estar aqui...',
            subtitle: 'Uma mensagem com a sua localização e os seus dados está sendo enviada para o real Administrador e para as autoridades de sua região... better run',
            link: id
        })
        return;
    }

    function handleNavigateToScanner() {
        navigation.navigate('LinkUserScanner', {
            title: 'Vincule-se a uma academia!',
            subtitle: 'Basta apontar a camera do seu celular para o QR Code, ou digitar o código que te enviarem',
            link: id
        })
    }

    return(
        <View style={styles.footer}>
            {settings &&
                <BorderlessButton style={styles.footerField} onPress={handleNavigateTo}>
                    <Feather style={styles.footerIcon} name="settings" size={24} color="#95419c" />
                </BorderlessButton>
            }
            {isNotStudent && 
                <BorderlessButton style={styles.footerField} onPress={handleNavigateToLinkUser}>
                    <Feather style={styles.footerIcon} name="user-plus" size={24} color="#95419c" />
                </BorderlessButton>
            }
            {isPersonal && !isLinked &&
                <BorderlessButton style={styles.footerField} onPress={handleNavigateToScanner}>
                    <Feather style={styles.footerIcon} name="users" size={24} color="#95419c" />
                </BorderlessButton>
            }
        </View>
    )
}