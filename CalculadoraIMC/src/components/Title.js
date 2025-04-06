import {Text, StyleSheet} from 'react-native'; //importa os modulos necessários do react-native

const Title = () => { //cria o título da aplicação
    return (
        <Text style={styles.title}>
            Calculadora de IMC
        </Text>
    );
};

const styles = StyleSheet.create({ //estiliza o título
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#02D972',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;//exporta o título