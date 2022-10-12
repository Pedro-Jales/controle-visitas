import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { VisitantesCrudScreen } from '../crud/visitantesCrudScreen'

function VisitantesFeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Crud"
        onPress={() => navigation.navigate('Crud')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function VisitantesScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={VisitantesFeedScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Crud" component={VisitantesCrudScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}