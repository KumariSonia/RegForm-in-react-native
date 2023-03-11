import React, { useState } from 'react';
import { Alert, StyleSheet, Text, Pressable, View, TouchableOpacity, Image } from 'react-native';
import color from "./color";
import Modal from "react-native-modal";

const UserPopup = (props) => {
    return (
        <Modal
            isVisible={props.modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            flex: 1,
                        }}>
                            <TouchableOpacity onPress={() => props.setModalVisible(!props.modalVisible)}>
                                <Image
                                    style={{
                                        width: 25,
                                        height: 25,
                                        alignSelf: 'flex-end'
                                    }}
                                    source={require('../icons/cancel.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 6,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: color.grey
                        }}>

                            <Text style={{
                                fontWeight: '900',
                                fontSize: 18,
                                color: color.black,
                                paddingBottom: 5
                            }}>Basic Info</Text>

                            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5 }}>
                                <View style={{
                                    flex: 1,
                                    marginRight: 5
                                }}>
                                    <Image
                                        style={{
                                            width: 60,
                                            height: 60,
                                            alignSelf: 'flex-start',
                                            borderWidth: 1,
                                            borderRadius: 100,
                                            borderColor: color.primary,
                                            marginLeft: 10
                                        }}
                                        source={require('../icons/user-4.png')}
                                    />
                                    <Text style={{ fontSize: 9, color: '#0000cc', marginTop: 5, fontWeight: '700' }}>johnsmith@gmail.com</Text>
                                    <Text style={{ fontSize: 10, marginTop: 5, fontWeight: '600' }}>9896845670</Text>
                                </View>
                                <View style={{
                                    flex: 2,
                                    marginLeft: 5
                                }}>
                                    <Text style={{
                                        fontWeight: '900',
                                        fontSize: 18,
                                        color: color.black,
                                        marginBottom: 5
                                    }}>John Smith</Text>
                                    <Text style={{
                                        fontWeight: '900',
                                        fontSize: 18,
                                        color: '#0000cc',
                                        marginBottom: 5
                                    }}>UIX Designer</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: color.black,
                                        lineHeight: 24,
                                    }}>
                                        Casket Building Flat No-34 Landmark-IT Office {"\n"} Andheri East, Maharashtra,{"\n"} 400069

                                    </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{
                            flex: 4,
                            borderBottomWidth: 1,
                            borderColor: color.grey,
                            justifyContent: 'center',
                            marginLeft: 10
                        }}>

                            <Text style={{
                                fontWeight: '900',
                                fontSize: 18,
                                color: color.black,
                            }}>Educational Info</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: color.black,
                                marginTop: 10,
                                lineHeight: 25,
                            }}>
                                Graduate {"\n"}
                                Passing year -2017{"\n"}
                                CGPA-9.25

                            </Text>

                        </View>
                        <View style={{
                            flex: 4,
                            justifyContent: 'center',
                            marginLeft: 10
                        }}>

                            <Text style={{
                                fontWeight: '900',
                                fontSize: 18,
                                color: color.black,
                            }}>Professional Info</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: color.black,
                                marginTop: 10,
                                lineHeight: 25,
                            }}>
                                4 Years of Experience  {"\n"}
                                Design Department

                            </Text>

                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        height: '70%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 0,
        padding: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default UserPopup
