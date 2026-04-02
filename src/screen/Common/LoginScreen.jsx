import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LoginScreen = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigation=useNavigation();

  return (
    <ImageBackground
      source={require("../../asset/login-banner.png")} // <-- your background image
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.card}>
            <Text style={styles.title}>Login</Text>

            {/* User ID */}
            <View style={styles.inputContainer}>
              <Text style={styles.icon}>👤</Text>
              <TextInput
                placeholder="Enter the user ID"
                value={userId}
                onChangeText={setUserId}
                style={styles.input}
                placeholderTextColor="#777"
              />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.icon}>🔒</Text>
              <TextInput
                placeholder="Enter the password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#777"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.replace('DashboardScreen')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            {/* Remember + Forgot */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.remember}
                onPress={() => setRemember(!remember)}
              >
                <View
                  style={[
                    styles.checkbox,
                    remember && styles.checkboxChecked,
                  ]}
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

      
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    height:'65%'
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color:'#333',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0e0d0d",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "90%",
    alignSelf:'center'
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
  },
  loginBtn: {
    alignSelf:'center',
    width: "90%",
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#6a11cb", // fallback below
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
    width:'90%',
    alignSelf:'center'
  },
  remember: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#999",
    marginRight: 6,
  },
  checkboxChecked: {
    backgroundColor: "#0e0e0e",
  },
  rememberText: {
    fontSize: 16,
    color: "#0e0e0e",
  },
  forgot: {
    color: "#0e0e0e",
    fontSize: 16,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  or: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#777",
  },
  signup: {
    textAlign: "center",
    fontSize: 13,
  },
  signupLink: {
    color: "#2b7cff",
    fontWeight: "bold",
  },
});