import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: "#B84DC1",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height  + 80,
    },
    area: {
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        height: "80%"
        
    },
    textTitle: {
        position: "relative",
        color: "white",
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 22,
        paddingBottom: 40
    },
    inputText: {
        marginHorizontal: 12,
        marginVertical: 8,
        fontFamily: "Nunito_600SemiBold",
        fontSize: 16,
        color: "#ffffff"
    },
    inputLogin: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#05050520',
        borderRadius: 26,
        height: 66,
        width: 360,
        paddingVertical: 24,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top'
    },
    borderLessForgotPass: {
        marginBottom: 30
    },
    inputTextForgotPass: {
        fontFamily: "Nunito_600SemiBold",
        textDecorationLine: "underline",
        textDecorationColor: "#ffffff",
        fontSize: 16,
        color: "#ffffff",
        textAlign: "right",
        marginHorizontal: 12,
        marginVertical: 0
    },
    buttonField:{
        marginVertical: 220,
        borderColor: 'white',
        borderWidth: 1
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000c5',
        borderWidth: 1.4,
        borderColor: '#050505c7',
        borderRadius: 26,
        height: 66,
        width: 360,
        marginTop: 0,
        textAlignVertical: 'top',
        marginBottom: 30,
    },
    textButton: {
        position: "relative",
        color: "white",
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
    },
    orView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: 360,
        margin: 6,
    },
    borderBottomWhite: {
        borderBottomColor: "#ffffff",
        borderBottomWidth: 2,
        width: 133,
        marginBottom: 26.5
    },
    textOrView: {
        position: "relative",
        color: "white",
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 18,
        marginTop: 6,
    }
})