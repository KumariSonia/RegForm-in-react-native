import React, { useState } from 'react'
import { View } from 'react-native'
import Button from './Button'
import Edittext from './Edittext'
import styles from './styles'
const building = require('../icons/building.png');
import Header from './Header'
import SelectOptions from './SelectOptions'
const Address = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: "Andhra Pradesh" },
        { key: '2', value: "Arunachal Pradesh" },
        { key: '3', value: "Assam" },
        { key: '4', value: "Bihar" },
        { key: '5', value: "Chhattisgarh" },
        { key: '6', value: "Goa" },
        { key: '7', value: "Gujarat" },
        { key: '8', value: "Haryana" },
        { key: '9', value: "Himachal Pradesh" },
        { key: '10', value: "Jharkhand" },
        { key: '11', value: "Karnataka" },
        { key: '12', value: "Kerala" },
        { key: '13', value: "Madhya Pradesh" },
        { key: '14', value: "Maharashtra" }
    ]
    const handleEmail = (text) => {
        setEmail(text)
    }
    const handlePassword = (text) => {
        setPassword(text)
    }
    const login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }
    return (
        <View style={styles.container}>
            <Header title="Your Address" />
            <View style={styles.addressContainer} />
            <Edittext placeholderName="Address" handleChange={handleEmail} fieldIcon={building} />
            <Edittext placeholderName="Landmark" handleChange={handlePassword} fieldIcon={building} />
            <Edittext placeholderName="city" handleChange={handleEmail} fieldIcon={building} />
            <SelectOptions data={data} setSelected={setSelected} value={selected} />
            <Edittext placeholderName="Password" handleChange={handleEmail} fieldIcon={building} />
            <Button buttonName="Submit" onClick={() => login(email, password)} />
        </View >
    )
}

export default Address
