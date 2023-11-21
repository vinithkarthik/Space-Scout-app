import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ButtonComp from './src/Components/Common/ButtonComp';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ButtonComp label={'login'} />
      </View>
    </PaperProvider>
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
