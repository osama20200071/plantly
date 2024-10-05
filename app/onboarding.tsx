import { View, StyleSheet, Text, Platform } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import PlantlyImage from "@/components/PlantlyImage";

export default function OnboardingScreen() {
  console.log("onboardingScreen");
  const { toggle } = useUserStore();
  const router = useRouter();
  const onBoardingHandler = () => {
    toggle();
    router.replace("/");
    // so the user can't go back to the onboarding screen
    // we replace our current stack with the home screen
  };

  return (
    <LinearGradient
      style={styles.container}
      start={[1, 0]}
      end={[0, 1]}
      colors={[
        theme.colorLeafyGreen,
        theme.colorAppleGreen,
        theme.colorLimeGreen,
      ]}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.header}>Plantly</Text>
        <Text style={styles.tagLine}>
          Keep Your Plants Healthy and Hydrated
        </Text>
      </View>
      <PlantlyImage />
      <View style={{ flexDirection: "row", gap: 15, marginBottom: 12 }}>
        <Button title="Let me in" onClick={onBoardingHandler} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },

  header: {
    fontSize: 42,
    fontWeight: "bold",
    color: theme.colorWhite,
    textAlign: "center",
    marginBottom: 12,
  },

  tagLine: {
    fontSize: 24,
    textAlign: "center",
    color: theme.colorWhite,
    fontFamily: Platform.select({
      ios: "Caveat-Regular",
      android: "Caveat_400Regular",
    }),
  },
});
