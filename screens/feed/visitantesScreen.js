import { Button, FlatList, Text, Pressable, SafeAreaView, ActivityIndicator, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import Constants from 'expo-constants';

import { VisitantesCrudScreen } from '../crud/visitantesCrudScreen'
import axios from 'axios';


function VisitantesFeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NovoVisitante navigation={navigation} />
      <MostrarVisitantes navigation={navigation} />
    </View>
  );
}

function NovoVisitante({ navigation }) {
  return (
    <Button
      style={styles.botao}
      title="Novo Visitante"
      onPress={() => navigation.push('Crud')}
    />
  );
}

function MostrarVisitantes({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://10.0.2.2:3000/visitantes/")
      .then((response) => { setData(response.data) })
      .catch((error) => { alert(error) })
      .finally(() => setLoading(false));
  }, []);

  // keyExtractor={({ item }) => id}
  return <SafeAreaView style={styles.container}>
    {isLoading ? <ActivityIndicator /> :
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              style={styles.visita}
              onPress={() => {
                navigation.navigate('Crud', item.id)
              }}>
              <Text>Nome: {(item.name)}</Text>
            </Pressable>
          )}
        />
      </View>
    }
  </SafeAreaView>
}

const Stack = createNativeStackNavigator();

export function VisitantesScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={VisitantesFeedScreen} options={{ headerShown: false }} onPress={() => navigation.push('Feed')}/>
      <Stack.Screen name="Crud" component={VisitantesCrudScreen} options={{ headerShown: false }} onPress={() => navigation.push('Crud')} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingLeft: 10,
    paddingRight: 10,
  },
  botao: {
    marginTop: 40,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  visita: {
    padding: 10,
    backgroundColor: "#a0deda",
    marginBottom: 10,
    zIndex: 0.5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  }
});