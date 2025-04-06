import { Text, StyleSheet } from 'react-native';//importa os modulos necessários do react-native

const IdealWeight = ({ pesoMinimo, pesoMaximo }) => {//cria o texto dos pesos ideais
    return (
        <Text style={styles.pesoIdeal}>
           O seu peso mínimo ideal é: {pesoMinimo} kg
        {'\n'} O seu peso máximo ideal é: {pesoMaximo} kg
        </Text>
    );
  
}

const styles = StyleSheet.create({ //estiliza o peso ideal
    pesoIdeal: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#02D972',
        textAlign: 'center',
        marginTop: 20,
    },
   
});

export default IdealWeight;//exporta os pesos ideais