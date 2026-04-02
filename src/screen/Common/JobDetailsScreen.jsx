import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const JobDetailsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={require("../../asset/jobdetails-bg.png")} // 👈 full UI image
                style={styles.topImage}
                resizeMode="cover"
            >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconBtn}>
                        <Image source={require("../../asset/back-icon.png")} style={{ width: 16, height: 16, }} />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Job Details</Text>

                    <TouchableOpacity style={styles.iconBtn}>
                        <Image source={require("../../asset/home.png")} style={{ width: 16, height: 16, }} />
                    </TouchableOpacity>
                </View>

                {/* Card Container */}
                <View style={styles.cardContainer}>
                    {/* Icon Circle */}
                    <View style={styles.iconCircle}>
                        <Image source={require("../../asset/briefcase.png")} style={{ width: 60, height: 60, }} />
                    </View>

                    {/* Job Title */}
                    <Text style={styles.jobTitle}>Java Developer</Text>

                    {/* Location */}
                    <View style={styles.locationRow}>
                        <Image source={require("../../asset/gps.png")} style={{ width: 10, height: 13, marginRight: 5 }} />
                        <Text style={styles.locationText}>Kolkata</Text>
                    </View>

                    {/* Overview */}
                    <View style={styles.overviewBox}>
                        <View style={styles.overviewHeader}>
                            <Image source={require("../../asset/job-overview-icon.png")} style={{ width: 40, height: 40, marginTop: 8 }} />
                            <Text style={styles.overviewTitle}> Job Overview</Text>
                        </View>

                        <Text style={styles.overviewText}>
                            A comprehensive Java Developer job description should include responsibilities like designing, developing, and deploying high-performance applications, proficiency in Java/JEE.
                        </Text>

                        <Text style={styles.vacancyText}>Vacancy : 9</Text>
                    </View>

                    {/* Actions */}
                    <View style={styles.actionRow}>
                        <ActionCard title="Selection" image={require('../../asset/selection.png')} />
                        <ActionCard title="Joining Status" image={require('../../asset/joining-status.png')} />
                        <ActionCard title="Joining Document" image={require('../../asset/joining-document.png')} />
                    </View>
                </View>
            </ImageBackground>

            {/* Header */}

        </SafeAreaView>
    );
};

const ActionCard = ({ title, image }) => {
    return (
        <TouchableOpacity style={styles.actionCard}>
            <Image source={image} style={styles.actionImage} resizeMode="contain" />
            <Text style={styles.actionText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default JobDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
    },
    iconBtn: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {

        backgroundColor: '#F5F5F5',
        marginTop: 120,
        borderRadius: 30,
        alignItems: 'center',
        padding: 16,
        height: '65%',
        backgroundColor: '#fff',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },
    iconCircle: {
        position: 'absolute',
        top: -45,
        height: 100,
        width: 100,
        borderRadius: 60,
        backgroundColor: '#6C63FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    jobTitle: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    locationText: {
        marginLeft: 4,
        color: '#555',
    },
    overviewBox: {
        width: '100%',
        marginTop: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        elevation: 2,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },
    overviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        alignContent: 'center',


    },
    overviewTitle: {
        color: '#6C63FF',
        fontWeight: '600',
        fontSize: 16
    },
    overviewText: {
        fontSize: 12,
        color: '#474747',
    },
    vacancyText: {
        marginTop: 6,
        fontWeight: '700',
        color: '#333',
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
    },
    actionCard: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 4,
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },
    actionText: {
        marginTop: 6,
        fontSize: 14,
        textAlign: 'center',
        color: '#5609B3',
    },
    topImage: {
        width: "100%",
        height: "100%", // adjust based on design
    },
    actionImage: {
        width: 40,
        height: 40,
    },
});
