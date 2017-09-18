/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
  SectionList,
} from 'react-native';
import Movies from './src/components/Movies';

export default class myRN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor: '#0F0', fontSize: 40}}>
          Welcome to React Native! chris 🤣
        </Text>
        <TextInput style={{height: 40}}
                   placeholder="Type here to translate!"/>
        <Movies/>
        <Button
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press Me"
        />
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
            <SectionList
              sections={[
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myRN', () => myRN);
