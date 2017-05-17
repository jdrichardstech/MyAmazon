import React, { Component } from 'react'
import { LoginForm, ProductList} from './components'
import { Header, Spinner, Button, Card, CardSection} from './components/common'
import firebase from 'firebase'
import { View, Text, ScrollView, Image } from 'react-native'



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

	renderContent(){
		switch(this.state.loggedIn){
			case true:
				return(
					<ScrollView>
						<Header headerText="My Amazon Purchases" />
						<Card>
							<CardSection>
								<Image style={styles.imageStyle} source={require("./assets/images/amazon.jpg")} />
							</CardSection>
							<CardSection>
								<Button onPress={() => firebase.auth().signOut()}>
									Log Out
								</Button>
							</CardSection>
							<CardSection>
								<ProductList />
							</CardSection>
						</Card>
					</ScrollView>
				)
			case false:
				return(
					<View>
						<Header headerText="Sign In or SIgn Up" />
						<LoginForm />
					</View>
				)
			default:
			return <Spinner size="large" />
		}
	}
	render(){
		return(
			<ScrollView>
				{this.renderContent()}
			</ScrollView>
		)
	}
}

const styles={
	imageStyle: {
	height: 150,
	flex:3,
	marginTop:10,
	marginBottom:10,
	marginLeft:12,
	marginRight:12
}
}

export default App
