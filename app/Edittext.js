import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import color from './color'
import styles from './styles'

const Edittext = (props) => {
  const [hide, setHide] = useState(true);
  const handlePress = () => {
    setHide(!hide);
  }
  return (
    <View>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={props.fieldIcon}
        />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={props.placeholderName}
          placeholderTextColor={color.placeholderTextColor}
          autoCapitalize="none"
          onChangeText={props.handleChange}

        />
        {(props.title === "Password*" || props.title === "Confirm Password*") &&
          <TouchableOpacity onPress={handlePress}>
            <Image
              style={styles.icon}
              source={hide ? require('../icons/hide.png') : require('../icons/eye.png')}

            />
          </TouchableOpacity>

        }

      </View>
    </View>
  )
}

export default Edittext