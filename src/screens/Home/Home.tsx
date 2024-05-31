import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./HomeStyles";
import React from "react";
import { Participant } from "../../components";

function Home() {
  const participants = [
    "Val",
    "Luna",
    "Leticia",
    "Luana",
    "Liz",
    "Ana",
    "Luiza",
    "Mike",
    "João",
    "José",
    "Joana",
  ];

  const handleParticipantAdd = () => {
    if (participants.includes("Val")) {
      return Alert.alert(
        "Participante existe",
        "Já existe participante na lista com esse nome"
      );
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 28 de maio de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione um participante a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}

export default Home;
