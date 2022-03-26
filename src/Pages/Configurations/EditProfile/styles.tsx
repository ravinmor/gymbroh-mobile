import { StyleSheet } from "react-native";

const mainColor = "#B84DC1"
const mainColorLight = "#B84DC110"

export default StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fieldTypeData: {
        position: "relative",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "90%",
        margin: 20
    },
    textTitle: {
        marginHorizontal: 10,
        marginVertical: 20,
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 20,
        color: mainColor,
        justifyContent: "flex-start"
    },
    floatBorder: {
        borderColor: mainColor,
        borderWidth: .3,
        width: "100%",
        marginBottom: 18
    },
    viewInput: {},
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
    inputDate: {
        marginHorizontal: 12,
        marginVertical: 8,
        fontFamily: "Nunito_600SemiBold",
        fontSize: 20,
        letterSpacing: 8,
        color: mainColor
    },
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
    avatar: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainColorLight,
        borderColor: mainColor,
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 26,
        height: 66,
        width: 360,
    },
    eyeField: {
        backgroundColor: mainColorLight,
        justifyContent: 'center',
        alignItems: 'center',
        height: 66,
        width: 60,
        borderRadius: 26,
        borderColor: mainColor,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderWidth: 1,
        borderLeftWidth: 0

    },
    eye: {},
    uploadedImagesContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    uploadedImage: {
        width: 64,
        height: 64,
        borderRadius: 20,
        marginRight: 8
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainColor,
        borderWidth: 1.4,
        borderColor: mainColor,
        borderRadius: 26,
        height: 66,
        width: 360,
        marginTop: 22,
        textAlignVertical: 'top',
        marginBottom: 30,
    },
    textButton: {
        position: "relative",
        color: "black",
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
    },
}) 