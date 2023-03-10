import { StyleSheet } from "react-native";
import color from "./color";

export default styles = StyleSheet.create({
    alert: {
        // alignItems: 'center'
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginTop: 15,
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
        marginTop: 5
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