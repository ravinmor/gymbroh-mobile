import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, TextInput, InteractionManager } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../Context/Auth";
import api from "../../Services/api";

import styles from "./styles";

interface MuscularGroupsInterface {
    id: string,
    created_at: string,
    name: string,
    description: string
}

interface ExerciseInterface {
    id: string,
    created_at: string,
    name: string,
    description: string
}

interface EntitySonRouteParams {
    id: string,
    date: string
}

export default function CreateExercise() {
    const navigation = useNavigation()
    
    const route = useRoute()

    const params = route.params as EntitySonRouteParams

    const [ muscularGroups, setMuscularGroups ] = useState<MuscularGroupsInterface[]>([])
    const [ muscularGroupChoosed, setMuscularGroupChoosed ] = useState('')
    const [ exercises, setExercises ] = useState<ExerciseInterface[]>([])
    const [ exerciseChoosed, setExerciseChoosed ] = useState('')
    const [ series, setSeries ] = useState('')
    const [ repetitions, setRepetitions ] = useState('')
    const [ description, setDescription ] = useState('')

    const _auth = useAuth();
    
    useEffect(() => {
        apiGet('exerciseTypes')
    }, [])
    
    useEffect(() => {
        apiGetExercises(`exercisesByType/${muscularGroupChoosed}`)
    }, [muscularGroupChoosed])

    
    function consistData() {

        if(muscularGroupChoosed == '') {
            alert('Por favor preencha o campo "Grupo muscular"')
            return false
        }
        if(exerciseChoosed == '') {
            alert('Por favor preencha o campo "Exercícios"')
            return false
        }
        if(series == '') {
            alert('Por favor preencha o campo "Séries"')
            return false
        }
        if(repetitions == '') {
            alert('Por favor preencha o campo "Repetições"')
            return false
        }
        if(description == '') {
            alert('Por favor preencha o campo "Descrição"')
            return false
        }
        return true
    }
    
    async function handleNavigationSave() {
        const data = new FormData()
        if (!consistData()) {
            return;
        }
        data.append('user_id', params.id)
        data.append('exercise', exerciseChoosed)
        data.append('day', params.date)
        data.append('repetitions', repetitions)
        data.append('series', series)
        data.append('description', description)

        let res = await apiPost(
            data,
            'schedules',
        );

        alert('Alterações salvas com sucesso!')

        navigation.goBack()
    }

    
    const apiGet = async (apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}`;
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
            
            setMuscularGroups(json)
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

    const apiGetExercises = async (apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}`;
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
            
            setExercises(json)
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

    const apiPost = async (inputParam, apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}`;
        console.log('URL:' + URL);
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
            let json = null
            json = await resp.json()
            console.log(apiName + ' Response', json)
            if (resp.ok) {
                return json
            }
            return json.then(err => {
                console.log('error :', err)
                throw err
            });
        })
        .then(json => json)
    }
    
    return(
        <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="never"
        >
            <View style={styles.containerLogin}>
                <View style={styles.fieldTypeData}>
                    <View style={styles.floatBorder}></View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Grupo Muscular</Text>
                    <View
                        style={[styles.inputLogin, { 
                            borderColor: '#B84DC1',
                            borderWidth: 1,
                            paddingVertical: 0,
                            paddingHorizontal: 0,
                            paddingLeft: 15
                        }]}
                    >
                        <Picker
                            style={[styles.inputLogin, {
                                backgroundColor: '#00000000',
                                width: 340
                            }]}
                            selectedValue={muscularGroupChoosed}
                            onValueChange={(itemValue) => {
                                setMuscularGroupChoosed(itemValue)
                            }}
                        >
                            {muscularGroups.map(group => {
                                return (
                                    <Picker.Item key={group.id} label={group.description} value={group.name}/>
                                )
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Exercício</Text>
                    <View
                        style={[styles.inputLogin, { 
                            borderColor: '#B84DC1',
                            borderWidth: 1,
                            paddingVertical: 0,
                            paddingHorizontal: 0,
                            paddingLeft: 15
                        }]}
                    >
                        <Picker
                            style={[styles.inputLogin, {
                                backgroundColor: '#00000000',
                                width: 340
                            }]}
                            selectedValue={exerciseChoosed}
                            onValueChange={(itemValue) => {
                                setExerciseChoosed(itemValue)
                            }}
                        >
                            {exercises.map(exe => {
                                return (
                                    <Picker.Item key={exe.id} label={exe.description} value={exe.name}/>
                                )
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={styles.inputText}>Series</Text>
                        <TextInput
                            style={[styles.inputLogin, {
                                width: 168,
                                marginRight: 10
                            }]}
                            placeholder="Qtde de séries"
                            placeholderTextColor="#B84DC190"
                            value={series}
                            onChangeText={setSeries}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.inputText}>Repetições</Text>
                        <TextInput
                            style={[styles.inputLogin, {
                                width: 168,
                                marginLeft: 10
                            }]}
                            placeholder="Qtde repetições"
                            placeholderTextColor="#B84DC190"
                            value={repetitions}
                            onChangeText={setRepetitions}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Descrição</Text>
                    <TextInput
                        style={[styles.inputLogin, {
                            height: 140
                        }]}
                        placeholder="Digite informações adicionais"
                        placeholderTextColor="#B84DC190"
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    >
                    </TextInput>
                </View>
                <View>
                    <RectButton style={styles.button} onPress={handleNavigationSave}>
                        <Text style={styles.textButton}>Salvar</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    )
}