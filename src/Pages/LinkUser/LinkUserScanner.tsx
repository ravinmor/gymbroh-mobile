import Clipboard  from "@react-native-clipboard/clipboard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

import styles from "./styles"
import { useAuth } from "../../Context/Auth";
import { RectButton } from "react-native-gesture-handler";

interface UsersDistinguishDataProps {
    title: string,
    subtitle: string,
    description?: string,
    user_id: string,
    link: string
}

export default function LinkUserScanner() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('')
    const route = useRoute()

    const _auth = useAuth()
    const idUser = _auth.authData.id

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setText(data);
        linkUser()
    };

    function linkUser() {
        const data = new FormData()
        data.append('father', text)
        data.append('son', idUser)

        apiPost(data, 'users/createRelation')
    }

    const apiPost = async (inputParam, apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}`;
        let param = inputParam;

        let headers = {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
            'Authorization': `Bearer ${_auth.authData.token}`
            
        };

        let obj = {
            method: 'POST',
            headers: headers,
            body: param,
        };

        return fetch(URL, obj)
        .then(async resp => {
            let json = null;
            json = await resp.json();
            console.log(json)
            if (resp.ok) {
                alert('Pronto, agora você pode acessar a sua agenda!');
                if(_auth.authData.role == 'student') {
                    navigation.navigate('LinkUserScanner', {
                        title: 'Vincule-se a um Instrutor!',
                        subtitle: 'Você precisa vincular-se a um instrutor para ter acesso aos seus treinos. Basta apontar a camera do seu celular para o QR Code, ou digitar o código que te enviarem',
                        link: _auth.authData.id
                    })
                } else if (_auth.authData.role == 'personal') {
                    navigation.navigate('ListStudents')
                }
                return json;
            }
            return json.then(err => {
                alert('Não foi possível vincular, tente mais tarde');
                console.log('error :', err);
                throw err;
            });
        })
        .then(json => json);
    }

    if (hasPermission === null) {
        return (
            <View style={styles.containerLinkUser}>
                <View style={styles.textFieldLinkUser}>
                    <Text style={styles.textTitleLinkUser}>Requisitando permissão de camêra...</Text>
                </View>
            </View>
        )
    }

    if (hasPermission === false) {
        return (
            <View style={styles.containerLinkUser}>
                <View style={styles.textFieldLinkUser}>
                    <Text style={styles.textTitleLinkUser}>Para vincular-se é necessário permitir o aplicativo acessar sua camêra</Text>
                </View>
                <View style={[styles.qrCodeLinkArea, {
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    <Pressable style={[styles.buttonLink, {
                           backgroundColor: '#ffffffe6',
                           width: 360

                        }]} 
                        onPress={askForCameraPermission}
                    >
                        <Text style={styles.qrCodeLink}>Permitir acesso</Text>
                    </Pressable> 
                </View>
                <View style={styles.textFieldLinkUser}>
                    <Text style={styles.textTitleLinkUser}>Ou...</Text>
                </View>
                <View style={[styles.textFieldLinkUser, {
                        justifyContent: 'center',
                        alignItems: 'center'
                    }]}
                >
                    <TextInput
                        style={[styles.buttonLink, { 
                            backgroundColor: "#ffffffd6",
                            width: 360
                        }]}
                        placeholder="Digite ou cole código de vinculo"
                        placeholderTextColor="#B84DC190"
                        value={text}
                        onChangeText={linkUser}
                    />
                </View>
            </View>
        )
    }
    
    const params = route.params as UsersDistinguishDataProps


    return(
        <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="never"
            style={styles.containerLinkUser}
        >
            <View style={styles.textFieldLinkUser}>
                <Text style={styles.textTitleLinkUser}>{params.title}</Text>
                <Text style={styles.textSubTitleLinkUser}>{params.subtitle}</Text>
            </View>
            <View style={styles.qrCodeView}>
                <View style={styles.qrCodeViewWhiteUsefulArea}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ 
                            height: 350,
                            width: 350,
                            borderRadius: 12
                        }}
                    />
                    <View style={styles.qrCodeLinkArea}>
                        <TextInput
                            style={[styles.buttonLink, { 
                                backgroundColor: "#B84DC140",
                                width: 310
                            }]}
                            placeholder="Digite ou cole o código de vinculo"
                            placeholderTextColor="#B84DC190"
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <Pressable
                        style={styles.buttonToLink}
                        onPress={linkUser}
                    >
                        <Text style={{
                            fontSize: 16, 
                            color: '#ffffffed'
                        }}
                        >Vincular</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}