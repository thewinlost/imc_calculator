/*jshint esversion:8*/
import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import MeuEstilo from "./src/meuestilo";

export default class Calculadora extends React.Component {
  state = {
    peso: 0.0,
    altura: 0.0,
    resultado: 0.0,
  };
  atualizaPeso = (number) => {
    this.setState({ peso: number });
  };
  atualizaAltura = (number) => {
    this.setState({ altura: number });
  };
  calculo() {
    this.state.resultado =
      parseFloat(this.state.peso) /
      (parseFloat(this.state.altura) * parseFloat(this.state.altura));
    if (this.state.resultado <= 18) {
      alert("seu imc é:" + this.state.resultado + "ta se alimentando?");
    } else if (this.state.resultado >= 30) {
      alert("oi gordinho, seu imc é:" + this.state.resultado);
    } else {
      alert(
        "seu imc é:" +
          this.state.resultado +
          "estás nem gordo, nem magro, just basic"
      );
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={MeuEstilo.input}
          underlineColorAndroid="transparent"
          placeholder="Digite o peso"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaPeso}
          keyboardType="numeric"
        />

        <TextInput
          style={MeuEstilo.input}
          underlineColorAndroid="transparent"
          placeholder="Digite a altura"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.atualizaAltura}
          keyboardType="numeric"
        />

        <TouchableOpacity
          onPress={() =>
            this.calculo(
              this.state.peso,
              this.state.altura,
              this.state.resultado
            )
          }
        >
          <Text style={MeuEstilo.submitButtonText}> continhas </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
