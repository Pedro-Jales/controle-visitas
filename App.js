import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MostrarVisitas, VisitasScreen } from './screens/feed/visitasScreen'
import { VisitantesScreen } from './screens/feed/visitantesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  
  // <Tab.Screen name="feed" component={MostrarVisitas} options={{ headerShown: false }}/>
  return (
    <NavigationContainer>{

      <Tab.Navigator>

        <Tab.Screen name="Visitas" component={VisitasScreen} />
        <Tab.Screen name="Visitantes" component={VisitantesScreen} />


      </Tab.Navigator>
    }</NavigationContainer>
  );
}