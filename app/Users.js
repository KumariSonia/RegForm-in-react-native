import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';
import color from './color';
import Header from './Header';
import styles from './styles';
import UserPopup from './UserPopup';
const Users = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return (<>
        <View>
            <Text style={styles.usersHeader}>Users</Text>
            <TouchableOpacity style={styles.userContent} onPress={() => setModalVisible(true)}>
                <View style={styles.usersPhoto}>
                    <Image
                        style={styles.usersIcon}
                        source={require('../icons/user-4.png')}
                    />
                </View>
                <View style={styles.usersDetail}>
                    <Text style={styles.usersName}>FirstName LastName</Text>
                    <Text style={styles.usersAddress}>Aandmark city, state</Text>
                </View>
                <View style={styles.usersArrow}>
                    <Image
                        style={styles.usersArrowIcon}
                        source={require('../icons/detail.png')}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.usersButton}
            >
                <Text style={styles.usersButtonText}> Register </Text>
            </TouchableOpacity>
        </View >
        {modalVisible && <UserPopup modalVisible={modalVisible} setModalVisible={setModalVisible} />}
    </>
    )
}

export default Users
