[react-native-noticebar gitHub链接](https://github.com/tuvs85/react-native-noticebar)
# react-native-noticebar
react-native竖向滚动通知栏（公告栏）

### install 使用
```npm
$ npm install react-native-noticebar
```
```yarn
$ yarn add react-native-noticebar
```

### use 使用
#### es5
```
//全部引用
const NoticeBar = require('react-native-noticebar')
```
#### es6
```
//全部引用
import noticebar from 'react-native-noticebar'
```

### 示例:
```
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import noticebar from './react-native-noticebar'

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
    //icon: 如果没有icon 不填或者null即可 React.Element格式
    //showFieldName: 主要作用于json字段显示用 因为每个项目各不同，有的系统是title，有的系统是name 为了方便 直接定义出来设置
    return (
      <SafeAreaView>
        <View style={{ height: 40,borderColor: 'red',borderBottomWidth: 1,borderTopWidth: 1 }}>
          <noticebar
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

```
![][1]

[1]: ./image/react-native-noticebar.gif

MIT

如果问题请联系 tuvs85@gmail.com