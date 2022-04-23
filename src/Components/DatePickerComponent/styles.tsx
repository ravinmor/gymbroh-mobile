import { StyleSheet } from "react-native";

const mainColor = "#B84DC1"
const mainColorLight = "#B84DC110"

export default StyleSheet.create({
    inputLogin: {
        backgroundColor: mainColorLight,
        borderWidth: 1,
        borderColor: mainColor,
        color: mainColor,
        fontSize: 16,
        borderRadius: 26,
        height: 66,
        width: 360,
        paddingVertical: 24,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top'
    },
    inputDate: {
        marginHorizontal: 12,
        marginVertical: 8,
        fontFamily: "Nunito_600SemiBold",
        fontSize: 20,
        letterSpacing: 8,
        color: mainColor
    },
    inputText: {
        marginHorizontal: 12,
        marginVertical: 8,
        fontFamily: "Nunito_600SemiBold",
        fontSize: 16,
        color: mainColor
    },
    inputPlaceHolder: {
        marginLeft: -80,
        marginVertical: 8,
        fontFamily: "Nunito_600SemiBold",
        fontSize: 16,
        color: '#B84DC190'
    },
})