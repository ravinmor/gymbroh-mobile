import { useEffect, useState } from "react"
import { Feather } from "@expo/vector-icons"
import { Text, View, TextInput, Image, Pressable, Platform } from "react-native"
import { RectButton, ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation, useRoute } from "@react-navigation/native"
import * as ImagePicker from 'expo-image-picker'
import { Picker } from '@react-native-picker/picker'
import DateTimePicker  from '@react-native-community/datetimepicker'

import api from '../../../Services/api'
import styles from "./styles.tsx"

interface UserDataRouteParams {
    username: string,
    user_lastname: string,
    email: string,
    birthdate: string,
    gender: string,
    cpf: string,
    postal_code: string,
    street: string,
    address_number: string,
    neighborhood: string,
    city: string,
    state_initials: string,
    password: string,
    roles: string
}

interface EntitySonRouteParams {
    role: string
}

export default function SiginIn() {
    const [ username, setUsername ] = useState('')
    const [ user_lastname, setUser_lastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ gender, setGender ] = useState('')
    const [ cpf, setCPF ] = useState('')
    const [ postal_code, setPostal_code ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ address_number, setAddress_number ] = useState('')
    const [ neighborhood, setNightborhhod ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state_initials, setState_initials ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ images, setImages ] = useState<string[]>([])
    const [ roles, setRoles ] = useState<string[]>([])
    const [ visiblePassword, setVisiblePassword ] = useState<boolean>(true)
    const [ visibleConfirmPassword, setVisibleConfirmPassword ] = useState<boolean>(true)
    const [ visiblePassEye, setVisiblePassEye ] = useState<string>('eye')
    const [ visibleConfirmPassEye, setVisibleConfirmPassEye ] = useState<string>('eye')
    const [ show, setShow ] = useState(false);
    const [ styleDate, setStyleDate ] = useState(styles.inputPlaceHolder);
    const [ textBirthdate, setTextBirthdate ] = useState('Digite a data do seu nascimento');

    const navigation = useNavigation()
    const route = useRoute()

    const routeParams = route.params as EntitySonRouteParams

    function consistData() {

        if(username == '') {
            alert('Por favor preencha o campo "Nome"')
            return false
        }
        if(user_lastname == '') {
            alert('Por favor preencha o campo "Sobrenome"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Email"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Data de nascimento"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Sexo"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "CPF"')
            return false
        }
        if(images == []) {
            alert('Escolha pelo menos 1 foto')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Cep"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Rua"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "N°"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Bairro"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Cidade"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Estado - UF"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Senha"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Confirmar senha"')
            return false
        }
        if(username == '') {
            alert('Por favor preencha o campo "Confirmar senha"')
            return false
        }
        if(password !== confirmPassword) {
            alert('As senhas não conferem')
            return false
        }
        return true
    }

    async function handleCreateUser() {
        const data = new FormData()
        if (!consistData()) {
            return;
        }
        data.append('username', username)
        data.append('user_lastname', user_lastname)
        data.append('email', email)
        data.append('birthdate', birthdate)
        data.append('gender', gender)
        data.append('cpf', cpf)
        data.append('postal_code', postal_code)
        data.append('street', street)
        data.append('address_number', address_number)
        data.append('neighborhood', neighborhood)
        data.append('city', city)
        data.append('state_initials', state_initials)
        data.append('password', password)
        data.append('role', routeParams.role)

        images.forEach((image, index) => {
            data.append('images', {
                name: `image_${index}.jpg`,
                type: 'image/jpg',
                uri: image,
            } as any)
        })
        
        let res = await apiPost(
            data,
            'users',
        );

        navigation.navigate('Login')
    }

    const apiPost = async (inputParam, apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}`;
        let param = inputParam;

        let headers = {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
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

    async function handleSelectImages() {
        if(images.length == 5) {
            alert('Ops! Você pode escolher no máximo 5 fotos...')
            return
        }

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if(status !== 'granted') {
            alert('Ops! Precisamos de acesso às suas fotos...')
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        })

        if(result.cancelled) {
            return
        }
        
        const { uri: image } = result

        setImages([... images, image])
    }

    function handlePasswordEye() {
        if(visiblePassword === true){
            setVisiblePassword(false)
        } else {
            setVisiblePassword(true)
        }

        if(visiblePassEye == 'eye'){
            setVisiblePassEye('eye-off')
        } else {
            setVisiblePassEye('eye')
        }
    }

    function handleConfirmPasswordEye() {
        if(visibleConfirmPassword === true){
            setVisibleConfirmPassword(false)
        } else {
            setVisibleConfirmPassword(true)
        }

        if(visibleConfirmPassEye == 'eye'){
            setVisibleConfirmPassEye('eye-off')
        } else {
            setVisibleConfirmPassEye('eye')
        }
    }

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = timeToString(selectedDate);
        setShow(Platform.OS === 'ios');
        setBirthdate(currentDate);
        setTextBirthdate(new Date().toLocaleDateString(currentDate));
        setStyleDate(styles.inputDate)
    };

    return(
        <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="never"
        >
            <View style={styles.containerLogin}>
                <View style={styles.fieldTypeData}>
                    <Text style={styles.textTitle}>Dados</Text>
                    <View style={styles.floatBorder}></View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Nome</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite o seu nome"
                        placeholderTextColor="#B84DC190"
                        value={username}
                        onChangeText={setUsername}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Sobrenome</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite o seu sobrenome"
                        placeholderTextColor="#B84DC190"
                        value={user_lastname}
                        onChangeText={setUser_lastname}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Email</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite o seu Email"
                        placeholderTextColor="#B84DC190"
                        value={email}
                        onChangeText={setEmail}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    {show && <DateTimePicker
                        mode="date"
                        display="calendar"
                        value={new Date()}
                        onChange={onChangeDate}
                    />}
                    <Text style={styles.inputText}>Data de nascimento</Text>
                    <Pressable
                        style={[styles.inputLogin, {                    
                            paddingVertical: 0,
                            paddingHorizontal: 0,
                            justifyContent: "center",
                            alignItems: 'center'
                        }]}
                        onPress={() => {setShow(true)}}
                    >
                        <Text style={styleDate}>{ textBirthdate }</Text>
                    </Pressable>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Sexo</Text>
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
                            selectedValue={gender}
                            onValueChange={(itemValue) => {
                                setGender(itemValue)
                            }}
                        >
                            <Picker.Item  label="Masculino" value='1'/>
                            <Picker.Item  label="Feminino" value='0'/>
                        </Picker>
                    </View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>CPF</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite o seu CPF"
                        placeholderTextColor="#B84DC190"
                        value={cpf}
                        onChangeText={setCPF}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Fotos</Text>
                    <TouchableOpacity style={styles.avatar} onPress={handleSelectImages}>
                        <Feather name="plus" size={24} color="#B84DC1" />
                    </TouchableOpacity>
                    <View style={styles.uploadedImagesContainer}>
                        {images.map( image => {
                            return (
                                <Image
                                    key={image}
                                    source={{ uri: image }}
                                    style={styles.uploadedImage}
                                />
                            )
                        })}
                    </View>
                </View>
                
                <View style={styles.fieldTypeData}>
                    <Text style={styles.textTitle}>Endereço</Text>
                    <View style={styles.floatBorder}></View>
                </View>

                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>CEP</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite o seu CEP"
                        placeholderTextColor="#B84DC190"
                        value={postal_code}
                        onChangeText={setPostal_code}
                    >
                    </TextInput>
                </View>
                <View style={[styles.viewInput, {flexDirection: "row"}]}>
                    <View>
                        <Text style={styles.inputText}>Rua</Text>
                        <TextInput
                            style={[styles.inputLogin, {width: 234, marginHorizontal: 4}]}
                            placeholder="Digite o nome da sua rua"
                            placeholderTextColor="#B84DC190"
                            value={street}
                            onChangeText={setStreet}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.inputText}>N°</Text>
                        <TextInput
                            style={[styles.inputLogin, {width: 116, marginHorizontal: 4}]}
                            placeholder="Digite o N°"
                            placeholderTextColor="#B84DC190"
                            value={address_number}
                            onChangeText={setAddress_number}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Bairro</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite o bairro"
                        placeholderTextColor="#B84DC190"
                        value={neighborhood}
                        onChangeText={setNightborhhod}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Cidade</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite a sua cidade"
                        placeholderTextColor="#B84DC190"
                        value={city}
                        onChangeText={setCity}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Estado - UF</Text>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Digite a seu estado"
                        placeholderTextColor="#B84DC190"
                        value={state_initials}
                        onChangeText={setState_initials}
                    >
                    </TextInput>
                </View>
                
                <View style={styles.fieldTypeData}>
                    <Text style={styles.textTitle}>Credenciais</Text>
                    <View style={styles.floatBorder}></View>
                </View>
                
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Senha</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.inputLogin, { 
                                width: 300,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                borderRightWidth: 0
                            }]}
                            secureTextEntry={visiblePassword}
                            placeholder="Digite a sua Senha"
                            placeholderTextColor="#B84DC190"
                            value={password}
                            onChangeText={setPassword}
                            >
                        </TextInput>
                        <Pressable style={styles.eyeFieldSignUp} onPress={handlePasswordEye}>
                            <Feather style={styles.eyeSignUp} name={visiblePassEye} size={24} color="#B84DC1" ></Feather>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Confirmar senha</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.inputLogin, { 
                                width: 300,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                borderRightWidth: 0
                            }]}
                            secureTextEntry={visibleConfirmPassword}
                            placeholder="Confirme a senha digitada"
                            placeholderTextColor="#B84DC190"
                            onChangeText={setConfirmPassword}
                        >
                        </TextInput>
                        <Pressable  style={styles.eyeFieldSignUp} onPress={handleConfirmPasswordEye}>
                            <Feather style={styles.eyeSignUp} name={visibleConfirmPassEye} size={24} color="#B84DC1" ></Feather>
                        </Pressable >
                    </View>
                </View>
                <View>
                    <RectButton style={styles.button} onPress={handleCreateUser}>
                        <Text style={styles.textButton}>Salvar</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    )
}