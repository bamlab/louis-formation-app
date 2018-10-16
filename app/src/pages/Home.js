import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      flex: 1
    },
    welcomeContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    welcomeTitle: {
      color: "#49A698",
      fontSize: 30
    },
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    input: {
      height :40,
      backgroundColor: "beige",
      paddingHorizontal: 60
    },
    spacer: {
      flex: 1
    }
  });

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
          <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>
              Bienvenue
              </Text>
            </View>
          <View style={styles.inputContainer}>
              <TextInput
              style={styles.input}
              placeholder="Entrez votre prénom"
              underlineColorAndroid={'transparent'}/>
          </View>
          <View style={styles.spacer}></View>
      </View>
    );
  }
}


