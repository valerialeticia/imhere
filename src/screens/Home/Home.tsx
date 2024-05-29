import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './HomeStyles'

function Home() {

  const handleParticipantAdd = () => {
    console.log('voce acabou de clicar')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>  
      <Text style={styles.eventDate}>
        Terça, 28 de maio de 2024
      </Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
        /> 

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Home