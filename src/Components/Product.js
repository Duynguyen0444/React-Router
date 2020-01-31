import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import ProductItem from './ProductItem';

class Product extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: 'iPhone 11',
        slug: 'iphone',
        price: 999
      }, {
        id: 2,
        name: 'Macbook Pro',
        slug: 'macbook',
        price: 1500
      }, {
        id: 3,
        name: 'Samsung Note 10',
        slug: 'samsung',
        price: 650
      }
    ];
    var {match} = this.props;    
    var url = match.url;    

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });
    var {location} = this.props;
    console.log(location);  
    return (
      <div className="container">
        <h1>Products</h1>
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>          
          {/* ProductItems router */}
          <div className="row">
            {/* Khai báo paragram sử dụng :name */}
            <Route path="/products/:name" component={ProductItem} /> 
          </div>          
        </div>
      </div>
    );
  }
}

export default Product;