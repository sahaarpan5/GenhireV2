import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    Dimensions,
    Platform,
    Modal,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

// Responsive sizing functions
const scale = (size) => {
    const baseWidth = 375;
    return Math.round((width / baseWidth) * size);
};

const verticalScale = (size) => {
    const baseHeight = 812;
    return Math.round((height / baseHeight) * size);
};

const moderateScale = (size, factor = 0.5) => {
    return size + (scale(size) - size) * factor;
};

// Briefcase image (using a vector icon as image)
const JOB_OPENING_IMAGE = require('../../asset/briefcase.png');
const SELECTION_IMAGE = require('../../asset/tick.png');
const JOINING_IMAGE = require('../../asset/man.png');
const PENDING_IMAGE = require('../../asset/pending.png');
// Mock data for the prototype
const mockData = {
    stats: {
        jobOpenings: 24,
        selections: 18,
        joinings: 12,
        joiningStatus: 6,
    },
    jobPostings: [
        { id: '1', title: 'Senior React Native Developer', location: 'Mumbai, India', vacancies: 5, selected: 3, color: '#FF6B6B', department: 'Engineering' },
        { id: '2', title: 'UI/UX Designer', location: 'Bangalore, India', vacancies: 3, selected: 2, color: '#4ECDC4', department: 'Design' },
        { id: '3', title: 'DevOps Engineer', location: 'Pune, India', vacancies: 4, selected: 1, color: '#45B7D1', department: 'Engineering' },
        { id: '4', title: 'Product Manager', location: 'Delhi, India', vacancies: 2, selected: 2, color: '#96CEB4', department: 'Product' },
        { id: '5', title: 'Backend Developer', location: 'Hyderabad, India', vacancies: 6, selected: 4, color: '#F9CA24', department: 'Engineering' },
        { id: '6', title: 'Frontend Developer', location: 'Chennai, India', vacancies: 3, selected: 2, color: '#6C5CE7', department: 'Engineering' },
        { id: '7', title: 'Data Scientist', location: 'Bangalore, India', vacancies: 2, selected: 1, color: '#FD79A8', department: 'Data' },
        { id: '8', title: 'QA Engineer', location: 'Mumbai, India', vacancies: 4, selected: 3, color: '#00B894', department: 'Quality' },
    ],
    locations: [
        'Mumbai, India',
        'Bangalore, India',
        'Delhi, India',
        'Pune, India',
        'Hyderabad, India',
        'Chennai, India',
        'Kolkata, India',
        'Ahmedabad, India',
    ],
    jobTypes: ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Freelance'],
};

