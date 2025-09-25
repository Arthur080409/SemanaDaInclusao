import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Titulo from '../components/Titulo';
import Sub from '../components/Sub';
import Texto from '../components/Texto';



export default function SemanaInclusao() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Titulo texto={'Semana da Inclusão de pessoa com Deficiência'} />
      <Sub texto={'Cegueira'}/>
      <Texto texto={'Cegueira é a perda de visão que pode variar desde a ausência total da visão até a percepção de luminosidade e vultos.'}/>
      <Image style={{height: 400, width: 500}} src='https://www.americasoftalmocenter.com/wp-content/uploads/2025/06/468x400-cegueira.png'/>
      <Sub texto={'Dificuldades:'}/>
      <Texto texto={'As dificuldades enfrentadas por pessoas cegas abrangem barreiras físicas (calçadas irregulares, falta de sinalização tátil), acessibilidade de informação e tecnologia (sites e aplicativos inacessíveis, falta de materiais em Braille), e desafios sociais (preconceito, falta de oportunidades de trabalho e discriminação).'}/>
      <Sub texto={'Como incluir:'}/>
      <Texto texto={'Para promover a inclusão de pessoas com cegueira, é essencial comunicar-se diretamente com a pessoa, oferecer ajuda personalizada (sem ser invasivo), descrever o ambiente com detalhes sobre a posição de objetos e desníveis, e garantir o acesso a recursos de acessibilidade como audiodescrição e tecnologias assistivas. Também é importante desmistificar a cegueira, utilizando linguagem respeitosa, reconhecendo a autonomia individual e promovendo um ambiente acolhedor e adaptado. '}/>
      <Texto style={{color: 'red', marginTop: 20}} texto={'A conclusão da inclusão social é a necessidade contínua de ações coordenadas entre governos, empresas e a sociedade civil para garantir que todos, especialmente os mais vulneráveis, tenham direitos e oportunidades iguais, resultando num país mais justo, democrático e sustentável, onde a dignidade humana é valorizada e a participação de todos é efetiva e plena.'}/>
    </View>
    </ScrollView>
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
