import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Components/Login/Login';
import StorageSpaceList from './src/Components/StorageSpaceList/StorageSpaceList';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#987654',
    secondary: 'yellow',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="StorageSpaceList" component={StorageSpaceList} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
