import React from 'react'
import { Text, View, Image, Linking} from 'react-native'
import { Card, CardSection, Button } from '../components/common'

const ProductItem = ({item}) => {
	const {title, image, url } = item
	const { headerContentStyle, headerTextStyle, imageStyle } = styles
	return(
		<Card>
			<CardSection>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>
							{title}
						</Text>
					</View>
			</CardSection>
			<CardSection>
					<Image
					style={imageStyle}
					source={{uri:image}}
					/>
			</CardSection>
			<CardSection>
				<Button onPress={()=>Linking.openURL(url)}>
					<Text>Buy Again</Text>
				</Button>
			</CardSection>
		</Card>
	)
}

const styles={
	headerContentStyle: {
		flexDirection:'column',
		justifyContent:'space-around',
		padding:10
	},
	headerTextStyle: {
		fontSize: 15
	},
	imageStyle: {
	height: 350,
	flex:1,
	marginTop:10,
	marginBottom:10,
	marginLeft:12,
	marginRight:12
}
}

export default ProductItem
