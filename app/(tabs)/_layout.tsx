import { Redirect, Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

export const unstable_settings = {
  initialRouteName: "(home)",
};

export default function Layout() {
  console.log("second layout");
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
        name="(home)"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="leaf" size={size} color={color} />
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
