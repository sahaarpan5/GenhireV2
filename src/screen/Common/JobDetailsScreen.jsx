import { useNavigation } from '@react-navigation/native';
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
  Alert,
  Image,
  ImageBackground,
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

// Static Job Data for Demo
const STATIC_JOB = {
  id: '1',
  title: 'Senior React Native Developer',
  location: 'Mumbai, India',
  vacancies: 5,
  selected: 3,
  color: '#FF6B6B',
  department: 'Engineering',
  description: 'We are looking for a Senior React Native Developer with 5+ years of experience to lead our mobile development team. The ideal candidate should have strong expertise in React Native, Redux, and mobile app architecture. You will be responsible for building high-performance mobile applications for both iOS and Android platforms.',
  postedDate: '2 days ago',
  status: 'Active',
};

const JobDetailsScreen = ({ navigation }) => {
  const [selectionCount, setSelectionCount] = useState(STATIC_JOB.selected);
  const [joiningCount, setJoiningCount] = useState(0);
  const [isSelectionDone, setIsSelectionDone] = useState(false);
  const [isJoiningDone, setIsJoiningDone] = useState(false);
  

  // Handle Selection button
  const handleSelection = () => {
    Alert.alert(
      'Confirm Selection',
      `Are you sure you want to add selection for "${STATIC_JOB.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            setSelectionCount(selectionCount + 1);
            setIsSelectionDone(true);
            Alert.alert(
              'Success! 🎉',
              `Selection added successfully for ${STATIC_JOB.title}`,
              [
                {
                  text: 'OK',
                  onPress: () => setIsSelectionDone(false),
                }
              ]
            );
          },
        },
      ]
    );
  };

  // Handle Joining button
  const handleJoining = () => {
    if (selectionCount === 0) {
      Alert.alert(
        'Warning',
        'No candidates have been selected yet. Please select candidates first before joining.'
      );
      return;
    }

    Alert.alert(
      'Confirm Joining',
      `Are you sure you want to add joining for "${STATIC_JOB.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            setJoiningCount(joiningCount + 1);
            setSelectionCount(selectionCount - 1);
            setIsJoiningDone(true);
            Alert.alert(
              'Success! 🎉',
              `Joining added successfully for ${STATIC_JOB.title}`,
              [
                {
                  text: 'OK',
                  onPress: () => setIsJoiningDone(false),
                }
              ]
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header with Back Button */}
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
          <Text style={styles.headerTitle}>Job Details</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Job Header Card */}
        {/* <View style={[styles.jobHeaderCard, { borderLeftColor: STATIC_JOB.color, borderLeftWidth: 4 }]}>
          <View style={styles.jobHeaderTop}>
            <View style={[styles.jobIconLarge, { backgroundColor: STATIC_JOB.color + '20' }]}>

              <Image
                source={require('../../asset/briefcase.png')}
                style={{ height: 32, width: 32, tintColor: STATIC_JOB.color, }}
              />
            </View>
            <View style={styles.jobHeaderInfo}>
              <Text style={styles.jobTitle}>{STATIC_JOB.title}</Text>
              <View style={styles.locationContainer}>
                
                <Image
                  source={require('../../asset/pin.png')}
                  style={{ height: 16, width: 16, tintColor: STATIC_JOB.color, }}
                />
                <Text style={styles.locationText}>{STATIC_JOB.location}</Text>
              </View>
            </View>
          </View>

          <View style={styles.jobHeaderBottom}>
            <View style={styles.jobHeaderStat}>
              <Text style={styles.jobHeaderStatLabel}>Department</Text>
              <Text style={[styles.jobHeaderStatValue, { color: STATIC_JOB.color }]}>{STATIC_JOB.department}</Text>
            </View>
            <View style={styles.jobHeaderDivider} />
            <View style={styles.jobHeaderStat}>
              <Text style={styles.jobHeaderStatLabel}>Status</Text>
              <View style={[styles.statusBadge, { backgroundColor: STATIC_JOB.color + '20' }]}>
                <Text style={[styles.statusBadgeText, { color: STATIC_JOB.color }]}>{STATIC_JOB.status}</Text>
              </View>
            </View>
            <View style={styles.jobHeaderDivider} />
            <View style={styles.jobHeaderStat}>
              <Text style={styles.jobHeaderStatLabel}>Posted</Text>
              <Text style={styles.jobHeaderStatValue}>{STATIC_JOB.postedDate}</Text>
            </View>
          </View>
        </View> */}

        <View style={styles.jobHeaderWrapper}>
          <View style={styles.jobHeaderGlow1} />
          <View style={styles.jobHeaderGlow2} />
          <View style={styles.jobHeaderGlow3} />

          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400' }}
            style={styles.jobHeaderCard}
            imageStyle={styles.jobHeaderImageStyle}
          >
            <View style={[styles.jobHeaderOverlay, { backgroundColor: STATIC_JOB.color + 'CC' }]}>
              <View style={styles.jobHeaderTop}>
                <View style={[styles.jobIconLarge, { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
                 <Image
                source={require('../../asset/briefcase.png')}
                style={{ height: 32, width: 32, tintColor: "#FFF", }}
              />
                </View>
                <View style={styles.jobHeaderInfo}>
                  <Text style={styles.jobTitle}>{STATIC_JOB.title}</Text>
                  <View style={styles.locationContainer}>
                    <Image
                  source={require('../../asset/pin.png')}
                  style={{ height: 16, width: 16, tintColor: "#FFF", }}
                />
                    <Text style={styles.locationText}>{STATIC_JOB.location}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.jobHeaderBottom}>
                <View style={styles.jobHeaderStat}>
                  <Text style={styles.jobHeaderStatLabel}>Department</Text>
                  <Text style={[styles.jobHeaderStatValue, { color: '#FFF' }]}>{STATIC_JOB.department}</Text>
                </View>
                <View style={styles.jobHeaderDivider} />
                <View style={styles.jobHeaderStat}>
                  <Text style={styles.jobHeaderStatLabel}>Status</Text>
                  <View style={[styles.statusBadge, { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
                    <Text style={[styles.statusBadgeText, { color: '#FFF' }]}>{STATIC_JOB.status}</Text>
                  </View>
                </View>
                <View style={styles.jobHeaderDivider} />
                <View style={styles.jobHeaderStat}>
                  <Text style={styles.jobHeaderStatLabel}>Posted</Text>
                  <Text style={[styles.jobHeaderStatValue, { color: '#FFF' }]}>{STATIC_JOB.postedDate}</Text>
                </View>
              </View>

              {/* Shine Effect */}
              <View style={styles.jobHeaderShine} />
            </View>
          </ImageBackground>
        </View>

        {/* Job Description Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Image
              source={require('../../asset/paper.png')}
              style={{ height: 22, width: 22, tintColor: "#FF6B6B", }}
            />

            <Text style={styles.sectionTitle}>Job Description</Text>
          </View>
          <Text style={styles.descriptionText}>{STATIC_JOB.description}</Text>
        </View>

        {/* Job Stats Section */}
        <View style={styles.statsRow}>
          <View style={[styles.statBox, { backgroundColor: '#FFF5F5', justifyContent: 'center', alignSelf: 'center' }]}>
            <Image
              source={require('../../asset/man.png')}
              style={{ height: 22, width: 22, tintColor: "#FF6B6B", }}
            />
            <Text style={styles.statBoxValue}>{STATIC_JOB.vacancies}</Text>
            <Text style={styles.statBoxLabel}>Total Vacancies</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: '#F0FDF8' }]}>
            <Image
              source={require('../../asset/tick.png')}
              style={{ height: 22, width: 22, tintColor: "#45B7D1", }}
            />

            <Text style={styles.statBoxValue}>{selectionCount}</Text>
            <Text style={styles.statBoxLabel}>Selected</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: '#F0F8FF' }]}>
            <Image
              source={require('../../asset/man.png')}
              style={{ height: 22, width: 22, tintColor: "#45B7D1", }}
            />

            <Text style={styles.statBoxValue}>{joiningCount}</Text>
            <Text style={styles.statBoxLabel}>Joined</Text>
          </View>
        </View>

        {/* Selection & Joining Info Cards */}
        <View style={styles.infoContainer}>
          <View style={styles.infoCard}>
            <View style={[styles.infoDot, { backgroundColor: '#4ECDC4' }]} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Candidates Selected</Text>
              <Text style={styles.infoValue}>{selectionCount} out of {STATIC_JOB.vacancies}</Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <View style={[styles.infoDot, { backgroundColor: '#45B7D1' }]} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Candidates Joined</Text>
              <Text style={styles.infoValue}>{joiningCount} out of {STATIC_JOB.vacancies}</Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <View style={[styles.infoDot, { backgroundColor: '#FF6B6B' }]} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Remaining Positions</Text>
              <Text style={styles.infoValue}>{STATIC_JOB.vacancies - selectionCount - joiningCount}</Text>
            </View>
          </View>
        </View>

        {/* Two Action Buttons - Selection and Joining */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.selectionButton]}
            onPress={() => navigation.navigate('ManualSelectionForm')}
            activeOpacity={0.8}
          >
            <Image
              source={require('../../asset/tick.png')}
              style={{ height: 22, width: 22, tintColor: "#FFF", }}
            />

            <Text style={styles.actionButtonText}>Selection</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.joiningButton]}
            onPress={handleJoining}
            activeOpacity={0.8}
          >
            <Image
              source={require('../../asset/man.png')}
              style={{ height: 22, width: 22, tintColor: "#FFF", }}
            />
            <Text style={styles.actionButtonText}>Joining</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Hiring Progress</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {
              width: `${((selectionCount + joiningCount) / STATIC_JOB.vacancies) * 100}%`
            }]} />
          </View>
          <Text style={styles.progressText}>
            {selectionCount + joiningCount} out of {STATIC_JOB.vacancies} positions filled
          </Text>
        </View>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
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

 
 
  jobHeaderInfo: {
    flex: 1,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: moderateScale(14),
    color: '#ffffff',
    marginLeft: moderateScale(4),
  },
  jobHeaderBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: moderateScale(15),
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  jobHeaderStat: {
    alignItems: 'center',
    flex: 1,
  },
  jobHeaderStatLabel: {
    fontSize: moderateScale(11),
    color: '#FFF',
    marginBottom: verticalScale(4),
  },
  jobHeaderStatValue: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#333',
  },
  jobHeaderDivider: {
    width: 1,
    height: moderateScale(30),
    backgroundColor: '#E8E8E8',
  },
  statusBadge: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(12),
  },
  statusBadgeText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  sectionCard: {
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(12),
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#333',
    marginLeft: moderateScale(8),
  },
  descriptionText: {
    fontSize: moderateScale(14),
    color: '#555',
    lineHeight: moderateScale(22),
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    marginTop: verticalScale(16),
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
    marginHorizontal: moderateScale(4),
  },
  statBoxValue: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: '#333',
    marginTop: verticalScale(4),
    alignSelf: 'center',
    alignContent: 'center',
  },
  statBoxLabel: {
    fontSize: moderateScale(12),
    color: '#666',
    marginTop: verticalScale(2),
  },
  infoContainer: {
    paddingHorizontal: moderateScale(16),
    marginTop: verticalScale(16),
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: moderateScale(12),
    padding: moderateScale(15),
    marginBottom: moderateScale(8),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  infoDot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
    marginRight: moderateScale(12),
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: moderateScale(13),
    color: '#666',
  },
  infoValue: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#333',
    marginTop: verticalScale(2),
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
    marginTop: verticalScale(20),
    gap: moderateScale(10),
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(14),
    borderRadius: moderateScale(12),
  },
  selectionButton: {
    backgroundColor: '#4ECDC4',
    shadowColor: '#4ECDC4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  joiningButton: {
    backgroundColor: '#45B7D1',
    shadowColor: '#45B7D1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(8),
  },
  progressContainer: {
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
  progressTitle: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#333',
    marginBottom: verticalScale(10),
  },
  progressBar: {
    height: verticalScale(8),
    backgroundColor: '#F0F0F0',
    borderRadius: moderateScale(4),
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF6B6B',
    borderRadius: moderateScale(4),
  },
  progressText: {
    fontSize: moderateScale(12),
    color: '#666',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  bottomPadding: {
    height: verticalScale(20),
  },
   jobHeaderWrapper: {
    marginHorizontal: moderateScale(16),
    marginTop: verticalScale(5),
    borderRadius: moderateScale(16),
    position: 'relative',
    overflow: 'visible',
  },
  jobHeaderGlow1: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(255, 107, 107, 0.05)',
    zIndex: 0,
  },
  jobHeaderGlow2: {
    position: 'absolute',
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    borderRadius: moderateScale(18),
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    zIndex: 0,
  },
  jobHeaderGlow3: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: moderateScale(16),
    backgroundColor: 'rgba(255, 107, 107, 0.15)',
    zIndex: 0,
  },
  jobHeaderCard: {
    borderRadius: moderateScale(16),
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  jobHeaderImageStyle: {
    borderRadius: moderateScale(16),
  },
  jobHeaderOverlay: {
    flex: 1,
    padding: moderateScale(20),
    borderRadius: moderateScale(16),
  },
  jobHeaderTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
  jobIconLarge: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(15),
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },

  jobTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: verticalScale(4),
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
   jobHeaderShine: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '30%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    transform: [{ skewX: '-20deg' }],
    borderTopRightRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
});

export default JobDetailsScreen;