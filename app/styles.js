import { StyleSheet } from "react-native";
import color from "./color";

export default styles = StyleSheet.create({
    addressContainer: {
        height: "15%"
    },
    alert: {
        marginLeft: 10
    },
    arrow: {
        width: 20,
        height: 20,
        marginLeft: '5%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    dropDownStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 20,
        marginTop: 0,
        width: "82%",
        borderColor: color.primary
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        alignSelf: 'center',
        marginRight: 10
    },
    input: {
        height: 50,
        borderColor: color.primary,
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 20,
        marginTop: 5,
        width: "82%",
        borderColor: color.primary,
        borderRadius: 0,
    },
    inputTitle: {
        marginLeft: 35,
        fontWeight: 'bold',
        fontSize: 18,
        color: color.primary
    },
    radioStyle: {
        marginTop: 2,
        marginLeft: 25,
        marginBottom: 15,
        borderColor: "red"
    },
    registerHeader: {
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 30,
        marginRight: '35%'
    },
    textStyle: {
        textAlign: 'left',
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        padding: 5,
    },
    tinyLogo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: color.primary
    }
});