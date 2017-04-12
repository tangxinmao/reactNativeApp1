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
            return (
                  <Setup name="tangxinmao" />
            );
        }

}




AppRegistry.registerComponent('untitled', () => Index);
