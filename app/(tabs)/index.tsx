import Button from "@/components/Button";
import { PlantCard } from "@/components/PlantlyCard";
import { usePlantStore } from "@/store/plantsStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <Button title="Add Plant" onClick={() => router.navigate("/new")} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },

  contentContainer: {
    padding: 12,
  },
});
