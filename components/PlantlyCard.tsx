import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "@/theme";
import { PlantType } from "@/store/plantsStore";
import PlantlyImage from "./PlantlyImage";
import { Link } from "expo-router";

export function PlantCard({ plant }: { plant: PlantType }) {
  // the link component navigates (not push or replace)
  return (
    <Link href={`/plants/${plant.id}`} asChild>
      <TouchableOpacity style={styles.plantCard} activeOpacity={0.8}>
        <PlantlyImage size={100} imageUri={plant.imageUri} />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.plantName}>
            {plant.name}
          </Text>
          <Text style={styles.subtitle}>
            Water every {plant.wateringFrequencyDays} days
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  plantCard: {
    flexDirection: "row",
    shadowColor: theme.colorBlack,
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colorGrey,
  },
});
