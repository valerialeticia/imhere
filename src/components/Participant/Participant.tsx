import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ParticipantStyles";

type Props = {
  name: string;
  onRemove: () => void;
};

function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

export { Participant };
