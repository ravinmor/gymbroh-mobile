import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles"

export default function System() {
    const navigation = useNavigation();
    
    const [modalVisible, setModalVisible] = useState(false);

    function handleNavigationToEditProfile() {
        navigation.navigate('Licence')
    }
    
    return (
        
        <View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalCentral}>
                        <View style={styles.viewArea}>
                            <View style={styles.fieldTitleModalCredit}>
                                <Text style={styles.titleModalCredit}>Créditos</Text>
                                <Text style={styles.subTitleModalCredit}>Gymbroh v1.0.0(c)</Text>
                                
                                <Text
                                    style={
                                        [
                                            styles.titleModalCredit,
                                            {marginTop: 20, fontSize: 18}
                                        ]
                                    }
                                >
                                    Agradecimentos especiais: MrZyded_shen, MrZyde, wunpkins, d_shen, MrZyde, wunpkins, d_shen, MrZyde, d_shen, MrZyde, wunpkins, d_shen, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde, MrZyde e muitos outros.
                                </Text>
                            </View>
                            <Pressable
                                style={styles.buttonModalCredit}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={styles.textStyleModalCredit}>Fechar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        
            <View style={styles.containerConfigsSystem}>
                <View style={styles.centeredViewModalCredit}>
                    <BorderlessButton
                        borderless={false} 
                        style={[styles.borderbuttonTextModalCredit, {marginTop: 50}]}
                        onPress={handleNavigationToEditProfile}
                    >
                        <Text
                            style={styles.textConfigurationModalCredit}>Licença
                        </Text>
                    </BorderlessButton>
                    <BorderlessButton
                        borderless={false} 
                        style={styles.borderbuttonTextModalCredit}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text
                            style={styles.textConfigurationModalCredit}>Créditos
                        </Text>
                    </BorderlessButton>
                </View>
            </View>
        </View>
    )
}