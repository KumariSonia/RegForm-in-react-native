import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Edittext from './Edittext'
import styles from './styles'
import SelectOptions from './SelectOptions'

const YourInfo = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [selected, setSelected] = React.useState("");

    const education = [
        { key: '1', value: "Post Graduate" },
        { key: '2', value: "Graduate" },
        { key: '3', value: "HSC/Diploma" },
        { key: '4', value: "SSC" }
    ]

    const handleEmail = (text) => {
        setEmail(text)
    }

    const yourAddress = () => {
        navigation.navigate('Your Address')
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
                <Edittext placeholderName="Enter year of passing" handleChange={handleEmail} title="Year of passing*" />
                <Edittext placeholderName="Enter your passing grade" handleChange={handleEmail} title="Grade*" />

                <Text style={styles.infoHeader}>Profesional Info</Text>
                <Edittext placeholderName="Enter your experience" handleChange={handleEmail} title="Experience*" />
                <Edittext placeholderName="Enter your designation" handleChange={handleEmail} title="Designation*" />
                <Edittext placeholderName="Enter your domain" handleChange={handleEmail} title="Domain" />
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
