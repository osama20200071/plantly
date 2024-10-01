import { Pressable, StyleSheet, Text, Platform } from "react-native";
import * as Haptics from "expo-haptics";
import { theme } from "@/theme";

type ButtonProps = { onClick: () => void; title: string };

export default function Button({ onClick, title }: ButtonProps) {
  const handlePress = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onClick();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.pressedButton : undefined,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorGreen,
  },
  pressedButton: {
    backgroundColor: theme.colorLeafyGreen,
  },
});
