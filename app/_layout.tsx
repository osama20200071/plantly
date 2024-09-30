import { Stack } from "expo-router";

export default function Layout() {
  console.log("root layout : ");
  return (
    <Stack
      screenOptions={{
        animation: "fade",
        animationDuration: 500,
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
