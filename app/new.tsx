import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { theme } from "@/theme";
import PlantlyImage from "@/components/PlantlyImage";
import PlantlyInput from "@/components/PlantlyInput";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "@/components/Button";
import { usePlantStore } from "@/store/plantsStore";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const [imageUri, setImageUri] = useState("");
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const addPlant = usePlantStore((state) => state.addPlant);
  const router = useRouter();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`,
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
      );
    }

    console.log("Adding plant", name, days);
    addPlant(name, Number(days), imageUri);
    router.navigate("/");
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    console.log(JSON.stringify(result, null, " "));

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);

      const imageUri = result.assets[0].uri;
      // imageUri.split("/").at(-1));
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.7}
        onPress={handleImagePick}
      >
        <PlantlyImage imageUri={imageUri} />
      </TouchableOpacity>
      <View style={styles.inputsContainer}>
        <PlantlyInput
          label="Name"
          placeholder="Enter plant name"
          value={name}
          onChangeText={setName}
        />
        <PlantlyInput
          label="Watering Frequency (every x days )"
          placeholder="E.g. 7"
          value={days}
          onChangeText={setDays}
          keyboardType="number-pad"
        />
      </View>
      <Button title="Add plant" onClick={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  inputsContainer: {
    justifyContent: "center",
    gap: 12,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
});
