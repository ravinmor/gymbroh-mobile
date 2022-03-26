import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { BorderlessButton, RectButton, ScrollView } from "react-native-gesture-handler";

import {useAuth} from '../../../Context/Auth';
import styles from "./styles.tsx"

export default function Login() {
    const navigation = useNavigation()

    const [ loading, isLoading ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('')

    const auth = useAuth();

    function handleNavigateLogin() {
        isLoading(true);
        auth.signIn(email, password)
    }

    function handleNavigateSigIn(role) {
        navigation.navigate("SiginIn", { role: role } )
    }
    
    function handleNavigateResetPassword() {
        navigation.navigate("ResetPassword")
    }
    
    return(
        <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="never"
        >
            <View style={styles.containerLogin}>
                <View style={styles.area}>
                    <Text style={styles.textTitle}>Login</Text>
                    <View>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput
                            style={styles.inputLogin}
                            placeholder="Digite o seu email"
                            placeholderTextColor="#ccbcc7"
                            onChangeText={setEmail}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.inputText}>Senha</Text>
                        <TextInput
                            style={styles.inputLogin}
                            placeholder="Digite a sua senha"
                            placeholderTextColor="#ccbcc7"
                            onChangeText={setPassword}
                        >
                        </TextInput>
                        <BorderlessButton borderless={false} style={styles.borderLessForgotPass} onPress={handleNavigateResetPassword}>
                            <Text style={styles.inputTextForgotPass}>Esqueceu a Senha?</Text>
                        </BorderlessButton>
                    </View>
                    <View>
                        <RectButton style={styles.button} onPress={handleNavigateLogin}>
                            <Text style={styles.textButton}>Login</Text>
                        </RectButton>
                    </View>
                    <View style={styles.orView}>
                        <View style={styles.borderBottomWhite}></View>
                        <Text style={styles.textOrView}>OU</Text>
                        <View style={styles.borderBottomWhite}></View>
                    </View>
                    <View style={styles.orView}>
                        <Text style={styles.textOrView}>Não tem uma conta?</Text>
                    </View>
                    <View>
                        <RectButton style={styles.button} onPress={() => { handleNavigateSigIn( 'student' ) }}>
                            <Text style={styles.textButton}>Cadastre-se como aluno</Text>
                        </RectButton>
                        <RectButton style={styles.button} onPress={() => { handleNavigateSigIn( 'personal' ) }}>
                            <Text style={styles.textButton}>Cadastre-se como personal</Text>
                        </RectButton>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}