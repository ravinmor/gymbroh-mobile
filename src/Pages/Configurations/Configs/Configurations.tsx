import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import {useAuth} from '../../../Context/Auth';

import styles from "./styles.tsx"

export default function Configurations() {
    const navigation = useNavigation();
    const _auth = useAuth();

    function handleNavigationToEditProfile() {
        navigation.navigate('EditProfile')
    }

    function handleNavigationToSystem() {
        navigation.navigate('System')
    }

    function handleNavigationToTerms() {
        navigation.navigate('Terms')
    }

    function handleNavigationToSecurityAndPrivacity() {
        navigation.navigate('SecurityAndPrivacity')
    }
    
    return(
        <View style={styles.containerConfigs}>
            <View style={styles.configArea}>
                <BorderlessButton
                    borderless={false} 
                    style={[styles.borderbuttonText, {marginTop: 50}]}
                    onPress={handleNavigationToEditProfile}
                >
                    <Text
                        style={styles.textConfiguration}>Editar perfil
                    </Text>
                </BorderlessButton>
                <BorderlessButton
                    borderless={false} 
                    style={styles.borderbuttonText}
                    onPress={handleNavigationToSystem}
                >
                    <Text
                        style={styles.textConfiguration}>Sistema
                    </Text>
                </BorderlessButton>
                <BorderlessButton
                    borderless={false} 
                    style={styles.borderbuttonText}
                    onPress={handleNavigationToTerms}
                >
                    <Text
                        style={styles.textConfiguration}>Termos de serviço
                    </Text>
                </BorderlessButton>
                <BorderlessButton
                    borderless={false} 
                    style={styles.borderbuttonText}
                    onPress={handleNavigationToSecurityAndPrivacity}
                >
                    <Text
                        style={styles.textConfiguration}>Segurança e privacidade
                    </Text>
                </BorderlessButton>
            </View>
            <View style={styles.buttonSignOutField}>
                <Text style={styles.textGymbroh}>Gymbroh v1.0.0(c)</Text>
                <Text style={[styles.textGymbroh, { marginBottom: 20 }]}>©All rights reserved</Text>
                <Pressable style={styles.buttonSignOut} onPress={_auth.signOut}>
                    <Text style={styles.textButtonSignOut}>Sair</Text>
                </Pressable>
            </View>
        </View>
    )
}