const DashboardScreen = () => {
    const [showAllJobs, setShowAllJobs] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [vacancyCount, setVacancyCount] = useState('');
    const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
    const [showJobTypeOptions, setShowJobTypeOptions] = useState(false);

    // Filter locations based on input
    const filteredLocations = mockData.locations.filter(loc =>
        loc.toLowerCase().includes(jobLocation.toLowerCase())
    );

    // Handle job card press
    const handleJobPress = (job) => {
        Alert.alert(
            'Job Details',
            `Title: ${job.title}\nLocation: ${job.location}\nVacancies: ${job.vacancies}\nSelected: ${job.selected}\nDepartment: ${job.department}`
        );
    };

    // Toggle show all jobs
    const toggleShowAllJobs = () => {
        setShowAllJobs(!showAllJobs);
    };

    // Handle add job
    const handleAddJob = () => {
        if (!jobTitle || !jobDescription || !jobLocation || !jobType || !vacancyCount) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        Alert.alert(
            'Success! 🎉',
            `Job "${jobTitle}" has been posted successfully!`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        resetForm();
                        setModalVisible(false);
                    }
                }
            ]
        );
    };

    // Reset form
    const resetForm = () => {
        setJobTitle('');
        setJobDescription('');
        setJobLocation('');
        setJobType('');
        setVacancyCount('');
        setShowLocationSuggestions(false);
        setShowJobTypeOptions(false);
    };

    // Render stat card
    const renderStatCard = (icon, label, value, color, bgColor, imageSource = null) => {
        return (
            <View style={[styles.statCard, { backgroundColor: bgColor }]}>
                <View style={[styles.statIconContainer, { backgroundColor: color + '20' }]}>
                    {imageSource ? (
                        <Image
                            source={imageSource}
                            style={{ width: 24, height: 24, tintColor: color }}
                            resizeMode="contain"
                        />
                    ) : (
                        <Ionicons
                            name={icon}
                            size={moderateScale(24)}
                            color={color}
                        />
                    )}
                </View>
                <Text style={styles.statValue}>{value}</Text>
                <Text style={styles.statLabel}>{label}</Text>
            </View>
        );
    };

    // Render job card with briefcase image
    const renderJobCard = (item) => {
        return (
            <TouchableOpacity
                style={styles.jobCard}
                onPress={() => handleJobPress(item)}
                activeOpacity={0.8}
            >
                <View style={styles.jobCardHeader}>
                    <View style={styles.jobTitleContainer}>
                        <View style={[styles.jobImageContainer, { backgroundColor: item.color + '20' }]}>
                            <Image
                                source={require('../../asset/briefcase.png')}
                                style={styles.jobImage}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.jobTitleWrapper}>
                            <Text style={styles.jobTitle} numberOfLines={1}>{item.title}</Text>
                            <View style={styles.jobLocation}>
                                <Image
                                source={require('../../asset/location.png')}
                                style={{height: 16, width: 16, tintColor: '#666',}}
                            />
                                <Text style={styles.jobLocationText}>{item.location}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.jobBadge, { backgroundColor: item.color + '20' }]}>
                        <Text style={[styles.jobBadgeText, { color: item.color }]}>Active</Text>
                    </View>
                </View>

                <View style={styles.jobCardFooter}>
                    <View style={styles.jobStat}>
                       
                        <Image
                                source={require('../../asset/man.png')}
                                style={{height: 16, width: 16, tintColor: '#666',}}
                            />
                        <Text style={styles.jobStatText}>Vacancies: <Text style={styles.jobStatValue}>{item.vacancies}</Text></Text>
                    </View>
                    <View style={styles.jobStatDivider} />
                    <View style={styles.jobStat}>
                        <Image
                                source={require('../../asset/tick.png')}
                                style={{height: 16, width: 16, tintColor: '#666',}}
                            />
                        <Text style={styles.jobStatText}>Selected: <Text style={[styles.jobStatValue, { color: '#4ECDC4' }]}>{item.selected}</Text></Text>
                    </View>
                    <View style={styles.jobStatDivider} />
                    <View style={styles.jobStat}>
                       
                        <Image
                                source={require('../../asset/skill.png')}
                                style={{height: 16, width: 16, tintColor: '#45B7D1',}}
                            />
                        <Text style={styles.jobStatText}>{item.department}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    // Render add job modal
    const renderAddJobModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    resetForm();
                    setModalVisible(false);
                }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            {/* Modal Header */}
                            <View style={styles.modalHeader}>
                                <View style={styles.modalHeaderLeft}>
                                    <View style={styles.modalIconContainer}>
                                        <Ionicons name="add-circle" size={moderateScale(28)} color="#FF6B6B" />
                                    </View>
                                    <View>
                                        <Text style={styles.modalTitle}>Post a New Job</Text>
                                        <Text style={styles.modalSubtitle}>Fill in the details below</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        resetForm();
                                        setModalVisible(false);
                                    }}
                                    style={styles.modalCloseButton}
                                >
                                    <Ionicons name="close" size={moderateScale(24)} color="#666" />
                                </TouchableOpacity>
                            </View>

                            <ScrollView showsVerticalScrollIndicator={false}>
                                {/* Job Title */}
                                <View style={styles.formGroup}>
                                    <Text style={styles.formLabel}>Job Title <Text style={styles.requiredStar}>*</Text></Text>
                                    <View style={styles.formInputContainer}>
                                        <Ionicons name="briefcase-outline" size={moderateScale(20)} color="#FF6B6B" style={styles.inputIcon} />
                                        <TextInput
                                            style={styles.formInput}
                                            placeholder="e.g., Senior React Native Developer"
                                            placeholderTextColor="#999"
                                            value={jobTitle}
                                            onChangeText={setJobTitle}
                                        />
                                    </View>
                                </View>

                                {/* Job Description */}
                                <View style={styles.formGroup}>
                                    <Text style={styles.formLabel}>Job Description <Text style={styles.requiredStar}>*</Text></Text>
                                    <View style={[styles.formInputContainer, styles.textAreaContainer]}>
                                        <Ionicons name="document-text-outline" size={moderateScale(20)} color="#FF6B6B" style={styles.inputIcon} />
                                        <TextInput
                                            style={[styles.formInput, styles.textArea]}
                                            placeholder="Describe the job responsibilities and requirements..."
                                            placeholderTextColor="#999"
                                            value={jobDescription}
                                            onChangeText={setJobDescription}
                                            multiline
                                            numberOfLines={4}
                                            textAlignVertical="top"
                                        />
                                    </View>
                                </View>

                                {/* Job Location with Autocomplete */}
                                <View style={styles.formGroup}>
                                    <Text style={styles.formLabel}>Job Location <Text style={styles.requiredStar}>*</Text></Text>
                                    <View style={styles.formInputContainer}>
                                        <Ionicons name="location-outline" size={moderateScale(20)} color="#FF6B6B" style={styles.inputIcon} />
                                        <TextInput
                                            style={styles.formInput}
                                            placeholder="Search location..."
                                            placeholderTextColor="#999"
                                            value={jobLocation}
                                            onChangeText={(text) => {
                                                setJobLocation(text);
                                                setShowLocationSuggestions(text.length > 0);
                                            }}
                                            onFocus={() => setShowLocationSuggestions(jobLocation.length > 0)}
                                        />
                                    </View>
                                    {showLocationSuggestions && filteredLocations.length > 0 && (
                                        <View style={styles.suggestionsContainer}>
                                            {filteredLocations.map((loc, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={styles.suggestionItem}
                                                    onPress={() => {
                                                        setJobLocation(loc);
                                                        setShowLocationSuggestions(false);
                                                    }}
                                                >
                                                    <Ionicons name="location" size={moderateScale(16)} color="#FF6B6B" />
                                                    <Text style={styles.suggestionText}>{loc}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    )}
                                </View>

                                {/* Job Type */}
                                <View style={styles.formGroup}>
                                    <Text style={styles.formLabel}>Job Type <Text style={styles.requiredStar}>*</Text></Text>
                                    <TouchableOpacity
                                        style={styles.formInputContainer}
                                        onPress={() => setShowJobTypeOptions(!showJobTypeOptions)}
                                    >
                                        <Ionicons name="business-outline" size={moderateScale(20)} color="#FF6B6B" style={styles.inputIcon} />
                                        <Text style={[styles.formInput, { color: jobType ? '#333' : '#999' }]}>
                                            {jobType || 'Select job type...'}
                                        </Text>
                                        <Ionicons name="chevron-down" size={moderateScale(20)} color="#666" style={styles.dropdownIcon} />
                                    </TouchableOpacity>

                                    {showJobTypeOptions && (
                                        <View style={styles.suggestionsContainer}>
                                            {mockData.jobTypes.map((type, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={styles.suggestionItem}
                                                    onPress={() => {
                                                        setJobType(type);
                                                        setShowJobTypeOptions(false);
                                                    }}
                                                >
                                                    <Ionicons name="checkmark-circle" size={moderateScale(16)} color={jobType === type ? '#FF6B6B' : '#DDD'} />
                                                    <Text style={[styles.suggestionText, jobType === type && { color: '#FF6B6B', fontWeight: '600' }]}>
                                                        {type}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    )}
                                </View>

                                {/* Vacancy Count */}
                                <View style={styles.formGroup}>
                                    <Text style={styles.formLabel}>Vacancy Count <Text style={styles.requiredStar}>*</Text></Text>
                                    <View style={styles.formInputContainer}>
                                        <Ionicons name="people-outline" size={moderateScale(20)} color="#FF6B6B" style={styles.inputIcon} />
                                        <TextInput
                                            style={styles.formInput}
                                            placeholder="Number of openings..."
                                            placeholderTextColor="#999"
                                            value={vacancyCount}
                                            onChangeText={setVacancyCount}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                </View>

                                {/* Boost Text */}
                                <View style={styles.boostContainer}>
                                    <View style={styles.boostHeader}>
                                        <Ionicons name="rocket" size={moderateScale(20)} color="#FF6B6B" />
                                        <Text style={styles.boostTitle}>🚀 Boost Your Job Posting</Text>
                                    </View>
                                    <View style={styles.boostContent}>
                                        <View style={styles.boostItem}>
                                            <Ionicons name="checkmark-circle" size={moderateScale(16)} color="#4ECDC4" />
                                            <Text style={styles.boostText}>Get 2x more applications</Text>
                                        </View>
                                        <View style={styles.boostItem}>
                                            <Ionicons name="checkmark-circle" size={moderateScale(16)} color="#4ECDC4" />
                                            <Text style={styles.boostText}>Featured on top of listings</Text>
                                        </View>
                                        <View style={styles.boostItem}>
                                            <Ionicons name="checkmark-circle" size={moderateScale(16)} color="#4ECDC4" />
                                            <Text style={styles.boostText}>Reach qualified candidates faster</Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Action Buttons */}
                                <View style={styles.modalActions}>
                                    <TouchableOpacity
                                        style={[styles.modalButton, styles.cancelButton]}
                                        onPress={() => {
                                            resetForm();
                                            setModalVisible(false);
                                        }}
                                    >
                                        <Text style={styles.cancelButtonText}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.modalButton, styles.submitButton]}
                                        onPress={handleAddJob}
                                    >
                                        <Ionicons name="add-circle" size={moderateScale(20)} color="#FFF" />
                                        <Text style={styles.submitButtonText}>Post Job</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    };

    // Render main content
    const renderContent = () => {
        const displayedJobs = showAllJobs ? mockData.jobPostings : mockData.jobPostings.slice(0, 4);

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.greeting}>Recruitment Dashboard</Text>
                        <Text style={styles.subGreeting}>Welcome back, Arpan!</Text>
                    </View>
                    <View style={styles.headerActions}>
                        <TouchableOpacity style={styles.notificationButton} onPress={() => Alert.alert('Notifications', 'You have 3 new notifications')}>
                            {/* <Ionicons name="notifications-outline" size={moderateScale(24)} color="#333" /> */}
                            <Image
                                source={require('../../asset/bell.png')}
                                style={{height: 24, width: 24, tintColor: '#333',}}
                            />
                            <View style={styles.notificationBadge}>
                                <Text style={styles.badgeText}>3</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Profile', 'Admin Profile')}>
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                                style={styles.profileImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    {renderStatCard(
                        null,
                        'Job Openings',
                        mockData.stats.jobOpenings,
                        '#FF6B6B',
                        '#fdfff5',
                        JOB_OPENING_IMAGE
                    )}
                    {renderStatCard(
                        null,
                        'Selections',
                        mockData.stats.selections,
                        '#4ECDC4',
                        '#F0FDF8',
                        SELECTION_IMAGE
                    )}
                    {renderStatCard(
                        null,
                        'Joinings',
                        mockData.stats.joinings,
                        '#45B7D1',
                        '#F0F8FF',
                        JOINING_IMAGE
                    )}
                    {renderStatCard(
                        null,
                        'Joining Status',
                        mockData.stats.joiningStatus,
                        '#F9CA24',
                        '#FFFBF0',
                        PENDING_IMAGE
                    )}
                </View>

                {/* Job Postings Header with Add Button */}
                <View style={styles.postingsHeader}>
                    <View style={styles.postingsLeft}>
                        <Text style={styles.postingsTitle}>📋 Job Postings</Text>
                        <View style={styles.postingsCount}>
                            <Text style={styles.postingsCountText}>{mockData.jobPostings.length} Total Jobs</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.addJobButton}
                        onPress={() => setModalVisible(true)}
                        activeOpacity={0.8}
                    >
                         <Image
                                source={require('../../asset/add.png')}
                                style={{height: 20, width: 20, tintColor: '#FFF',}}
                            />
                        
                        <Text style={styles.addJobButtonText}>Add Job</Text>
                    </TouchableOpacity>
                </View>

                {/* Job Cards */}
                <View style={styles.jobsList}>
                    {displayedJobs.map((job) => (
                        <View key={job.id} style={styles.jobCardWrapper}>
                            {renderJobCard(job)}
                        </View>
                    ))}
                </View>

                {/* View All Button */}
                {!showAllJobs && mockData.jobPostings.length > 4 && (
                    <TouchableOpacity
                        style={styles.viewAllButton}
                        onPress={toggleShowAllJobs}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.viewAllButtonText}>View All Jobs</Text>
                        <Image
                                source={require('../../asset/arrow.png')}
                                style={{height: 16, width: 16, tintColor: '#FF6B6B',}}
                            />
                    </TouchableOpacity>
                )}

                {showAllJobs && (
                    <TouchableOpacity
                        style={styles.viewAllButton}
                        onPress={toggleShowAllJobs}
                        activeOpacity={0.8}
                    >
                       <Image
                                source={require('../../asset/top.png')}
                                style={{height: 16, width: 16, tintColor: '#FF6B6B',}}
                            />
                        <Text style={styles.viewAllButtonText}>Show Less</Text>
                    </TouchableOpacity>
                )}

                {/* Bottom Padding */}
                <View style={styles.bottomPadding} />
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

            <View style={styles.contentContainer}>
                {renderContent()}
            </View>

            {/* Add Job Modal */}
            {renderAddJobModal()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    contentContainer: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: verticalScale(20),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(5),
    },
    headerLeft: {
        flex: 1,
    },
    greeting: {
        fontSize: moderateScale(22),
        fontWeight: 'bold',
        color: '#333',
    },
    subGreeting: {
        fontSize: moderateScale(14),
        color: '#666',
        marginTop: verticalScale(2),
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationButton: {
        marginRight: moderateScale(15),
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#FF6B6B',
        borderRadius: 10,
        width: moderateScale(18),
        height: moderateScale(18),
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#FFF',
        fontSize: moderateScale(10),
        fontWeight: 'bold',
    },
    profileImage: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        borderWidth: 2,
        borderColor: '#FF6B6B',
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(15),
    },
    statCard: {
        width: '48%',
        padding: moderateScale(15),
        borderRadius: moderateScale(15),
        marginBottom: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    statIconContainer: {
        width: moderateScale(45),
        height: moderateScale(45),
        borderRadius: moderateScale(12),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(8),
    },
    statValue: {
        fontSize: moderateScale(24),
        fontWeight: 'bold',
        color: '#333',
    },
    statLabel: {
        fontSize: moderateScale(12),
        color: '#666',
        marginTop: verticalScale(2),
    },
    postingsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(15),
        marginBottom: moderateScale(15),
    },
    postingsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postingsTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#333',
        marginRight: moderateScale(10),
    },
    postingsCount: {
        backgroundColor: '#FF6B6B15',
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(3),
        borderRadius: moderateScale(12),
    },
    postingsCountText: {
        fontSize: moderateScale(11),
        color: '#FF6B6B',
        fontWeight: '600',
    },
    addJobButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6B6B',
        paddingHorizontal: moderateScale(16),
        paddingVertical: verticalScale(8),
        borderRadius: moderateScale(25),
        shadowColor: '#FF6B6B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    addJobButtonText: {
        color: '#FFF',
        fontSize: moderateScale(13),
        fontWeight: '600',
        marginLeft: moderateScale(4),
    },
    jobsList: {
        paddingHorizontal: moderateScale(20),
    },
    jobCardWrapper: {
        marginBottom: moderateScale(10),
    },
    jobCard: {
        backgroundColor: '#FFF',
        borderRadius: moderateScale(15),
        padding: moderateScale(15),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
    },
    jobCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: moderateScale(10),
    },
    jobTitleContainer: {
        flexDirection: 'row',
        flex: 1,
        marginRight: moderateScale(10),
    },
    jobImageContainer: {
        width: moderateScale(45),
        height: moderateScale(45),
        borderRadius: moderateScale(15),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(10),
        borderWidth: 1,
        borderColor: '#F0F0F0',
        overflow: 'hidden',
    },
    jobImage: {
        width: moderateScale(26),
        height: moderateScale(26),
        tintColor: '#FF6B6B',
    },
    jobTitleWrapper: {
        flex: 1,
    },
    jobTitle: {
        fontSize: moderateScale(15),
        fontWeight: '600',
        color: '#333',
        marginBottom: verticalScale(4),
    },
    jobLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    jobLocationText: {
        fontSize: moderateScale(12),
        color: '#666',
        marginLeft: moderateScale(4),
    },
    jobBadge: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(4),
        borderRadius: moderateScale(12),
    },
    jobBadgeText: {
        fontSize: moderateScale(10),
        fontWeight: '600',
    },
    jobCardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: moderateScale(10),
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
    },
    jobStat: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    jobStatText: {
        fontSize: moderateScale(11),
        color: '#666',
        marginLeft: moderateScale(4),
    },
    jobStatValue: {
        fontWeight: '600',
        color: '#333',
    },
    jobStatDivider: {
        width: 1,
        height: moderateScale(20),
        backgroundColor: '#E8E8E8',
        marginHorizontal: moderateScale(8),
    },
    viewAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingVertical: verticalScale(12),
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(5),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: '#FF6B6B30',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    viewAllButtonText: {
        fontSize: moderateScale(14),
        color: '#FF6B6B',
        fontWeight: '600',
        marginRight: moderateScale(8),
    },
    bottomPadding: {
        height: verticalScale(20),
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#FFF',
        borderRadius: moderateScale(20),
        width: width * 0.92,
        maxHeight: height * 0.9,
        padding: moderateScale(20),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(15),
        paddingBottom: verticalScale(10),
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    modalHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalIconContainer: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(25),
        backgroundColor: '#FF6B6B15',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(12),
    },
    modalTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#333',
    },
    modalSubtitle: {
        fontSize: moderateScale(12),
        color: '#666',
        marginTop: verticalScale(2),
    },
    modalCloseButton: {
        padding: moderateScale(4),
    },
    formGroup: {
        marginBottom: verticalScale(14),
    },
    formLabel: {
        fontSize: moderateScale(13),
        fontWeight: '600',
        color: '#333',
        marginBottom: verticalScale(5),
    },
    requiredStar: {
        color: '#FF6B6B',
    },
    formInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: '#E8E8E8',
        paddingHorizontal: moderateScale(12),
        paddingVertical: Platform.OS === 'ios' ? verticalScale(10) : 0,
    },
    inputIcon: {
        marginRight: moderateScale(8),
    },
    formInput: {
        flex: 1,
        fontSize: moderateScale(14),
        color: '#333',
        paddingVertical: Platform.OS === 'ios' ? verticalScale(8) : verticalScale(6),
    },
    textAreaContainer: {
        alignItems: 'flex-start',
        paddingVertical: moderateScale(8),
    },
    textArea: {
        minHeight: verticalScale(80),
        paddingTop: verticalScale(4),
    },
    dropdownIcon: {
        marginLeft: moderateScale(8),
    },
    suggestionsContainer: {
        backgroundColor: '#FFF',
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginTop: verticalScale(4),
        maxHeight: verticalScale(150),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    suggestionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(12),
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    suggestionText: {
        fontSize: moderateScale(14),
        color: '#333',
        marginLeft: moderateScale(8),
    },
    boostContainer: {
        backgroundColor: '#FFF5F5',
        borderRadius: moderateScale(12),
        padding: moderateScale(15),
        marginVertical: verticalScale(10),
        borderWidth: 1,
        borderColor: '#FF6B6B20',
    },
    boostHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(8),
    },
    boostTitle: {
        fontSize: moderateScale(14),
        fontWeight: '600',
        color: '#FF6B6B',
        marginLeft: moderateScale(8),
    },
    boostContent: {
        paddingLeft: moderateScale(4),
    },
    boostItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(5),
    },
    boostText: {
        fontSize: moderateScale(12),
        color: '#555',
        marginLeft: moderateScale(6),
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(10),
        paddingTop: verticalScale(10),
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    modalButton: {
        flex: 1,
        paddingVertical: verticalScale(12),
        borderRadius: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    cancelButton: {
        backgroundColor: '#F5F5F5',
        marginRight: moderateScale(8),
    },
    cancelButtonText: {
        fontSize: moderateScale(15),
        color: '#666',
        fontWeight: '500',
    },
    submitButton: {
        backgroundColor: '#FF6B6B',
        marginLeft: moderateScale(8),
        shadowColor: '#FF6B6B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    submitButtonText: {
        fontSize: moderateScale(15),
        color: '#FFF',
        fontWeight: '600',
        marginLeft: moderateScale(6),
    },
});

export default DashboardScreen;