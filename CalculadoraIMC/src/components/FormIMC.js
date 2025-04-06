import React, { useState } from 'react'; //importa o react e o useState
import{ View, TextInput, Button, StyleSheet} from 'react-native'; //realiza as importações
import Result from './Result';
import Classification from './Classification'; //importa o resultado e a classificação do IMC
import IdealWeight from './IdealWeight'; //importa o peso ideal do IMC

const FormIMC = () => { //cria o formulário do IMC
    const [peso, setPeso] = useState(''); //cria as variáveis peso e altura e as inicializa com estado de string vazia
    const [altura, setAltura] = useState('');

    const [imc, setImc] = useState(null); //cria a variável imc e a inicializa com estado nulo

    const [classificacao, setClassificacao] = useState(''); //cria a variável classificacao e a inicializa com estado de string vazia

    const[pesoMinimo, setPesoMinimo] = useState(''); //cria a variável peso minimo e a inicializa com estado de String vazia
    const[pesoMaximo, setPesoMaximo] = useState(''); //cria a variável peso maximo e a inicializa com estado de String vazia

    const calcularIMC = () => {
        if (!peso || !altura) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        if (isNaN(peso) || isNaN(altura)) {
            alert('Por favor, insira valores numéricos válidos.');
            return;
        }
    
        const alturaEmMetros = parseFloat(altura) / 100;
        const imcCalculado = (parseFloat(peso) / (alturaEmMetros * alturaEmMetros)).toFixed(2);
        setImc(imcCalculado);
    };

    const classificacaoIMC = () => { //classifica o IMC
        if (imc < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imc >= 18.5 && imc <= 24.9) {
            setClassificacao('Peso normal');
        } else if (imc >= 25 && imc <= 29.9) {
            setClassificacao('Sobrepeso');
        } else if( imc >= 30 && imc <= 34.9) {
            setClassificacao ('Obesidade grau 1');
        }else if (imc >= 35 && imc <= 39.9) {
            setClassificacao('Obesidade grau 2');
        }else if (imc >= 40) {
            setClassificacao('Obesidade grau 3');
    }
}

    const pesoIdeal = () => { //calcula o peso ideal
        const alturaEmMetros = parseFloat(altura) / 100;
        const pesoMinimoCalculado = (18.5 * alturaEmMetros * alturaEmMetros).toFixed(2);
        const pesoMaximoCalculado = (24.9 * alturaEmMetros * alturaEmMetros).toFixed(2);
        setPesoMinimo(pesoMinimoCalculado);
        setPesoMaximo(pesoMaximoCalculado);
    }
    const calcular = () => {
        calcularIMC(); // Calcula o IMC
    };

    
    React.useEffect(() => {
        if (imc) {
            classificacaoIMC(); // Atualiza a classificação
            pesoIdeal(); // Atualiza o peso ideal
        }
    }, [imc]);

    return (  //retorna o formulário do IMC com os inputs de peso e altura, o botão de calcular e o resultado
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                placeholderTextColor={'#02D972'}
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                placeholderTextColor={'#02D972'}
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button color={'#682D84'} title="Calcular IMC" onPress={calcular} />
            {imc && <Result imc={imc} />}
            {imc && <Classification classificacao={classificacao} />}
            {imc && <IdealWeight pesoMinimo={pesoMinimo} pesoMaximo={pesoMaximo} />}
        </View>
    );
};



const styles = StyleSheet.create({ //estiliza o formulário
    formContainer: {
        padding: 16,
        backgroundColor: '#811FAE',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    input: {
        height: 40,
        color: '#02D972',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: '#682D84',
    },

});


export default FormIMC; //exporta o formulário do IMC