import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

interface HeaderProps {
    title: string,
    goBackButton?: boolean,
    cancelButton?: boolean
}

export default function Header({ title, goBackButton = true, cancelButton = true }: HeaderProps) {
    const navigation = useNavigation();

    function handleGoBackToHomePage() {
        navigation.navigate('ListGym');
    }
    
    return(
        <View style={styles.container} >
            { 
               /*  goBackButton ? (
                    <BorderlessButton onPress={navigation.goBack}>
                        <Feather name="arrow-left" size={24} color="#95419c" />
                    </BorderlessButton>
                ) : (
                    <View />
                )  */
            }

            <View />
            <Text style={styles.title}>{title}</Text>
            <View />

            { 
                /* cancelButton ? (
                    <BorderlessButton onPress={handleGoBackToHomePage}>
                        <Feather name="x" size={24} color="#95419c" />
                    </BorderlessButton>
                ) : (
                    <View />
                )  */
            }
        </View>
    )
}