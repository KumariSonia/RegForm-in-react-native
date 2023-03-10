import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import color from './color'
import styles from './styles'

const SelectOptions = (props) => {
    return (
        <SelectList
            setSelected={(val) => props.setSelected(val)}
            data={props.data}
            save="value"
            placeholder='Select your state'
            boxStyles={[styles.inputContainer, { height: 52 }]}
            inputStyles={{ color: color.placeholderTextColor, fontSize: 16 }}
            dropdownStyles={styles.dropDownStyle}
        />
    )
}

export default SelectOptions
