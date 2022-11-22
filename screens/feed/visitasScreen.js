import { Button, FlatList, Text, View, Pressable, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import Constants from 'expo-constants';

import { VisitasCrudScreen } from '../crud/visitasCrudScreen'
import axios from 'axios';

function VisitasFeedScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NovaVisita navigation={navigation} />
      <MostrarVisitas navigation={navigation} />
    </SafeAreaView>
  );
}

function NovaVisita({ navigation }) {
  return (
    <Button
      style={styles.botao}
      title="Nova visita"
      onPress={() => navigation.push('Crud')}
    />
  );
}

function MostrarVisitas({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://10.0.2.2:3000/historico/")
      .then((response) => { setData(response.data) })
      .catch((error) => { alert(error) })
      .finally(() => setLoading(false));
  }, []);

  return <SafeAreaView style={styles.container}>
    {isLoading ? <ActivityIndicator /> :
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              style={styles.visita}
              onPress={() =>
                navigation.push('Crud', item.id)
              }>
              <Text>Nome: {(item.visitante)}</Text>
              <Text>Local: {(item.local)}</Text>
              <Text>Horário: {(item.horario)}</Text>
            </Pressable>
          )}
        />
      </View>
    }
  </SafeAreaView>
}

const Stack = createNativeStackNavigator();

export function VisitasScreen({ navigation }) {
  // listarVisitantes()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={VisitasFeedScreen} options={{ headerShown: false }}  onPress={() => navigation.push('Feed')}/>
      <Stack.Screen name="Crud" component={VisitasCrudScreen} options={{ headerShown: false }} onPress={() => navigation.push('Crud')}/>
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
  }
});