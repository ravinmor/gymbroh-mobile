import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

interface HeaderProps {
    title: string
}

export default function SimpleHeader({ title }: HeaderProps) {
    const navigation = useNavigation();

    return(
        <View style={styles.containerSimpleHeader} >
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={32} color="#FFFFFF" />
            </BorderlessButton>
            <Text style={styles.titleSimpleHeader}>{title}</Text>
            <View />
        </View>
    )
}