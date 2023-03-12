import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Edittext from './Edittext'
import styles from './styles'
import SelectOptions from './SelectOptions'

const YourInfo = ({ route, navigation }) => {
    const [selected, setSelected] = React.useState("");
    const [yearOfPassing, setYearOfPassing] = useState('');
    const [grade, setGrade] = useState('');
    const [experience, setExperience] = useState('');
    const [designation, setDesignation] = useState('');
    const [domain, setDomain] = useState('');


    const education = [
        { key: '1', value: "Post Graduate" },
        { key: '2', value: "Graduate" },
        { key: '3', value: "HSC/Diploma" },
        { key: '4', value: "SSC" }
    ]

    const yourAddress = () => {
        const { image, firstName, lastName, phoneNumber, email, gender, password } = route.params;
        navigation.navigate('Your Address', {
            education: selected,
            yearOfPassing: yearOfPassing,
            grade: grade,
            experience: experience,
            designation: designation,
            domain: domain,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            gender: gender,
            password: password,
            image: image
        })
    }

    const onPreviousClick = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.addressContainer} />
            <ScrollView style={{ height: '70%' }}>

                <Text style={styles.infoHeader}>Educational Info</Text>
                <SelectOptions data={education} setSelected={setSelected} value={selected} placeholderName="Select your education" title="Education*" />
                <Edittext placeholderName="Enter year of passing" handleChange={(text) => { setYearOfPassing(text) }} title="Year of passing*" />
                <Edittext placeholderName="Enter your passing grade" handleChange={(text) => { setGrade(text) }} title="Grade*" />

                <Text style={styles.infoHeader}>Profesional Info</Text>
                <Edittext placeholderName="Enter your experience" handleChange={(text) => { setExperience(text) }} title="Experience*" />
                <Edittext placeholderName="Enter your designation" handleChange={(text) => { setDesignation(text) }} title="Designation*" />
                <Edittext placeholderName="Enter your domain" handleChange={(text) => { setDomain(text) }} title="Domain" />
            </ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 10, marginRight: 10, height: '24%' }}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={onPreviousClick}
                >
                    <Text style={styles.submitButtonText}> Previous </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={yourAddress}
                >
                    <Text style={styles.nextText}> Next </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

export default YourInfo
