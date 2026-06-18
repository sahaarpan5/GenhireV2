import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert(
      'Success! 🎉',
      'Login successful! Welcome to GenHire',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('DashboardScreen'),
        },
      ]
    );
  };

  const handleForgotPassword = () => {
    Alert.alert('Reset Password', 'Password reset link will be sent to your email');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#FF6B6B" />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Image */}
          <View style={styles.headerContainer}>
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800' }}
              style={styles.headerImage}
              imageStyle={styles.headerImageStyle}
            >
              <View style={styles.headerOverlay}>
                <View style={styles.logoContainer}>
                  <View style={styles.logoIcon}>
                    <Ionicons name="briefcase" size={moderateScale(32)} color="#FFF" />
                  </View>
                  <Text style={styles.logoText}>GenHire</Text>
                </View>
                <View style={styles.headerContent}>
                  <Text style={styles.welcomeText}>Welcome Back!</Text>
                  <Text style={styles.subWelcomeText}>Sign in to continue your recruitment journey</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <View style={styles.formCard}>
              {/* Email Input */}
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Email Address</Text>
                <View style={styles.formInputContainer}>
                  <Image
                    source={require('../../asset/mail.png')}
                    style={styles.arrowImage}
                  />

                  <TextInput
                    style={styles.formInput}
                    placeholder="Enter your email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Password</Text>
                <View style={styles.formInputContainer}>
                  <Image
                    source={require('../../asset/password.png')}
                    style={styles.arrowImage}
                  />
                  <TextInput
                    style={styles.formInput}
                    placeholder="Enter your password"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Image
                      source={
                        showPassword
                          ? require('../../asset/eye-open.png')
                          : require('../../asset/eye-close.png')
                      }
                      style={styles.eyeicon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Remember Me & Forgot Password */}
              <View style={styles.optionsRow}>
                <TouchableOpacity
                  style={styles.rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View style={[styles.checkbox, rememberMe && styles.checkboxActive]}>
                    {rememberMe && <Ionicons name="checkmark" size={moderateScale(12)} color="#FFF" />}
                  </View>
                  <Text style={styles.rememberMeText}>Remember Me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.loginButtonText}>Sign In</Text>
                <Image
                  source={require('../../asset/arrow.png')}
                  style={styles.signuparrowImage}
                />
                {/* <Ionicons name="arrow-forward" size={moderateScale(22)} color="#FFF" /> */}
              </TouchableOpacity>
            </View>
          </View>
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
  },
  headerContainer: {
    height: verticalScale(280),
    width: '100%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerImageStyle: {
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 107, 107, 0.85)',
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(20),
    justifyContent: 'space-between',
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
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
    fontSize: moderateScale(22),
    fontWeight: '700',
    color: '#FFF',
    letterSpacing: 0.5,
  },
  headerContent: {
    marginBottom: verticalScale(20),
  },
  welcomeText: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: verticalScale(5),
  },
  subWelcomeText: {
    fontSize: moderateScale(14),
    color: 'rgba(255,255,255,0.85)',
    marginBottom: verticalScale(20),
  },
  formContainer: {
    flex: 1,
    marginTop: verticalScale(-30),
    paddingHorizontal: moderateScale(20),
  },
  formCard: {
    backgroundColor: '#FFF',
    borderRadius: moderateScale(20),
    padding: moderateScale(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  formGroup: {
    marginBottom: verticalScale(16),
  },
  formLabel: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#333',
    marginBottom: verticalScale(6),
  },
  formInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#E8E8E8',
    paddingHorizontal: moderateScale(14),
    paddingVertical: Platform.OS === 'ios' ? verticalScale(4) : 0,
  },
  inputIcon: {

  },
  formInput: {
    flex: 1,
    fontSize: moderateScale(15),
    color: '#333',
    paddingVertical: Platform.OS === 'ios' ? verticalScale(12) : verticalScale(8),
    height: moderateScale(50),
  },
  eyeIcon: {
    padding: moderateScale(4),
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(4),
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(8),
  },
  checkboxActive: {
    backgroundColor: '#FF6B6B',
    borderColor: '#FF6B6B',
  },
  rememberMeText: {
    fontSize: moderateScale(13),
    color: '#666',
  },
  forgotPassword: {
    fontSize: moderateScale(13),
    color: '#FF6B6B',
    fontWeight: '600',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B',
    paddingVertical: verticalScale(16),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(10),
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginRight: moderateScale(10),
    letterSpacing: 0.5,
  },
  arrowImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
    tintColor: '#FF6B6B',
    marginRight: moderateScale(10),
  },
  eyeicon: {
    width: 26,
    height: 26, resizeMode: 'contain',
    tintColor: '#FF6B6B',
    padding: moderateScale(4),
  },
    signuparrowImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 5,
    tintColor: '#ffffff',
    
  },
});

export default LoginScreen;