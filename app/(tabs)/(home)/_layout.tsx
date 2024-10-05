import { theme } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  console.log("third layout");
  return (
    <Stack
      screenOptions={{
        animation: "fade",
        animationDuration: 500,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={25} style={{ marginRight: 18 }}>
                <AntDesign
                  name="pluscircleo"
                  size={26}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: theme.colorLeafyGreen,
        }}
      />
    </Stack>
  );
}
