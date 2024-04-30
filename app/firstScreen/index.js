import React from "react";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FirstScreen() {
  const [fontsLoaded] = useFonts({
    Ubuntu: require("../../assets/fonts/Ubuntu-Regular.ttf"),
  });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  const { height, width, scale, fontScale } = useWindowDimensions();
  const windowWidth = width;
  const windowHeight = height;
  const ratio = windowWidth / 663; //663 is actual image width
  return (
    <SafeAreaView style={styles.SalutationContainer}>
      <View style={styles.Imagecontainer}>
        <Image
          style={{ width: windowWidth, height: "100%" }}
          source={require("../../assets/Auction_Start.jpg")}
          resizeMode="contain"
          transition={1000}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          // alignItems: "center",
          // padding: "4%",
          width: "100%",
          paddingLeft: "10%",
          paddingRight: "10%",
          minHeight: "10%",
        }}
      >
        <Text style={{ fontFamily: "Ubuntu", fontSize: 42, fontWeight: "700" }}>
          Get Services at Cheaper Rates Auction your Gig
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: "center",

          width: "100%",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Text style={styles.SalutationText}>Over 65,457 Active Bidders</Text>
        <Text style={styles.SalutationText}>Over 107,457 Active Auctions</Text>
        <Text style={styles.SalutationText}>
          Auction your Gig to find the cheapest Rates
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <Pressable style={styles.GetStartedButton}>
          <Text
            style={{
              fontSize: 32,
              color: "white",
              fontFamily: "Ubuntu",
              fontWeight: "900",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SalutationContainer: {
    // height: { windowHeight },
    flex: 1,
    gap: 10,
    flexDirection: "column",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10",
  },
  Imagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "25%",
  },
  ButtonContainer: {
    flex: 4,
    padding: 20,
    border: "0",
    boxSizing: "border-box",
    borderRadius: 24,
    outline: "none",
    justifyContent: "flex-end",
    alignContent: "center",
    width: "100%",
    // minHeight: "30%",
  },
  SalutationText: {
    fontSize: 24,
    // fontFamily: "Ubuntu",
    fontWeight: "bold",
    color: "grey",
  },
  GetStartedButton: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    fontFamily: "Ubuntu",
    flexDirection: "row",
    backgroundColor: "black",
    color: "white",
    borderRadius: 20,
  },
});
