import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import color from './color'

const Button = (props) => {
    return (
        <TouchableOpacity
            style={styles.submitButton}
            onPress={props.onClick}
        >
            <Text style={styles.submitButtonText}> {props.buttonName} </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({

    submitButton: {
        backgroundColor: color.buttonColor,
        padding: 12,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        height: 50
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})