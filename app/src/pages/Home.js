import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    spacer: {
      flex: 2
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
          <View style={styles.spacer}></View>
      </View>
    );
  }
}


