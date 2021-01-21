import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import Note from './ToDoItems';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
      status:true
    };
  }

  ClearAllNotes = (key) =>{
 
  if(this.state.status == true)
  {
    this.state.noteArray.splice(key);
    this.setState({ noteArray: this.state.noteArray });
  }
}

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>My TODO Items</Text>
        </View>

        <View style={styles.textEnterContainer}>
          <View style={styles.textEnter}>

            <TextInput
              style={styles.textInput}
              onChangeText={(noteText) => this.setState({ noteText })}
              value={this.state.noteText}
              maxLength={25}
              placeholder="Type here..."
              placeholderTextColor="#adadad"
              underlineColor="tranparent"></TextInput>

            <TouchableOpacity
              onPress={this.addNote.bind(this)}
              style={styles.addButton}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>

          </View>
        </View>

        {
        this.state.status ? 
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView> : null
        }

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={this.ClearAllNotes}
            style={styles.footerContent}>
            <MaterialIcons name="clear-all" size={32} color="white" />
            <Text style={styles.deleteAll}>Clear All</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      this.state.noteArray.push({
        note: this.state.noteText,
      });

      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: '#6190E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  },

  textEnterContainer: {
    alignItems: 'center',
  },
  textEnter: {
    width: 300,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    borderColor: '#6190E6',
    borderWidth: 3,
    borderRadius: 5,
    height: 40,
    width: 250,
    padding: 10,
  },
  addButton: {
    position: 'absolute',
    backgroundColor: '#6190E6',
    borderRadius: 5,
    width: 45,
    height: 40,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
  },
  footerContainer: {
    position: 'fixed',
    bottom: 0,
    width: 320,
    backgroundColor: '#6190E6',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAll: {
    color: 'white',
    fontSize: 12,
    paddingTop: 0,
  },
});
