import { useNavigation } from "@react-navigation/native";
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
  const navigation=useNavigation();
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



          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.buttonText}>Get Started</Text>
              <Image
                source={require("../../asset/fast-forward.png")} // 👈 full UI image
                style={styles.fastforward}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              
              <Image
                source={require("../../asset/send.png")} // 👈 full UI image
                style={styles.forward}
              />
            </View>

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
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    alignItems: "center",
    height: height * 0.45, // adjust based on design
    elevation: 10,

  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: '#333',
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#929292",
    marginBottom: 20,
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
    width: '80%',
    justifyContent: 'space-between'

  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    marginRight: 10,
  },

  arrow: {
    color: "#fff",
    fontSize: 18,
  },

  footerText: {
    fontSize: 14,
    color: "#0a0a0a",
    marginTop:20
  },
  fastforward: {
    width: 22,
    height: 22,
    marginLeft:10
  },
  forward: {
    width: 40,
    height: 40,
    
  },
});