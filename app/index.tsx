import "@/global.css";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const name: string = "Abrenica ExpoProject";
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.Text1}>Welcome, {name}</Text>
        <Text style={styles.Text2}>Hello World! Expo</Text>

        {/* task link 1-inch below hello world */}
        <View style={styles.spacer} />
        <Link href={"/task"} style={styles.linkText}>Go to Task →</Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text1: {
    color: "black",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Text2: {
    backgroundColor: "red",
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },

  // 👉 1 inch spacing (≈ 96 pixels)
  spacer: {
    height: 96,
  },

  linkText: {
    fontSize: 20,
    fontWeight: "600",
    color: "blue",
  },
});