import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
// import { Ionicons } from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF6B6B" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section with Image */}
        <View style={styles.heroContainer}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800' }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <View style={styles.heroOverlay}>
              <View style={styles.heroContent}>
                <View style={styles.logoContainer}>
                  
                  <Text style={styles.logoText}>GenHire</Text>
                </View>

                <View style={styles.heroTextContainer}>
                  <Text style={styles.heroTitle}>Building Tomorrow's Workforce</Text>
                  <Text style={styles.heroSubtitle}>
                    Transform your hiring strategy with GenHire's comprehensive recruitment
                    and HR solutions. From talent acquisition to workforce management,
                    we've got you covered.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Catchy Recruitment Line */}
        <View style={styles.catchyContainer}>
          <View style={styles.catchyCard}>
            <Text style={styles.catchyEmoji}>🚀</Text>
            <Text style={styles.catchyTitle}>
              Hire Smarter, Grow Faster
            </Text>
            <Text style={styles.catchyText}>
              GenHire empowers you to build high-performing teams with
              cutting-edge recruitment technology and expert HR solutions.
            </Text>
          </View>
        </View>

        {/* Enhanced Get Started Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <View style={styles.buttonGradient}>
              <Text style={styles.getStartedText}>Get Started</Text>
              {/* <Ionicons name="arrow-forward" size={moderateScale(26)} color="#FFF" /> */}
              <Image
                source={require('../../asset/arrow.png')}
                style={styles.arrowImage}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.buttonShine} />

          
        </View>
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
  },
  heroContainer: {
    height: verticalScale(420),
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroImageStyle: {
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 107, 107, 0.82)',
    paddingHorizontal: moderateScale(24),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(30),
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  logoIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(12),
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  logoText: {
    fontSize: moderateScale(30),
    fontWeight: '700',
    color: '#FFF',
    letterSpacing: 0.5,
  },
  heroContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heroTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: verticalScale(10),
  },
  heroTitle: {
    fontSize: moderateScale(34),
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: verticalScale(12),
    lineHeight: moderateScale(42),
  },
  heroSubtitle: {
    fontSize: moderateScale(16),
    color: 'rgba(255,255,255,0.9)',
    lineHeight: moderateScale(24),
  },
  catchyContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(20),
  },
  catchyCard: {
    backgroundColor: '#FFF',
    borderRadius: moderateScale(20),
    padding: moderateScale(28),
    alignItems: 'center',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#FF6B6B20',
  },
  catchyEmoji: {
    fontSize: moderateScale(44),
    marginBottom: verticalScale(10),
  },
  catchyTitle: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
  catchyText: {
    fontSize: moderateScale(15),
    color: '#666',
    textAlign: 'center',
    lineHeight: moderateScale(22),
  },
  buttonContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    alignItems: 'center',
  },
  getStartedButton: {
    width: '100%',
    borderRadius: moderateScale(16),
    overflow: 'hidden',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B',
    paddingVertical: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    position: 'relative',
  },
  getStartedText: {
    color: '#FFF',
    fontSize: moderateScale(22),
    fontWeight: '700',
    marginRight: moderateScale(14),
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  buttonShine: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '30%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    transform: [{ skewX: '-20deg' }],
    borderTopRightRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  buttonSubtext: {
    fontSize: moderateScale(13),
    color: '#999',
    textAlign: 'center',
    marginTop: verticalScale(16),
  },
  arrowImage: {
    width: 50,
    height: 34,
    resizeMode: 'contain',
    marginLeft: 10,
    tintColor: '#FFF',
  },
});

export default WelcomeScreen;