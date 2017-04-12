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
  View
} from 'react-native';
import Setup from  './setup';

export default class Index extends Component {
        render() {
            let param={name:'xxx',age:18}
            let {name,age}=param;
            console.log(name);
            console.log(age);
            return (
                  <Setup {...param} />
            );
        }

}




AppRegistry.registerComponent('untitled', () => Index);
