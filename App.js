import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { VisitasScreen } from './screens/feed/visitasScreen'
import { VisitantesScreen } from './screens/feed/visitantesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>{

      <Tab.Navigator>

        <Tab.Screen name="Visitas" component={VisitasScreen} />
        <Tab.Screen name="Visitantes" component={VisitantesScreen} />

      </Tab.Navigator>
    }</NavigationContainer>
  );
}