import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: "" };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    const imc = this.state.massa / (this.state.altura * this.state.altura);
    const state = this.state;
    state.resultado = imc;

    if (state.resultado < 16) {
      state.resultadoText = "Magreza Grave";
    } else if (state.resultado < 17) {
      state.resultadoText = "Magreza Moderada";
    } else if (state.resultado < 18.5) {
      state.resultadoText = "Magreza Leve";
    } else if (state.resultado < 25) {
      state.resultadoText = "Saudável";
    } else if (state.resultado < 30) {
      state.resultadoText = "Sobrepeso";
    } else if (state.resultado < 35) {
      state.resultadoText = "Obesidade Grau I";
    } else if (state.resultado < 40) {
      state.resultadoText = "Obesidade Grau II";
    } else {
      state.resultadoText = "Obesidade Grau III";
    }

    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput
            placeholder="Massa"
            keyboardType="numeric"
            onChangeText={massa => {
              this.setState({ massa });
            }}
            style={styles.input}
          />
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            onChangeText={altura => {
              this.setState({ altura });
            }}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 35 }]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  entradas: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "gray",

  },
  button: {
    backgroundColor: "#89ffa5"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold"
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15
  }
});
