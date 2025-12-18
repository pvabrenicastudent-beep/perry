import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const name: string = "Perry";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.Text1}>Welcome, {name}</Text>
        <Text style={styles.Text2}>Hello World! Expo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text1: {
    color: "red",
    fontSize: 40,
    marginBottom: 20,
  },
  Text2: {
    backgroundColor: "red",
    color: "white",
    fontSize: 50,
    padding: 10,
  },
});
