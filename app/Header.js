import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Image
                style={styles.arrow}
                source={require('../icons/arrow.png')}
            />
            <Text style={styles.registerHeader}>{props.title}</Text>
        </View>
    )
}

export default Header
