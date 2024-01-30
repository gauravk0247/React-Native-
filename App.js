/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

const App =() =>{
  const [name, setName] = useState("Gaurav")

  const user = () =>{
    // name: "Ritik"
    setName("Krishna");
  }
  

  const myFun = ()=>{
    console.warn("This is warnign for you");
  }

  const myList =[
    {
      id: 1,
      name: "Gaurav"
    },
    {
      id: 1,
      name: "Gaurav"
    }
  ]
  return(
    <View style={{flex: 1, alignItems: 'center',  justifyContent: 'center', borderColor: 'red', borderWidth: 2}}>
    <Text style={{fontSize: 30}}>Enter User Name {name}</Text>
    <TextInput placeholder='Enter Your Name'></TextInput>
    <TextInput placeholder='Enter Password'></TextInput>
    {/* <Button title='Press Me'><Button/> */}
    <Button title='Click' onPress={user}/>
    <TouchableHighlight>
      <TextInput style={styles.myButton} onPress={myFun}>LogIn</TextInput>
    </TouchableHighlight>

    {/* <View>
      {
        myList.map((item)=><App item={item}/>)
        // myList.map((item)=>item={item})
      }
    </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  myButton:{
    color: 'red',
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 12,
  }
})


export default App;
