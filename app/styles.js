import { StyleSheet } from "react-native";
import color from "./color";

export default styles = StyleSheet.create({
    addressContainer: {
        height: 50
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
    infoHeader: {
        marginLeft: 35,
        fontWeight: '900',
        fontSize: 22,
        color: color.infoHeader,
        marginBottom: 15
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
        fontSize: 17,
        color: color.primary
    },
    nextButton: {
        backgroundColor: color.primary,
        padding: 12,
        marginTop: 15,
        height: 50,
        width: "35%"
    },
    nextText: {
        color: color.white,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
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
    submitButton: {
        backgroundColor: 'transparent',
        padding: 10,
        marginTop: 15,
        height: 50,
        width: "35%",
        borderWidth: 2,
        borderColor: color.primary,
    },
    submitButtonText: {
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
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
    },
    usersAddress: {
        fontSize: 15,
        color: color.black
    },
    usersArrow: {
        flex: 1,
        alignSelf: 'center'
    },
    usersArrowIcon: {
        width: 30,
        height: 30
    },
    usersButton: {
        backgroundColor: color.buttonColor,
        padding: 12,
        marginTop: 20,
        height: 50,
    },
    usersButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    userContent: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        padding: 10,
        borderColor: color.grey
    },
    usersDetail: {
        flex: 6,
        alignSelf: 'center',
        paddingLeft: 10
    },
    usersHeader: {
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        padding: 15
    },
    usersIcon: {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: color.primary
    },
    usersName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: color.black,
        paddingBottom: 5
    },
    usersPhoto: {
        flex: 2,
        paddingLeft: 12,
    }
});