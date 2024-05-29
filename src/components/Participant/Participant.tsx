import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ParticipantStyles";

function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Val</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

export { Participant };
