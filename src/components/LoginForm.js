import React, { Component } from 'react'
import firebase from 'firebase'
import { Text, ScrollView, View  } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'


class LoginForm extends Component{
	state = {
		email:'',
		password:'',
		error:'',
		loading:false
	}


	onButtonPress(){
		const { email, password, error } = this.state
		this.setState({
			loading:true,
			error:''
		})

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(this.onLoginFail.bind(this))
	}

	onLoginSuccess(){
		this.setState({
			loading:false,
			email:'',
			password:'',
			error:''
		})
	}

	onLoginFail(){
		this.setState({
			error:"Authentication Failed",
			loading: false
		})
	}

	renderButton(){
		if(this.state.loading){
			return <Spinner size="small" />
		}
		return(
			<Button onPress={this.onButtonPress.bind(this)}>
				Log In
			</Button>
		)
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input
						placeholder="user@me.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({email})}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({password})}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>{this.state.error}</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles={
	errorTextStyle:{
		fontSize:30,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm
