import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import Button from './Button'
import Edittext from './Edittext'
import styles from './styles'
const building = require('../icons/building.png');
import SelectOptions from './SelectOptions'
const Address = ({ route, navigation }) => {
    const [selected, setSelected] = useState('');
    const [address, setAddress] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')

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
        { key: '14', value: "Maharashtra" },
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
        { key: '14', value: "Maharashtra" },

    ]

    const onSubmit = async () => {
        const { image, firstName, lastName, phoneNumber, email, gender, password, education, yearOfPassing, grade, experience, designation, domain } = route.params;

        const url = "http://localhost:8080/users"
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName, lastName, phoneNumber, email, gender, password, education, yearOfPassing, grade, experience, designation, domain, address, landmark, city, selected, pincode
                }),
            });

            const savedUser = await response.json();
            console.log(savedUser)
            navigation.navigate('Users')
        } catch (error) {
            console.log(error)
        }


    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.addressContainer} />
            <Edittext placeholderName="Address" handleChange={(text) => { setAddress(text) }} fieldIcon={building} />
            <Edittext placeholderName="Landmark" handleChange={(text) => { setLandmark(text) }} fieldIcon={building} />
            <Edittext placeholderName="city" handleChange={(text) => { setCity(text) }} fieldIcon={building} />
            <SelectOptions data={data} setSelected={setSelected} value={selected} placeholderName='Select your state' />
            <Edittext placeholderName="Pin Code" handleChange={(text) => { setPincode(text) }} fieldIcon={building} />
            <Button buttonName="Submit" onClick={onSubmit} />
        </SafeAreaView >
    )
}

export default Address
