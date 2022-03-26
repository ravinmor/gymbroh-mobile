import { StyleSheet } from "react-native";

export default StyleSheet.create({
    footer: {
		position: 'absolute',
		textAlign: 'center',
		bottom: 20,
		backgroundColor: '#202020',
		right: 20,
		padding: 20,
		borderRadius: 50,
		borderColor: '#95419c',
		borderWidth: .5,
		justifyContent: 'space-between',
		flexDirection: 'row',
		elevation: 10
    },
	footerField: {
	},
    footerText: {
		fontSize: 18,
		color: '#fff'
    },
	footerIcon: {
		marginHorizontal: 12,
		marginVertical: 8
	}
  })