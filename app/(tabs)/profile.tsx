import Button from "@/components/Button";
import { useUserStore } from "@/store/userStore";
import { Text, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const { toggle } = useUserStore();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Back to onboarding" onClick={toggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
