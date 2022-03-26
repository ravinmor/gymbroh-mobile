import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Pressable, Text, View , Share } from "react-native";
import QRCode from "react-native-qrcode-generator";

import styles from "./styles"

interface UsersDistinguishDataProps {
    title: string,
    subtitle: string,
    description: string,
    user_id: string,
    link: string
}

export default function LinkUser() {
    const route = useRoute()
    const params = route.params as UsersDistinguishDataProps

    const shareOptions = {
        message:  params.link
    };

    const onSharePress = () => Share.share(shareOptions);

    return(
        <View style={styles.containerLinkUser}>
            <View style={styles.textFieldLinkUser}>
                <Text style={styles.textTitleLinkUser}>{params.title}</Text>
                <Text style={styles.textSubTitleLinkUser}>{params.subtitle}</Text>
            </View>
            <View style={styles.qrCodeView}>
                <View style={styles.qrCodeViewWhiteUsefulArea}>
                    <QRCode
                        value={params.link}
                        size={300}
                        bgColor='black'
                        fgColor='white'
                    />
                    <View style={styles.qrCodeLinkArea}>
                        <Pressable style={styles.buttonLink}  onPress={onSharePress}>
                            <Feather name="share-2" size={24} color="#95419c" />
                        </Pressable>
                        <Text style={styles.clipboardAdvice}>Clique no icone para enviar o seu link para alguém</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}