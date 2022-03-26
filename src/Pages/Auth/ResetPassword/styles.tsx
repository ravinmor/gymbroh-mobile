import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerFgtPass: {
        flex: 1,
        backgroundColor: "#B84DC1",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    area: {
        justifyContent: "center",
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
        marginVertical: 10,
        fontFamily: "Nunito_600SemiBold",
        fontSize: 16,
        color: "#ffffff"
    },
    inputFgtPass: {
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
})