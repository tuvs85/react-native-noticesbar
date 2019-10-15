[react-native-noticesbar gitHub链接](https://github.com/tuvs85/react-native-noticesbar)
# react-native-noticesbar
react-native竖向滚动通知栏（公告栏）

### install 使用
```npm
$ npm install react-native-noticesbar
```
```yarn
$ yarn add react-native-noticesbar
```

### use 使用
#### es5
```

const NoticesBar = require('react-native-noticesbar')
```
#### es6
```

import NoticesBar from 'react-native-noticesbar'
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
    //icon: 如果没有icon 不填或者null即可 React.Element格式
    //showFieldName: 主要作用于json字段显示用 因为每个项目各不同，有的系统是title，有的系统是name 为了方便 直接定义出来设置
    return (
      <SafeAreaView>
        <View style={{ height: 40,borderColor: 'red',borderBottomWidth: 1,borderTopWidth: 1 }}>
          <NoticesBar
            icon={<Text style={[GlobalStyles.color1175e0, { position:'absolute',lineHeight: 40, width: 40}]}/>}
            //如果有icon则建议调整定位功能使用
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
            paddingLeft={40}
            //增加图标宽度字段使用
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
## update
### v0.0.1
```
1、组件上传
```
### v0.0.2
```
1、调整一些bug，
```
### v0.0.3
```
1、调整组件内所有样式，
2、增加padding位置,如果无icon是可不用， 有icon是设置icon宽度即可，或者自己根据需求修改
3、增加proptypes检验字段类型
```
### v0.0.4
```
1、删除错误引用包
2、删除无用文件
```
![演示图][1]

[1]: ./image/react-native-noticesbar.gif

MIT

如果问题请联系 tuvs85@gmail.com