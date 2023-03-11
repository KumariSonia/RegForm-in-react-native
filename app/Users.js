import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';
import color from './color';
import Header from './Header';
import styles from './styles';
import UserPopup from './UserPopup';
const Users = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState();

    const getAllUsers = async () => {
        //Api call to fetch all users
        const url = "http://localhost:8080/users"
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        setUserData(data);

    }

    const registerButton = () => {
        navigation.navigate('Register')
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const onUserClick = (user) => {
        setModalVisible(true);
        setUser(user);
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container} >
                <ScrollView>

                    {userData.map((user) => {
                        return (<TouchableOpacity style={styles.userContent} onPress={() => onUserClick(user)}>
                            <View style={styles.usersPhoto}>
                                <Image
                                    style={styles.usersIcon}
                                    source={require('../icons/user-4.png')}
                                />
                            </View>
                            <View style={styles.usersDetail}>
                                <Text style={styles.usersName}>{user.firstName} {user.lastName}</Text>
                                <Text style={styles.usersAddress}>{user.landmark} {user.city}, {user.state}</Text>
                            </View>
                            <View style={styles.usersArrow}>
                                <Image
                                    style={styles.usersArrowIcon}
                                    source={require('../icons/detail.png')}
                                />
                            </View>
                        </TouchableOpacity>)
                    })}


                </ScrollView>
                <TouchableOpacity
                    style={styles.usersButton}
                    onPress={registerButton}
                >
                    <Text style={styles.usersButtonText}> Register </Text>
                </TouchableOpacity>
            </View >
            {modalVisible && <UserPopup modalVisible={modalVisible} setModalVisible={setModalVisible} userData={user} />}
        </SafeAreaView >
    )
}

export default Users
