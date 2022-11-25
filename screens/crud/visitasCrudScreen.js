import { useState } from "react";
import { Text, View, StyleSheet, Pressable, Modal, TextInput, Button } from 'react-native';
import Constants from 'expo-constants'
import axios from 'axios';

export function VisitasCrudScreen({ route, navigation }) {
  const [local, setLocal] = useState([])
  const [horario, setHorario] = useState([])
  const [visitante, setVisitante] = useState([])

  let id = route.params;

  return (
    <View class="container" style={styles.container}>
      <Text>Visitante:</Text>
      <TextInput style={styles.input} onChangeText={(visitante) => setVisitante(visitante)} />

      <Text>Horário:</Text>
      <TextInput style={styles.input} onChangeText={(horario) => setHorario(horario)} />

      <Text>Local:</Text>
      <TextInput style={styles.input} onChangeText={(local) => setLocal(local)} />

      <Button title="Cancelar" onPress={() => navigation.push('Feed')} />
      <Button title="Deletar" onPress={() => {
        DeletarVisita(id);
        navigation.push('Feed')
      }} />
      <Button title="Salvar" onPress={() => {
        NovaVisita({ visitante, horario, local });
        navigation.push('Feed')
      }} />
    </View>
  );
}


function NovaVisita(visita) {
  console.log(visita)
  axios.post("http://10.0.2.2:3000/historico/", visita)
    .catch((error) => { alert(error) })
}

function DeletarVisita(id) {
  axios.delete(`http://10.0.2.2:3000/historico/${id}`)
    .catch((error) => { alert(error) })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    backgroundColor: "#ffffff"
  }
});