import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
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
    console.log("voce acabou de clicar");
  };

  const handleParticipantRemove = (name: string) => {
    console.log(`vc clicou em remover o participante ${name}`);
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
