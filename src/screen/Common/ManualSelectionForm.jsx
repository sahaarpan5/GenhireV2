import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
    Platform,
    TextInput,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    FlatList,
    Image,
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

// Static values for demo
const STATIC_JOB = {
    jobId: '1',
    jobTitle: 'Senior React Native Developer',
};

// Available skills list for autocomplete
const AVAILABLE_SKILLS = [
    'React Native',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'Python',
    'Java',
    'Swift',
    'Kotlin',
    'Flutter',
    'Dart',
    'Angular',
    'Vue.js',
    'Redux',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'AWS',
    'Docker',
    'Kubernetes',
    'GraphQL',
    'REST API',
    'HTML5',
    'CSS3',
    'SASS',
    'Git',
    'CI/CD',
    'Agile',
    'Scrum',
    'Jira',
    'Figma',
    'Adobe XD',
    'Photoshop',
    'UI/UX Design',
    'Machine Learning',
    'Data Science',
    'SQL',
    'NoSQL',
    'Redis',
    'RabbitMQ',
    'Kafka',
    'Microservices',
    'DevOps',
    'Testing',
    'Jest',
    'Cypress',
    'Webpack',
    'Babel',
];

const ManualSelectionForm = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [location, setLocation] = useState('');
    const [skillInput, setSkillInput] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [experience, setExperience] = useState('');
    const [cvFile, setCvFile] = useState(null);
    const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
    const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);

    // Mock locations for autocomplete
    const locations = [
        'Mumbai, India',
        'Bangalore, India',
        'Delhi, India',
        'Pune, India',
        'Hyderabad, India',
        'Chennai, India',
        'Kolkata, India',
        'Ahmedabad, India',
    ];

    const filteredLocations = locations.filter(loc =>
        loc.toLowerCase().includes(location.toLowerCase())
    );

    // Filter skills based on input
    const filteredSkills = AVAILABLE_SKILLS.filter(skill =>
        skill.toLowerCase().includes(skillInput.toLowerCase()) &&
        !selectedSkills.includes(skill)
    );

    // Handle skill selection
    const handleSkillSelect = (skill) => {
        setSelectedSkills([...selectedSkills, skill]);
        setSkillInput('');
        setShowSkillSuggestions(false);
    };

    // Handle skill removal
    const handleSkillRemove = (skillToRemove) => {
        setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
    };

    // Handle CV file picker - UI only
    const handleFilePick = () => {
        Alert.alert(
            'Upload CV',
            'Select file type',
            [
                { text: 'PDF', onPress: () => setCvFile({ name: 'candidate_cv.pdf', size: 245 }), style: 'default' },
                { text: 'DOC', onPress: () => setCvFile({ name: 'candidate_cv.doc', size: 189 }), style: 'default' },
                { text: 'DOCX', onPress: () => setCvFile({ name: 'candidate_cv.docx', size: 312 }), style: 'default' },
                { text: 'Cancel', style: 'cancel' },
            ]
        );
    };

    // Handle form submission with static values
    const handleSubmit = () => {
        // Validate form
        if (!fullName.trim()) {
            Alert.alert('Error', 'Please enter candidate full name');
            return;
        }
        if (!location.trim()) {
            Alert.alert('Error', 'Please enter candidate location');
            return;
        }
        if (selectedSkills.length === 0) {
            Alert.alert('Error', 'Please add at least one skill');
            return;
        }
        if (!experience.trim()) {
            Alert.alert('Error', 'Please enter candidate experience');
            return;
        }
        if (!cvFile) {
            Alert.alert('Error', 'Please attach CV');
            return;
        }

        // Prepare candidate data with static values
        const candidateData = {
            fullName: fullName.trim(),
            location: location.trim(),
            skills: selectedSkills,
            experience: experience.trim(),
            cvFile: cvFile,
            jobId: STATIC_JOB.jobId,
            jobTitle: STATIC_JOB.jobTitle,
            selectedDate: new Date().toLocaleDateString(),
        };

        // Show success message
        Alert.alert(
            'Success! 🎉',
            `${candidateData.fullName} has been selected for ${STATIC_JOB.jobTitle}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        // Navigate back to Job Details
                        navigation.goBack();
                    }
                }
            ]
        );
    };

    // Render skill chip
    const renderSkillChip = (skill) => (
        <View key={skill} style={styles.skillChip}>
            <Text style={styles.skillChipText}>{skill}</Text>
            <TouchableOpacity
                onPress={() => handleSkillRemove(skill)}
                style={styles.skillChipRemove}
            >
                <Image
                    source={require('../../asset/close.png')}
                    style={[styles.inputIcon, { tintColor: '#000000', width: 16, height: 16 }]}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

                <ScrollView
                   
                    contentContainerStyle={styles.scrollContent}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require('../../asset/arrow-back.png')}
                                style={{ height: 24, width: 24, tintColor: '#000000', }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Add Candidate</Text>
                        <View style={styles.headerRight} />
                    </View>

                    {/* Job Info Card - Static */}
                    <View style={styles.jobInfoCard}>
                        <View style={styles.jobInfoIcon}>

                            <Image
                                source={require('../../asset/briefcase.png')}
                                style={{ height: 24, width: 24, tintColor: '#FF6B6B', }}
                            />
                        </View>
                        <View style={styles.jobInfoContent}>
                            <Text style={styles.jobInfoLabel}>Selected for</Text>
                            <Text style={styles.jobInfoTitle}>{STATIC_JOB.jobTitle}</Text>
                            <Text style={styles.jobInfoId}>Job ID: #{STATIC_JOB.jobId}</Text>
                        </View>
                    </View>

                    {/* Form Card */}
                    <View style={styles.formCard}>
                        <Text style={styles.formTitle}>Candidate Information</Text>
                        <Text style={styles.formSubtitle}>Please fill in all required fields</Text>

                        {/* Full Name */}
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                Full Name <Text style={styles.requiredStar}>*</Text>
                            </Text>
                            <View style={styles.formInputContainer}>
                                <Image
                                    source={require('../../asset/user.png')}
                                    style={styles.inputIcon}
                                />

                                <TextInput
                                    style={styles.formInput}
                                    placeholder="Enter candidate full name"
                                    placeholderTextColor="#999"
                                    value={fullName}
                                    onChangeText={setFullName}
                                />
                            </View>
                        </View>

                        {/* Location */}
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                Location <Text style={styles.requiredStar}>*</Text>
                            </Text>
                            <View style={styles.formInputContainer}>
                                <Image
                                    source={require('../../asset/pin.png')}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.formInput}
                                    placeholder="Enter candidate location"
                                    placeholderTextColor="#999"
                                    value={location}
                                    onChangeText={(text) => {
                                        setLocation(text);
                                        setShowLocationSuggestions(text.length > 0);
                                    }}
                                    onFocus={() => setShowLocationSuggestions(location.length > 0)}
                                />
                            </View>
                            {showLocationSuggestions && filteredLocations.length > 0 && (
                                <View style={styles.suggestionsContainer}>
                                    {filteredLocations.map((loc, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={styles.suggestionItem}
                                            onPress={() => {
                                                setLocation(loc);
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

                        {/* Skills - Multi-select with Autocomplete */}
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                Skills <Text style={styles.requiredStar}>*</Text>
                            </Text>

                            {/* Selected Skills Chips */}
                            {selectedSkills.length > 0 && (
                                <View style={styles.skillsContainer}>
                                    {selectedSkills.map((skill) => renderSkillChip(skill))}
                                </View>
                            )}

                            {/* Skill Input */}
                            <View style={styles.formInputContainer}>
                                <Image
                                    source={require('../../asset/skill.png')}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.formInput}
                                    placeholder={selectedSkills.length > 0 ? "Add more skills..." : "Type to search skills..."}
                                    placeholderTextColor="#999"
                                    value={skillInput}
                                    onChangeText={(text) => {
                                        setSkillInput(text);
                                        setShowSkillSuggestions(text.length > 0);
                                    }}
                                    onFocus={() => setShowSkillSuggestions(skillInput.length > 0)}
                                />
                            </View>

                            {/* Skill Suggestions */}
                            {showSkillSuggestions && filteredSkills.length > 0 && (
                                <View style={styles.suggestionsContainer}>
                                    {filteredSkills.map((skill, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={styles.suggestionItem}
                                            onPress={() => handleSkillSelect(skill)}
                                        >
                                            <Image
                                                source={require('../../asset/add.png')}
                                                style={[styles.inputIcon, { tintColor: '#4ECDC4', width: 16, height: 16 }]}
                                            />
                                            <Text style={styles.suggestionText}>{skill}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}

                            {/* No skills found message */}
                            {showSkillSuggestions && skillInput.length > 0 && filteredSkills.length === 0 && (
                                <View style={styles.noSkillsContainer}>
                                    <Text style={styles.noSkillsText}>No matching skills found</Text>
                                </View>
                            )}
                        </View>

                        {/* Experience */}
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                Experience <Text style={styles.requiredStar}>*</Text>
                            </Text>
                            <View style={styles.formInputContainer}>
                                <Image
                                    source={require('../../asset/exp.png')}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.formInput}
                                    placeholder="e.g., 5 years"
                                    placeholderTextColor="#999"
                                    value={experience}
                                    onChangeText={setExperience}
                                />
                            </View>
                        </View>

                        {/* CV Attachment - UI Only */}
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>
                                CV Attachment <Text style={styles.requiredStar}>*</Text>
                            </Text>
                            <TouchableOpacity
                                style={styles.cvUploadContainer}
                                onPress={handleFilePick}
                                activeOpacity={0.8}
                            >
                                <View style={styles.cvUploadIcon}>
                                    <Image
                                        source={require('../../asset/cloud-computing.png')}
                                        style={styles.inputIcon}
                                    />
                                </View>
                                <View style={styles.cvUploadContent}>
                                    <Text style={styles.cvUploadTitle}>
                                        {cvFile ? cvFile.name : 'Upload CV (PDF, DOC, DOCX)'}
                                    </Text>
                                    <Text style={styles.cvUploadSubtitle}>
                                        {cvFile ? `Size: ${(cvFile.size / 1024).toFixed(2)} KB` : 'Max size: 5MB'}
                                    </Text>
                                </View>
                                {cvFile && (
                                    <View style={styles.cvUploadCheck}>
                                        <Ionicons name="checkmark-circle" size={moderateScale(28)} color="#4ECDC4" />
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>

                        {/* Submit Button */}
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit}
                            activeOpacity={0.8}
                        >
                            <Image
                                source={require('../../asset/tick.png')}
                                style={[styles.inputIcon,{tintColor:'#FFF'}]}
                            />
                            <Text style={styles.submitButtonText}>Submit & Add Candidate</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom Padding */}
                    <View style={styles.bottomPadding} />
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: verticalScale(20),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(16),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(10),
    },
    backButton: {
        padding: moderateScale(4),
    },
    headerTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#333',
    },
    headerRight: {
        width: moderateScale(32),
    },
    jobInfoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: moderateScale(12),
        padding: moderateScale(15),
        marginHorizontal: moderateScale(16),
        marginTop: verticalScale(5),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6B6B',
    },
    jobInfoIcon: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(25),
        backgroundColor: '#FF6B6B15',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(12),
    },
    jobInfoContent: {
        flex: 1,
    },
    jobInfoLabel: {
        fontSize: moderateScale(12),
        color: '#666',
    },
    jobInfoTitle: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        color: '#333',
        marginTop: verticalScale(2),
    },
    jobInfoId: {
        fontSize: moderateScale(11),
        color: '#999',
        marginTop: verticalScale(2),
    },
    formCard: {
        backgroundColor: '#FFF',
        borderRadius: moderateScale(16),
        padding: moderateScale(20),
        marginHorizontal: moderateScale(16),
        marginTop: verticalScale(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    formTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: verticalScale(4),
    },
    formSubtitle: {
        fontSize: moderateScale(13),
        color: '#666',
        marginBottom: verticalScale(20),
    },
    formGroup: {
        marginBottom: verticalScale(18),
    },
    formLabel: {
        fontSize: moderateScale(14),
        fontWeight: '600',
        color: '#333',
        marginBottom: verticalScale(8),
    },
    requiredStar: {
        color: '#FF6B6B',
    },
    formInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: moderateScale(12),
        borderWidth: 1.5,
        borderColor: '#E8E8E8',
        paddingHorizontal: moderateScale(16),
        paddingVertical: Platform.OS === 'ios' ? verticalScale(14) : verticalScale(10),
        minHeight: verticalScale(56),
    },
    inputIcon: {
        marginRight: moderateScale(12),
        height: 24,
        width: 24,
        tintColor: '#FF6B6B'
    },
    formInput: {
        flex: 1,
        fontSize: moderateScale(16),
        color: '#333',
        paddingVertical: Platform.OS === 'ios' ? verticalScale(12) : verticalScale(8),
        height: moderateScale(50),
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: verticalScale(8),
    },
    skillChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6B6B15',
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(12),
        paddingVertical: verticalScale(6),
        marginRight: moderateScale(6),
        marginBottom: verticalScale(4),
        borderWidth: 1,
        borderColor: '#FF6B6B30',
    },
    skillChipText: {
        fontSize: moderateScale(13),
        color: '#FF6B6B',
        fontWeight: '700',
        marginRight: moderateScale(4),
    },
    skillChipRemove: {
        padding: moderateScale(2),
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
    noSkillsContainer: {
        backgroundColor: '#FFF',
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginTop: verticalScale(4),
        padding: moderateScale(12),
        alignItems: 'center',
    },
    noSkillsText: {
        fontSize: moderateScale(14),
        color: '#999',
    },
    cvUploadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: moderateScale(12),
        borderWidth: 2,
        borderColor: '#E8E8E8',
        borderStyle: 'dashed',
        padding: moderateScale(18),
        minHeight: verticalScale(90),
    },
    cvUploadIcon: {
        marginRight: moderateScale(14),
    },
    cvUploadContent: {
        flex: 1,
    },
    cvUploadTitle: {
        fontSize: moderateScale(15),
        color: '#333',
        fontWeight: '500',
    },
    cvUploadSubtitle: {
        fontSize: moderateScale(13),
        color: '#999',
        marginTop: verticalScale(3),
    },
    cvUploadCheck: {
        marginLeft: moderateScale(8),
    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6B6B',
        paddingVertical: verticalScale(16),
        borderRadius: moderateScale(12),
        marginTop: verticalScale(12),
        shadowColor: '#FF6B6B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: moderateScale(17),
        fontWeight: '600',
        marginLeft: moderateScale(8),
    },
    bottomPadding: {
        height: verticalScale(20),
    },
});

export default ManualSelectionForm;