import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxTopo} />
        <View style={styles.row}>
          <View style={styles.column} />
          <View style={styles.column} />
          <View style={styles.column} />
        </View>
        <View style={styles.row}>
          <View style={styles.column} />
          <View style={styles.column} />
          <View style={styles.column} />
        </View>
        <View style={styles.row}>
          <View style={styles.column} />
          <View style={styles.column} />
          <View style={styles.column} />
        </View>
        <View style={styles.boxRodape} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#472e99',
  },
  row: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  column: {
    margin: 10,
    width: 80,
    height: 80,
    backgroundColor: 'steelblue',
  },
  boxTopo: {
    marginTop: 10,
    width: 300,
    height: 80,
    backgroundColor: 'yellow',
  },
  boxRodape: {
    marginTop: 0,
    width: 300,
    height: 80,
    backgroundColor: 'white',
  },
});
