import { Image, useWindowDimensions } from "react-native";

type PlantlyImageProps = {
  size?: number;
};

export default function PlantlyImage({ size }: PlantlyImageProps) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? Math.min(width / 1.3, 400);

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
