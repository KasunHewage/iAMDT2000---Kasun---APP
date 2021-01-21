import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const data = [{}];

export default class Note extends React.Component {
  render() {
    return (

      <View style={styles.noteContainer}>

        <RadioButtonRN
          style={styles.radioBtn}
          data={data}
          selectedBtn={(e) => console.log(e)}
          box={false}
          circleSize={14}
          icon={<Icon name="check-circle" size={22} color="#49AF41" />}
        />

        <View key={this.props.keyval} style={styles.note}>

          <Text style={styles.noteText}>{this.props.val.note}</Text>

          <TouchableOpacity
            onPress={this.props.deleteMethod}
            style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>
              <AntDesign name="delete" size={16} color="white" />
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderWidth: 3,
    width: 300,
    borderColor: '#ededed',
    borderRadius: 10,
    marginBottom: 10,
  },
  noteText: {
    paddingLeft: 22,
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6190E6',
    padding: 10,
    top: 10,
    right: 10,
    borderRadius: 5,
  },
  noteDeleteText: {
    color: 'white',
  },
  radioBtn: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    left: 38,
    top: 10,
  },
});
