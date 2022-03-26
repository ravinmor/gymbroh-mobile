import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerConfigsSystem: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    centeredViewModalCredit: {
        flex: 1,
    },
    borderbuttonTextModalCredit: {
        margin: 10
    },
    textConfigurationModalCredit: {
        marginHorizontal: 10,
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
        color: '#B84DC1',
        justifyContent: "flex-start"
    },
    modalCentral: {
        flex: 1,
        top: 200
    },
    viewArea: {
        margin: 20,
        borderColor: "#FFFFFF90",
        borderWidth: 1.5,
        padding: 35,
        height: "50%",
        width: "90%",
        alignItems: "center",
        elevation: 5
    },
    fieldTitleModalCredit: {
        width: "110%",
        justifyContent: 'flex-start'
    },
    titleModalCredit: {
        fontFamily: "Nunito_800ExtraBold",
        color: '#ffffffd8',
        justifyContent: 'flex-start',
        fontSize: 20
    },
    subTitleModalCredit: {
        fontFamily: "Nunito_600SemiBold",
        color: '#ffffffc0',
        justifyContent: 'flex-start',
        fontSize: 14
    },

    buttonModalCredit: {},
    textStyleModalCredit: {
        margin: 40,
        color: '#FFFFFF',
        textDecorationLine: 'underline'
    }
})