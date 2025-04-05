import { Text, StyleSheet } from 'react-native';//importa os modulos necessários do react-native

const Classification = ({ classificacao }) => {//cria a classificação do IMC com o texto
    return (
        <Text style={styles.classificacao}>
            A classificação do seu IMC é: {classificacao}
        </Text>
    );
  
}

const styles = StyleSheet.create({ //estiliza a classificação
    classificacao: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
   
});

export default Classification;//exporta a classificação