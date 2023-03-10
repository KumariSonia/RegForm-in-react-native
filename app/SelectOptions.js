import React from 'react'
import { Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import color from './color'
import styles from './styles'

const SelectOptions = (props) => {
    return (
        <View>
            {props.title && <Text style={styles.inputTitle}>{props.title}</Text>}
            < SelectList
                setSelected={(val) => props.setSelected(val)}
                data={props.data}
                save="value"
                placeholder={props.placeholderName}
                boxStyles={[styles.inputContainer, { height: 52 }]}
                inputStyles={{ color: color.placeholderTextColor, fontSize: 16 }}
                dropdownStyles={styles.dropDownStyle}
            />
        </View>
    )
}

export default SelectOptions
