import { useNavigation } from "@react-navigation/native";
import { Text, View, TextInput } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import styles from "./styles.tsx"

export default function ResetPassword() {

    const navigation = useNavigation()

    function handleForgotPassword() {
        alert('Enviamos um email com sua nova senha')
        navigation.navigate("Login")
    }
    
    return(
        <View style={styles.containerFgtPass}>
            <View style={styles.area}>
                <Text style={styles.textTitle}>Esqueceu a senha?</Text>
                <Text style={styles.inputText}>Digite o seu email para resetar a senha</Text>
                <TextInput   
                    style={styles.inputFgtPass} 
                    placeholder="Digite o seu email"
                    placeholderTextColor="#ccbcc7"
                />
                <RectButton style={styles.button} onPress={handleForgotPassword}>
                    <Text style={styles.textButton}>Resetar senha</Text>
                </RectButton>
            </View>
            <View>
            </View>
        </View>
    )
}