import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

export default StyleSheet.create({
    item: {
        marginRight: 10,
        marginTop: 17,
    },
    card: {
        backgroundColor: "#4b4b4b"
    },
    cardContent: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    itemView: {
        flexDirection: 'column'
    },
    exerciseName: {
        fontFamily: "Nunito_700Bold",
        color: "#FFFFFF",
        fontSize: 18
    },
    reps: {
        fontFamily: "Nunito_600SemiBold",
        color: "#ffffff80",
        fontSize: 13,
        marginLeft: 2,
    },
    series: {
        fontFamily: "Nunito_600SemiBold",
        color: "#ffffff80",
        fontSize: 13,
        marginLeft: 2,
    },
    muscularGroup: {
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#95419c09",
        borderColor: "#95419c",
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    muscularGroupText: {
        textAlign: "center",
        color: "#ea00ff",
        marginBottom: 2
    },
    centeredView: {
        flex: 1,
        backgroundColor: "#00000096",
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "#2d023190",
        borderColor: "#95419c",
        borderWidth: .5,
        borderRadius: 20,
        padding: 35,
        height: "80%",
        width: "90%",
        alignItems: "center",
        elevation: 5
    },
    imgEntity: {
        position: "relative",
        width: "100%",
        height: "56%",
        borderRadius: 12,
    },
    infoExercise: {
        flex: 1,
        width: "100%",
        padding: 12,
    },
    exerciseNameModal: {
        fontFamily: "Nunito_700Bold",
        color: "#FFFFFF",
        margin: 2,
        fontSize: 26
    },
    repsModal: {
        fontFamily: "Nunito_600SemiBold",
        color: "#ffffff90",
        margin: 1,
        fontSize: 18,
        marginLeft: 4
    },
    seriesModal: {
        fontFamily: "Nunito_600SemiBold",
        color: "#ffffff90",
        margin: 1,
        fontSize: 18,
        marginLeft: 4
    },
    button: {
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 30,
        elevation: 2,
        backgroundColor: "#FFFFFF00",
        borderColor: '#95419c',
        borderWidth: 1,
    },
    textStyle: {
        color: "white",
        fontFamily: 'Nunito_800ExtraBold',
        textAlign: "center"
    }
})