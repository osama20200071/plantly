import { Pressable, Text } from "react-native";
import React, { ReactNode } from "react";

type ButtonProps = { OnClick: () => void; children: ReactNode };

export default function Button({ OnClick, children }: ButtonProps) {
  return (
    <Pressable
      onPress={OnClick}
      style={{
        backgroundColor: "#252ed2",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 18 }}>{children}</Text>
    </Pressable>
  );
}

// const styles = StyleSheet.create({});
