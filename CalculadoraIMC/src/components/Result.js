import React from 'react';//realiza as importações
import { Text, StyleSheet } from 'react-native';

const Result = ({ imc }) => {//cria o resultado do IMC com o texto
    return (
        <Text style={styles.result}>
            Seu IMC é: {imc}
        </Text>
    );
}

const styles = StyleSheet.create({ //estiliza o resultado
    result: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#02D972',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Result;//exporta o resultado