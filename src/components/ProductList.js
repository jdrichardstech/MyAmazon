import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ItemDetail } from '../components'
import axios from 'axios'


class ProductList extends Component{
	state={
		items:[]
	}

	componentWillMount(){
		axios.get('https://jdrichardstech-purchaser.herokuapp.com/api/myItems.json')
		.then(response => this.setState({items:response.data}))
		.catch(error => error.message)
	}

	renderItems(){

		return this.state.items.map(item =>
			<ItemDetail key={item.title} item={item} />
		)
	}
	render(){
		return(
			<ScrollView>
				{this.renderItems()}
			</ScrollView>
		)
	}
}

export default ProductList
