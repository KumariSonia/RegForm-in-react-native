import React, { useState } from 'react'
import { Alert, Image, PermissionsAndroid, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import Button from './Button'
import Edittext from './Edittext'
import styles from './styles'
import RadioGroup from 'react-native-radio-buttons-group';
const user = require('../icons/user-4.png');
const phone = require('../icons/phone-call.png');
const emailIcon = require('../icons/email.png');
const padlock = require('../icons/padlock.png');
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Register = ({ navigation }) => {
   const [imageUri, setImageUri] = useState('');
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const [gender, setGender] = useState('');


   const [radioButtons, setRadioButtons] = useState([
      {
         id: '1', // acts as primary key, should be unique and non-empty string
         label: 'Male',
         value: 'Male'
      },
      {
         id: '2',
         label: 'Female',
         value: 'Female'
      }
   ]);

   const onPressRadioButton = (radioButtonsArray) => {
      setRadioButtons(radioButtonsArray);
      if (radioButtonsArray[0].selected) {
         setGender("Male");
      }
      else {
         setGender("Female");
      }
   }


   const openCamera = () => {
      let options = {
         storageOptions: {
            mediaType: 'photo',
         },
      };
      launchCamera(options, respose => {
         if (respose.didCancel) {
            alert('user cancelled image picker')
         }
         else if (respose.errorCode) {
            alert("image picker error", respose.errorCode);
         }
         else if (respose.customButton) {
            alert("user taped custom button", respose.customButton)
         }
         else {
            //you can also display the image using data:
            const sources = respose.assets[0].uri;
            setImageUri(sources);
         }

      });
   }

   const openGallery = () => {
      let options = {
         storageOptions: {
            mediaType: 'photo',
         },
      };
      launchImageLibrary(options, respose => {
         if (respose.didCancel) {
            alert('user cancelled image picker')
         }
         else if (respose.errorCode) {
            alert("image picker error", respose.errorMessage);
         }
         else {
            const sources = respose.assets[0].uri;
            setImageUri(sources);
         }

      });
   }

   const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {

         try {
            const granted = await PermissionsAndroid.request(
               PermissionsAndroid.PERMISSIONS.CAMERA,
               {
                  title: "App Camera Permission",
                  message: "App needs access to your camera ",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK",
               }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
               console.log("Camera permission given");
               openCamera();
            } else {
               console.log("Camera permission denied");
            }
         } catch (err) {
            console.warn(err);
         }
      }
      else {
         openCamera();
      }
   };

   const createTwoButtonAlert = () =>
      Alert.alert('Upload Image', '', [
         {
            text: 'Camera',
            onPress: () => requestCameraPermission()
         },
         {
            text: 'Gallery',
            onPress: () => openGallery()
         },
      ]);

   const yourInfo = () => {

      navigation.navigate('Your Info', {
         image: imageUri,
         firstName: firstName,
         lastName: lastName,
         phoneNumber: phoneNumber,
         email: email,
         gender: gender,
         password: password
      })
   }

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <TouchableOpacity onPress={createTwoButtonAlert}>
               {imageUri ?
                  <Image
                     style={styles.tinyLogo}
                     source={{ uri: imageUri }}
                  /> : <Image
                     style={styles.tinyLogo}
                     source={require('../icons/user.png')}
                  />
               }
            </TouchableOpacity>
            <Edittext placeholderName="Enter your first name here" handleChange={(text) => { setFirstName(text) }} title="First Name*" fieldIcon={user} />
            <Edittext placeholderName="Enter your last name here" handleChange={(text) => { setLastName(text) }} title="Last Name*" fieldIcon={user} />
            <Edittext placeholderName="Enter your 10 digit phone  number" handleChange={(text) => { setPhoneNumber(text) }} title="Phone Number*" fieldIcon={phone} />
            <Edittext placeholderName="Enter your email here" handleChange={(text) => { setEmail(text) }} title="Email*" fieldIcon={emailIcon} />
            <View>

               <Text style={styles.inputTitle}>Gender</Text>
               <RadioGroup
                  radioButtons={radioButtons}
                  onPress={onPressRadioButton}
                  layout='row'
                  containerStyle={styles.radioStyle}
               />
            </View>

            <Edittext placeholderName="Password" handleChange={(text) => { setPassword(text) }} title="Password*" fieldIcon={padlock} />
            <Edittext placeholderName="Confirm Password" title="Confirm Password*" fieldIcon={padlock} />
         </ScrollView>
         <Button buttonName="Next" onClick={yourInfo} />
      </SafeAreaView>
   )
}
export default Register
