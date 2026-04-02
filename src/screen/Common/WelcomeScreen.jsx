import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";

const { height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={styles.container}>

      {/* 🔹 Top Full Design Image */}
      <ImageBackground
        source={require("../../asset/banner-bg.png")} // 👈 full UI image
        style={styles.topImage}
        resizeMode="cover"
      >
        <View style={styles.bottomCard}>
          <Text style={styles.title}>
            Explore The Trusted Recruitment Platform
          </Text>

          <Text style={styles.subtitle}>
            Get personalized recommendations, apply quickly,
            and receive real time updates.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
            <Text style={styles.arrow}>➜</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Precision hiring, powered by technology
          </Text>
        </View>
      </ImageBackground>

      {/* 🔹 Bottom Card */}

    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* Top Image */
  topImage: {
    width: "100%",
    height: "100%", // adjust based on design
  },

  /* Bottom Card */
  bottomCard: {

    position: "absolute",   // 👈 FIX
    bottom: 0,              // 👈 stick to bottom
    width: "100%",
    
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    alignItems: "center",
    height: height * 0.45, // adjust based on design
    elevation: 10,

  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },

  arrow: {
    color: "#fff",
    fontSize: 18,
  },

  footerText: {
    fontSize: 11,
    color: "#444",
  },
});