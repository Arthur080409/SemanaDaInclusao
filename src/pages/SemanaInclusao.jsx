import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from '../components/Titulo';
import Sub from '../components/Sub';


export default function SemanaInclusao() {
  return (
    <View style={styles.container}>
      <Titulo texto={'Semana da Inclusão de pessoa com Deficiência'} />
      <Sub texto={'como incluir'}/>
    </View>
    
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
