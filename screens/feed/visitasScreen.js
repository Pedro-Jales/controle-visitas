import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { VisitasCrudScreen } from '../crud/visitasCrudScreen'

function VisitasFeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ola</Text>
      <Button 
        title="Go to Crud"
        onPress={() => navigation.navigate('Crud')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function VisitasScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={VisitasFeedScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Crud" component={VisitasCrudScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}