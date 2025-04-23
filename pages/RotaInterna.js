import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Tela2 from './Tela2';
import Tela3 from './Tela3';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'YouTube') {
            iconName = 'logo-youtube';
          } else if (route.name === 'Vimeo') {
            iconName = 'logo-vimeo';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="YouTube" component={Tela2}  options={{ headerShown: false }} />
      <Tab.Screen name="Vimeo" component={Tela3} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
