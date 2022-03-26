import { Dimensions, StyleSheet } from "react-native";

const mainColor = "#B84DC1"

export default StyleSheet.create({
    containerLinkUser: {
        flex: 1,
        backgroundColor: mainColor
    },
    textFieldLinkUser: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 16,
        marginTop: 18

    },
    textTitleLinkUser: {
        color: '#ffffffda',
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 22,
        margin: 10
    },
    textSubTitleLinkUser: {
        color: '#ffffffda',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        margin: 10
    },
    qrCodeView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qrCodeViewWhiteUsefulArea: {
        backgroundColor: '#ffffffda',
        width: 360,
        paddingTop: 30,
        height: Dimensions.get('window').height - 40,
        elevation: 3,
        alignItems: 'center',
        borderRadius: 12
    },
    qrCode: {
        width: 300,
        height: 300,
        margin: 30,
        backgroundColor: '#747474',
        borderRadius: 12
    },
    qrCodeLinkArea: {
        alignItems: 'center',
        paddingTop: 30

    },
    buttonLink: {
        backgroundColor: "#B84DC140",
        height: 60,
        width: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    qrCodeLink: {
        color: '#363636',
        fontFamily: 'Nunito_600SemiBold',
        fontStyle: 'italic'
    },
    clipboardAdvice: {
        textAlign: 'center',
        fontFamily: 'Nunito_600SemiBold',
        margin: 10
    },
    buttonToLink: {
        padding: 16,
        width: 100,
        backgroundColor: "#b74dc1",
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})