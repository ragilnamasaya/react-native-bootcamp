import React, { useState} from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
export default function Register(props) {
   
   const styles = StyleSheet.create({
     
      button: {
        alignItems: "center",
        backgroundColor: "#fc6f03",
        padding: 10,
        borderRadius: 50,
        paddingLeft: 35,
        paddingRight: 35,
      },
      buttonText: {
        color:"white"
      },
      buttonLogin: {
        marginRight:10,
        alignItems: "center",
        backgroundColor: "#fc6f03",
        padding: 10,
        borderRadius: 50,
        paddingLeft: 50,
        paddingRight: 50,
        color:"white"
      },
    
      container: {
        marginTop:240,
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
      },
      inputView:{
        width:"80%",
        backgroundColor:"grey",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText: {
        height:50,
        color:"white"
      },
      buttonWrapper: {
        flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      title: {
         fontSize: 20,
         fontWeight: "bold",
         marginBottom:10
      }
   });
   
   const [fullname, setFullname] = useState("")
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

   const loginhandler = () => { 
      props.login()
   }
   const registerHandler = () => { 
      var user = {
         fullname:fullname,
         username:username,
         password:password
       }
      props.register(user)
   }
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Register Page</Text>
            <View style={styles.inputView} >
  
          <TextInput  
            placeholder="Fullname .."
               placeholderTextColor="white"
               onChangeText={text => setFullname(text)}
               defaultValue={fullname}  
              style={styles.inputText}         
            />
      
        </View>
            <View style={styles.inputView} >
  
          <TextInput  
            placeholder="username .."
               placeholderTextColor="white"
               onChangeText={text => setUsername(text)}
               defaultValue={username}  
              style={styles.inputText}         
            />
      
        </View>
        <View style={styles.inputView}>
        <TextInput  
            placeholder="password .."
               placeholderTextColor="white"
               onChangeText={text => setPassword(text)}
               defaultValue={password}  
              style={styles.inputText}         
            />
  
        </View>
        <View style={styles.buttonWrapper}>
          <View>
          <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={loginhandler}
        >
          <Text  style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
                  style={styles.button}
                  onPress={registerHandler}
        >
              <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
  
   );
  
  }

 