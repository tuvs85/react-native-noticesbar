/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NoticesBar from './react-native-noticesbar'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    data: [
      {
        name: '这是一个很长很长的标题这是一个很长很长的标题这是一个很长很长的标题这是一个很长很长的标题这是一个很长很长的标题',
      },
      {
        name: '这是一个很长很长的标题这是一个很长很长的标题这是一个很长很长的标题',
      },
      {
        name: '这是一个很长很长的标题2这是一个很长很长的标题2',
      },
      {
        name: '这是一个很长很长的标题3这是一个很长很长的标题3这是一个很长很长的标题3',
      },
    ]
  }
  render() {
    const { data } = this.state
    return (
      <SafeAreaView>
        <View style={{ height: 40,borderColor: 'red',borderBottomWidth: 1,borderTopWidth: 1 }}>
          <NoticesBar
            icon={<Text style={{lineHeight:40}}>图标</Text>}
            showFieldName="name"
            onPress={item => {
              //事件
            }}
            enableAnimation={true}
            data={data}
            delay={2500}
            duration={1000}
            scrollHeight={40}
            scrollStyle={{ alignItems: 'flex-start' }}
            textStyle={{ color: '#a1a7b9', fontSize: 13 }}
          />
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
