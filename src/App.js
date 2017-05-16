import React, { Component } from 'react'
import { LoginForm } from './components'
import { Header } from './components/common'
import firebase from 'firebase'
import { View, Text } from 'react-native'



class App extends Component{
	state = {
		loggedIn:null
	}

	componentWillMount(){

		firebase.initializeApp(	{
    apiKey: "AIzaSyCaiQSDGkPd9VR4uoYtkD4O8k6CIB-06ao",
    authDomain: "authorize-4d824.firebaseapp.com",
    databaseURL: "https://authorize-4d824.firebaseio.com",
    projectId: "authorize-4d824",
    storageBucket: "authorize-4d824.appspot.com",
    messagingSenderId: "675760217945"
  })

		firebase.auth().onAuthStateChanged((user)=>{
			if(user){
				this.setState({loggedIn:true})
			}else{
				this.setState({loggedIn:false})
			}
		})
	}
	render(){
		return(

			<View>
				<Header headerText = "Sign In Or Sign Up" />
				<LoginForm />
			</View>
		)
	}
}

export default App
