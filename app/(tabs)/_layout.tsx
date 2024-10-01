import { Link, Redirect, Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

export default function Layout() {
  const { hasFinishedOnBoarding } = useUserStore();
  if (!hasFinishedOnBoarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorGreen,
        tabBarShowLabel: false,
      }}
      safeAreaInsets={{ bottom: 10 }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
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
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
