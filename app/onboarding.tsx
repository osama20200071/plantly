import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const { toggle } = useUserStore();
  const router = useRouter();
  const onBoardingHandler = () => {
    toggle();
    router.replace("/");
    // so the user can't go back to the onboarding screen
    // we replace our current stack with the home screen
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 15, marginBottom: 12 }}>
        <Button OnClick={onBoardingHandler}>Let me in</Button>
      </View>
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
