import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text  } from 'react-native'
import { Card, CardSection, Input } from './common'


class LoginForm extends Component{
	state = {
		email:'',
		password:'',
		error:'',
		loading:false
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
			</Card>
		)
	}
}

export default LoginForm
