import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ManualSelectionForm = () => {
    return (
        <View style={styles.container}>

            {/* Top Gradient Background */}

            <ImageBackground
                source={require("../../asset/heade-bg.png")} // 👈 full UI image
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.header}>
                    <View style={styles.headerRow}>

                        <TouchableOpacity style={styles.iconBtn}>
                            <Image source={require("../../asset/back-icon.png")} style={{ width: 16, height: 16, }} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Job Selection</Text>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Image source={require("../../asset/home.png")} style={{ width: 16, height: 16, }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>


            {/* Card */}
            <View style={styles.card}>


                <Text style={styles.title}>
                    Job Role : <Text style={styles.bold}>Java Developer</Text>
                </Text>

                <Text style={styles.subText}>
                    Job Opening : <Text style={styles.bold}>9</Text>
                </Text>

                <Text style={styles.required}>* Indicates required question</Text>
            </View>

            {/* Form */}
            <View style={styles.formCard}>

                {/* Full Name */}
                <View style={styles.inputRow}>
                    <Image source={require("../../asset/username.png")} style={{ width: 20, height: 20, }} />
                    <View style={styles.divider}></View>
                    <TextInput
                        placeholder="Full Name *"
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
                </View>

                {/* Location */}
                <View style={styles.inputRow}>
                    <Image source={require("../../asset/location.png")} style={{ width: 20, height: 26, }} />
                    <View style={styles.divider}></View>
                    <TextInput
                        placeholder="Location *"
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
                </View>

                {/* Skills */}
                <View style={styles.inputRow}>
                    <Image source={require("../../asset/skills.png")} style={{ width: 20, height: 20, }} />
                    <View style={styles.divider}></View>
                    <TextInput
                        placeholder="Skills"
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
                </View>

                {/* Experience */}
                <View style={styles.inputRow}>
                    <Image source={require("../../asset/exp.png")} style={{ width: 20, height: 20, }} />
                    <View style={styles.divider}></View>
                    <TextInput
                        placeholder="Experience"
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
                </View>

                {/* File Upload */}
                <View style={styles.inputRow}>
                    <Image source={require("../../asset/cv.png")} style={{ width: 20, height: 20, }} />
                    <View style={styles.divider}></View>

                    <Text style={styles.fileText}>Add CV *</Text>

                    <TouchableOpacity style={styles.fileBtn}>
                        <Text style={styles.fileBtnText}>Choose File</Text>
                    </TouchableOpacity>
                </View>

                {/* Submit Button */}
                <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>

                    <Text style={styles.submitText}>Submit</Text>

                </TouchableOpacity>

            </View>
        </View>
    );
};

export default ManualSelectionForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },

    headerBg: {
        height: 120,
    },

    card: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginTop: 60,
        borderRadius: 10,
        padding: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },

    subText: {
        fontSize: 14,
        marginBottom: 4,
    },

    bold: {
        fontWeight: '600',
    },

    required: {
        color: 'red',
        fontSize: 12,
        marginTop: 10,
    },

    formCard: {
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 10,
        padding: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },

    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#fffafa',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginBottom: 15,
        height: 50,
         elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },

    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
    },

    fileText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: '#555',
    },

    fileBtn: {
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
    },

    fileBtnText: {
        fontSize: 12,
        color: '#333',
    },

    submitBtn: {
        marginTop: 10,
        borderRadius: 6,
        paddingVertical: 14,
        alignItems: 'center',
        backgroundColor: '#6c63ff',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',

    },

    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    header: {
        padding: 20,

    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
    },



    headerText: {
        fontSize: 22,
        fontWeight: "600",
        color: "#ffffff",
    },
    headerBackground: {
        width: '100%',
        height: 100,
    },
     iconBtn: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider:{
        width:1,backgroundColor:'#ccc',height:'100%',marginLeft:10
    }

});