import { Image, useWindowDimensions } from "react-native";

type PlantlyImageProps = {
  size?: number;
  imageUri?: string;
};

export default function PlantlyImage({ size, imageUri }: PlantlyImageProps) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? Math.min(width / 1.3, 400);

  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize, borderRadius: 6 }}
    />
  );
}
