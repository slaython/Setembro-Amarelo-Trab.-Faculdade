import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Card style={{marginBottom: 10, backgroundColor: '#34363b', marginTop: 20}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', margin: 20, marginBottom: 0, fontSize: 25, color: '#fcd703'}}>
          SETEMBRO AMARELO
        </Text>
        <Text style={{fontWeight: '', textAlign: 'center', margin: 20, marginTop: 0, fontSize: 15, color: '#fff'}}>
          Programa de prevenção ao suicídio
        </Text>
        </Card>

        <Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcd703'}}>
          <Image style={{width: 359, height: 200, }} source={require('./assets/sa1.webp')}/>
        </Card>
        
        <Text style={{
          fontWeight: 'bold', 
          textAlign: 'left', 
          padding: 20, 
          paddingBottom: 5, 
          paddingStart: 0, 
          fontSize: 16, 
          backgroundColor: '#fcd703',
        }}>
          A campanha Setembro Amarelo® salva vidas! 
        </Text>
        <Text style={{
          fontSize: 14, 
          backgroundColor: '#fcd703', 
          textAlign: 'justify', 
          paddingBottom: 20,
        }}>
          Em 2013, Antônio Geraldo da Silva, presidente da ABP, deu notoriedade e colocou no calendário nacional a campanha internacional Setembro Amarelo®. E, desde 2014, a Associação Brasileira de Psiquiatria – ABP em parceria com o Conselho Federal de Medicina – CFM divulgam e conquistam parceiros no Brasil inteiro com essa linda campanha. O dia 10 deste mês é, oficialmente, o Dia Mundial de Prevenção ao Suicídio, mas a iniciativa acontece durante todo o ano. Atualmente, o Setembro Amarelo® é a maior campanha anti estigma do mundo! Em 2022, o lema é “A vida é a melhor escolha!” e diversas ações já estão sendo desenvolvidas.
        </Text>

        <Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcd703'}}>
          <Image style={{width: 359, height: 400, }} source={require('./assets/sa3.jpg')}/>
        </Card>

        <Text style={{
          fontWeight: 'bold', 
          textAlign: 'left', 
          padding: 20, 
          paddingBottom: 5, 
          paddingStart: 0, 
          fontSize: 16, 
          backgroundColor: '#fcd703',
        }}>
          Setembro Amarelo® 2022: a vida é a melhor escolha! 
        </Text>
        <Text style={{
          fontSize: 14, 
          backgroundColor: '#fcd703', 
          textAlign: 'justify', 
          paddingBottom: 20,
        }}>
          Todos nós devemos atuar ativamente na conscientização da importância que a vida tem e ajudar na prevenção do suicídio, tema que ainda é visto como tabu. É importante falar sobre o assunto para que as pessoas que estejam passando por momentos difíceis e de crise busquem ajuda e entendam que a vida sempre vai ser a melhor escolha.Quando uma pessoa decide terminar com a sua vida, os seus pensamentos, sentimentos e ações apresentam-se muito restritivos, ou seja, ela pensa constantemente sobre o suicídio e é incapaz de perceber outras maneiras de enfrentar ou de sair do problema. Essas pessoas pensam rigidamente pela distorção que o sofrimento emocional impõe. 
        </Text>

        <Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcd703'}}>
          <Image style={{width: 359, height: 250, }} source={require('./assets/sa4.jpg')}/>
        </Card>

        <Text style={{
          fontWeight: 'bold', 
          textAlign: 'left', 
          padding: 20, 
          paddingBottom: 5, 
          paddingStart: 0, 
          fontSize: 16, 
          backgroundColor: '#fcd703',
        }}>
          Dados sobre suicídio
        </Text>
        <Text style={{
          fontSize: 14, 
          backgroundColor: '#fcd703', 
          textAlign: 'justify', 
          paddingBottom: 20,
        }}>
          O suicídio é um importante problema de saúde pública, com impactos na sociedade como um todo. Segundo dados da Organização Mundial de Saúde - OMS, todos os anos, mais pessoas morrem como resultado de suicídio do que HIV, malária ou câncer de mama - ou guerras e homicídios. Entre os jovens de 15 a 29 anos, o suicídio foi a quarta causa e morte depois de acidentes no trânsito, tuberculose e violência interpessoal. Trata-se de um fenômeno complexo, que pode afetar indivíduos de diferentes origens, sexos, culturas, classes sociais e idades. 
        </Text>

        <Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcd703'}}>
          <Image style={{width: 359, height: 500, }} source={require('./assets/sa5.jpg')}/>
        </Card>

        <Text style={{
          fontWeight: 'bold', 
          textAlign: 'left', 
          padding: 20, 
          paddingBottom: 5, 
          paddingStart: 0, 
          fontSize: 16, 
          backgroundColor: '#fcd703',
        }}>
          Participe da campanha!
        </Text>
        <Text style={{
          fontSize: 14, 
          backgroundColor: '#fcd703', 
          textAlign: 'justify', 
          paddingBottom: 20,
        }}>
          Esta é uma página completa com material disponível para auxiliar a todos. Assim sendo, aproveite os nossos materiais e participe da nossa campanha durante todo o ano. São diversos materiais de uso público: Diretrizes para a Divulgação e Participação da Campanha Setembro Amarelo®, materiais online para download, a Cartilha Suicídio Informando para Prevenir e todo o material para a imprensa. Participe conosco, divulgue a campanha entre os seus amigos e nos ajude a salvar vidas!
        </Text>

        <Text style={{fontSize: 9, textAlign: 'center'}}>2022 © Slaython Gleyson, email: dev@slaython.com</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fcd703',
    padding: 8,
  },
});
