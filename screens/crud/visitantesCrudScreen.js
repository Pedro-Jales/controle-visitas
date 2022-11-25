import { useState } from "react";
import { Text, View, StyleSheet, Pressable, Modal, TextInput, Button } from 'react-native';
import Constants from 'expo-constants'
import axios from 'axios';


export function VisitantesCrudScreen({ route, navigation }) {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [cpf, setCpf] = useState([])
  const [telefone, setTelefone] = useState([])

  let id = route.params;

  return (
    <View class="container" style={styles.container}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} onChangeText={(name) => setName(name)} />

      <Text>email:</Text>
      <TextInput style={styles.input} onChangeText={(email) => setEmail(email)} />

      <Text>cpf:</Text>
      <TextInput style={styles.input} onChangeText={(cpf) => setCpf(cpf)} />

      <Text>telefone:</Text>
      <TextInput style={styles.input} onChangeText={(telefone) => setTelefone(telefone)} />

      <Button title="Cancelar" onPress={() => navigation.push('Feed')} />
      <Button title="Deletar" onPress={() => {
        DeletarVisitante(id);
        navigation.push('Feed')
      }} />
      <Button title="Salvar" onPress={() => {
        NovoVisitante({ name, email, cpf, telefone });
        navigation.push('Feed')
      }} />

    </View>
  );
}

function NovoVisitante(visitante) {
  console.log(visitante)
  axios.post("http://10.0.2.2:3000/visitantes/", visitante)
    .catch((error) => { alert(error) })
}

function DeletarVisitante(id) {
  axios.delete(`http://10.0.2.2:3000/visitantes/${id}`)
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