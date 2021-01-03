import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native'
import { useState} from "react"
import { InputText } from '../../components'
import { connect } from 'react-redux'


const Login = (props) => {

   var initialValue = {
      username: "",
      password:""
   }

   const [login, setLogin] = useState(initialValue)

   const onChangeText = (name, value) => { 
      setLogin({...login, [name]:value})
   }

   const loginHandler = () => { 
      if (login.username && login.password) {
         UserRef.where("username", "==", login.username).where("password","==",login.password).get().then(querySnapshot => { 
            if (querySnapshot.size === 0) {
               Alert.alert("Gagal", "Login Gagal..!!")
            } else { 
               Alert.alert("Sukses", "Login Berhasil..!!")
               props.loginUser(login);
            }
       }).catch(err => { 
          Alert.alert("Error", "error")
       })
    } else { 
       Alert.alert("Error", "Fullname, Username dan Password tidak boleh kosong..!!")
    }
   }


   return (
      <View style={styles.page}>
         <Text style={styles.header}>Login Page</Text>
         <View style={styles.line}></View>
         <View style={styles.inputContainer}>
            <InputText
               label="Username"
               placeholder="Input Username ..."
               value={login.username}
               onChaneText={onChangeText}
                name="username"
            />
            <InputText
               label="Password"
               placeholder="Input Password ..."
               value={login.password}
               onChaneText={onChangeText}
               name="password"
               isPassword={true}
            />
            <TouchableOpacity style={styles.buttonContainer}
               onPress={loginHandler}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          
            <Text style={styles.question}>You don't have account ?
            <Text style={styles.registerButton}
                  onPress={()=>props.navigation.navigate("Register")}
               > Register</Text>
            </Text>
         
         </View>
         
      </View>
   )
}

const mapStateToProps = (state) => ({
   userLogin: state.AuthReducer.user,
   isLogin: state.AuthReducer.isLogin,
})

const mapDispatchToProps = (dispatch) => ({
   loginUser: (user) => dispatch({ type: "LOGIN", payload: user, isLogin: true }),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
   pages: {
      flex: 1,
      margin: 30,
      padding:30
   },
   header: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop:150
   },
   line: {
      borderWidth: 1,
      borderColor: "black",
      marginTop: 10,
      marginHorizontal:30
   },
   inputContainer: {
      marginHorizontal: 30,
      paddingTop:30
   },
   label: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 15,
      marginBottom:-15
   },
   buttonContainer: {
      marginTop:15,
      backgroundColor: "black",
      padding: 10,
      borderRadius:5
   },
   buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      textAlign:"center"
   },
   question: {
      textAlign: "center",
      marginTop:30
   },
   registerButton: {
      fontWeight: "bold",
      color:"blue"
   }

})