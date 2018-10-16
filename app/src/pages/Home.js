import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import colors from '../theme/index';

const styles = StyleSheet.create({
    page: {
      backgroundColor: colors.background,
      flex: 1
    },
    welcomeContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    welcomeTitle: {
      color: colors.primary,
      fontSize: 30
    },
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    input: {
      height :40,
      backgroundColor: colors.inputBackground,
      paddingHorizontal: 20,
      flex: 1,
      marginHorizontal: 10,
      textAlign: "center"
    },
    button: {
      paddingHorizontal: 20,
      borderRadius:10,
      backgroundColor: colors.primary,
      // IOS Shadow
      shadowColor: colors.primary,
      shadowOpacity: 1,
      shadowRadius: 5,
      // Android shadow
      elevation: 4,
      flex: 1,
      height: 40,
      justifyContent: "center",
      marginHorizontal: 10
    },
    buttonText: {
      color: colors.accent,
      textAlign: "center"
    },
    spacer: {
      flex: 1
    }
  });

export default class Home extends Component {
 
  onPress = () => console.log('Bonjour pressed')

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
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>Bonjour !</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.spacer}></View>
      </View>
    );
  }
}


