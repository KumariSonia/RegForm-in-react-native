import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Edittext from './Edittext'
import styles from './styles'
import Header from './Header'
import SelectOptions from './SelectOptions'

const YourInfo = () => {
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

    return (
        <View style={styles.container}>
            <Header title="Your Info" />
            <View style={styles.addressContainer} />

            <Text style={styles.infoHeader}>Educational Info</Text>
            <SelectOptions data={education} setSelected={setSelected} value={selected} placeholderName="Select your education" title="Education*" />
            <Edittext placeholderName="Enter year of passing" handleChange={handleEmail} title="Year of passing*" />
            <Edittext placeholderName="Enter your passing grade" handleChange={handleEmail} title="Grade*" />

            <Text style={styles.infoHeader}>Profesional Info</Text>
            <Edittext placeholderName="Enter your experience" handleChange={handleEmail} title="Experience*" />
            <Edittext placeholderName="Enter your designation" handleChange={handleEmail} title="Designation*" />
            <Edittext placeholderName="Enter your domain" handleChange={handleEmail} title="Domain" />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 10, marginRight: 10 }}>
                <TouchableOpacity
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}> Previous </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                >
                    <Text style={styles.nextText}> Next </Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default YourInfo
