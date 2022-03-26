import { StyleSheet } from "react-native";

export default StyleSheet.create({
    entityContent: {
        backgroundColor: '#b404c410',
        width: '100%',
        position: 'relative',
        marginTop: 5,
        marginBottom: 5,
        padding: 16,
        borderRadius: 8,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#b404c480'
    },
    imgEntity: {
        width: 60,
        height: 60,
        borderRadius: 8
    },
    textSpace :{
        padding: 4,
        marginLeft: 4,
        marginRight: 4,
        flex: 1
    },
    titleEntity:{
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#fff',
        margin: 2
    },
    paragraphEntity: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 11,
        color: '#d4d4d4',
        marginRight: 2,
        marginLeft: 2,
    },
})