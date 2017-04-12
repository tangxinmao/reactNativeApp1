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
    TouchableHighlight,
    View
} from 'react-native';

export default class Setup extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    componentWillMount(){
    console.log('componentWillMount')
    }
   componentDidMount()
   {
       console.log('componentDidMount')
   }
    shouldComponentUpdate(nextProps,nextState){
       console.log('shouldComponentUpdate');
       return true;
   }
   componentWillUpdate(){
       console.log('componentWillUpdate')
   }
   componentDidUpdate(){
       console.log('componentDidUpdate')
   }
    componentWillReceiveProps( nextProps){
        console.log('componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
   render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.count}
                </Text>
                <TouchableHighlight  onPress={()=>{
                    console.log('onpress');
                    this.setState({
                        count:this.state.count+1
                    });
                }}>
                    <Text>Button</Text>

                </TouchableHighlight>

                <Text style={styles.instructions} >
                    {this.props.name}
                </Text>
            </View>
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
        backgroundColor:'red',
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
