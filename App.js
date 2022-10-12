import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { VisitasScreen } from './screens/feed/visitasScreen'
import { VisitantesScreen } from './screens/feed/visitantesScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('HeroWorudo')}
      />
    </View>
  );
}

function HeroWorudoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#888', fontSize: 18 }}>
        Hero Worudo!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Visitas" component={VisitasScreen} />
        <Tab.Screen name="Visitantes" component={VisitantesScreen} />
        
      
        <Stack.Screen 
          name="HeroWorudo" 
          component={HeroWorudoScreen} 
          options={{ title: 'Hello world!' }}
        />

        
      </Tab.Navigator>
/*
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home" 
          component={HomeScreen}
          options={{
            headerTitle: (props) => <DefTitle/>,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#888"
              />
            ),
          }}
        />

        <Stack.Screen 
          name="HeroWorudo" 
          component={HeroWorudoScreen} 
          options={{ title: 'Hello world!' }}
        />

      </Stack.Navigator>
      */
    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});