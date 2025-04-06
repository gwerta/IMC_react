import { StyleSheet, View } from "react-native";
import FormIMC from "./src/components/FormIMC"; //importa o formulário do IMC
import Title from "./src/components/Title"; //importa o título da aplicação

export default function App() { //cria a função principal da aplicação
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}
const styles = StyleSheet.create({ //estiliza a aplicação
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#682D84",
    padding: 16,
  },
});
