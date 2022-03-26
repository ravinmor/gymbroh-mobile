import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    containerConfigs: {
        flex: 1,
        alignContent: 'space-between',
    },
    configArea: {
    },
    borderbuttonText: {
        margin: 10
    },
    textConfiguration: {
        marginHorizontal: 10,
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
        color: '#B84DC1',
        justifyContent: "flex-start"
    },
    buttonSignOutField: {
        position: "absolute",
        justifyContent: 'center',
        alignContent: 'center',
        bottom: 8,
        left: 26
    },
    textGymbroh: {
        fontSize: 12,
        color: '#FFFFFFd8',
        textAlign: 'center',
    },
    buttonSignOut: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000000',
        borderColor: '#B84DC1',
        borderWidth: 1,
        height: 66,
        width: 360,
        textAlignVertical: 'top',
        bottom: 8,
        marginBottom: 30,
        elevation: 1
    },
    textButtonSignOut: {
        position: "relative",
        color: "#B84DC1",
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
    }, 
})