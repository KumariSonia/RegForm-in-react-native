import React, { useState } from 'react'
import { Alert, Image, PermissionsAndroid, Text, TouchableOpacity, View } from 'react-native'
import Button from './Button'
import Edittext from './Edittext'
import styles from './styles'
import RadioGroup from 'react-native-radio-buttons-group';
const user = require('../icons/user-4.png');
const phone = require('../icons/phone-call.png');
const emailIcon = require('../icons/email.png');
const padlock = require('../icons/padlock.png');
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Register = () => {
   const [imageUri, setImageUri] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')
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
   }

   const handleEmail = (text) => {
      setEmail(text)
   }
   const handlePassword = (text) => {
      setPassword(text)
   }
   const login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

   const openCamera = () => {
      let options = {
         storageOptions: {
            // path: 'images',
            mediaType: 'photo',
         },
         // includeBase64: true,
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

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image
               style={styles.arrow}
               source={require('../icons/arrow.png')}
            />
            <Text style={styles.registerHeader}>Register</Text>
         </View>
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
         <Edittext placeholderName="Enter your first name here" handleChange={handleEmail} title="First Name*" fieldIcon={user} />
         <Edittext placeholderName="Enter your last name here" handleChange={handlePassword} title="Last Name*" fieldIcon={user} />
         <Edittext placeholderName="Enter your 10 digit phone  number" handleChange={handleEmail} title="Phone Number*" fieldIcon={phone} />
         <Edittext placeholderName="Enter your email here" handleChange={handlePassword} title="Email*" fieldIcon={emailIcon} />
         <View>

            <Text style={styles.inputTitle}>Gender</Text>
            <RadioGroup
               radioButtons={radioButtons}
               onPress={onPressRadioButton}
               layout='row'
               containerStyle={styles.radioStyle}
            />
         </View>

         <Edittext placeholderName="Password" handleChange={handleEmail} title="Password*" fieldIcon={padlock} />
         <Edittext placeholderName="Confirm Password" handleChange={handlePassword} title="Confirm Password*" fieldIcon={padlock} />
         <Button buttonName="Next" onClick={() => login(email, password)} />
      </View>
   )
}
export default Register
