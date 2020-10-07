import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'
import ProductItem from './ProductItem';

class ProductList extends Component {
  state = {
      products: []
  }
  
  componentDidMount(){
      axios
        .get('https://simple-ecommerce-9999.herokuapp.com/api/v1/product')
        .then(response =>{
          this.setState({ products: response.data.data })
        })
  }

  renderProducts(){
    return this.state.products.map(product =>
      <ProductItem product={ product } key={ product.id } />
      )
  }
  
    render(){
    return (
    <View>
      { this.renderProducts() }
    </View>
    );
  }
}

export default ProductList;