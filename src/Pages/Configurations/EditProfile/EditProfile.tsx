import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker'
import DateTimePicker  from '@react-native-community/datetimepicker'

import { useAuth } from "../../../Context/Auth";
import api from "../../../Services/api";
import styles from "./styles.tsx"

export default function EditProfile() {
    const navigation = useNavigation()
    
    const [ username, setUsername ] = useState('')
    const [ user_lastname, setUser_lastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ gender, setGender ] = useState('')
    const [ cpf, setCPF ] = useState('')
    const [ postal_code, setPostal_code ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ address_number, setAddress_number ] = useState('')
    const [ neighborhood, setNeighborhood ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state_initials, setState_initials ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ images, setImages ] = useState<string[]>([])
    const [ roles, setRoles ] = useState<string>('')
    const [ visiblePassword, setVisiblePassword ] = useState<boolean>(true)
    const [ visibleConfirmPassword, setVisibleConfirmPassword ] = useState<boolean>(true)
    const [ visiblePassEye, setVisiblePassEye ] = useState<string>('eye')
    const [ visibleConfirmPassEye, setVisibleConfirmPassEye ] = useState<string>('eye')
    const [ show, setShow ] = useState(false);
    const [ styleDate, setStyleDate ] = useState(styles.inputDate);
    const [ textBirthdate, setTextBirthdate ] = useState('Digite a data do seu nascimento');

    const _auth = useAuth();

    useEffect(() => {
        api.get(`/users/${_auth.authData.id}`).then(response => {
            setUsername(response.data.username)
            setUser_lastname(response.data.user_lastname)
            setEmail(response.data.email)
            setBirthdate(response.data.birthdate)
            setTextBirthdate(new Date().toLocaleDateString(birthdate));
            setGender(response.data.gender)
            setCPF(response.data.cpf)
            setPostal_code(response.data.postal_code)
            setStreet(response.data.street)
            setAddress_number(response.data.address_number)
            setNeighborhood(response.data.neighborhood)
            setCity(response.data.city)
            setState_initials(response.data.state_initials)
            setImages(response.data.images)
            setRoles(response.data.roles)
        })
    }, [_auth.authData.id])
    
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

    async function handleNavigationEditUser() {
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
        data.append('role', roles)
        
        let res = await apiPost(
            data,
            'users',
        );

        alert('Alterações salvas com sucesso!')
    }

    const apiPost = async (inputParam, apiName) => {
        let URL = `http://192.168.0.66:3333/${apiName}/${_auth.authData.id}`;
        console.log('URL:' + URL);
        let param = inputParam;

        let headers = {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        };

        let obj = {
            method: 'PUT',
            headers: headers,
            body: param,
        };

        return fetch(URL, obj)
        .then(async resp => {
            let json = null;
            json = await resp.json();
            console.log(apiName + ' Response', json);
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
        if(birthdate !== '') {
            setStyleDate(styles.inputPlaceHolder)

        } else {
            setStyleDate(styles.inputDate)
        }
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
                        onChangeText={setNeighborhood}
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
                    <Text style={styles.inputText}>Nova senha</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.inputLogin, { 
                                width: 300,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                borderRightWidth: 0
                            }]}
                            secureTextEntry={visiblePassword}
                            placeholder="Digite a sua nova Senha"
                            placeholderTextColor="#B84DC190"
                            value={password}
                            onChangeText={setPassword}
                        >
                        </TextInput>
                        <Pressable style={styles.eyeField} onPress={handlePasswordEye}>
                            <Feather style={styles.eye} name={visiblePassEye} size={24} color="#B84DC1" ></Feather>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputText}>Confirmar nova senha</Text>
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
                        <Pressable  style={styles.eyeField} onPress={handleConfirmPasswordEye}>
                            <Feather style={styles.eye} name={visibleConfirmPassEye} size={24} color="#B84DC1" ></Feather>
                        </Pressable >
                    </View>
                </View>
                <View>
                    <RectButton style={styles.button} onPress={handleNavigationEditUser}>
                        <Text style={styles.textButton}>Salvar</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    )
}