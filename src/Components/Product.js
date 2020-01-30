import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Product extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: 'iPhone 11',
        price: 999
      }, {
        id: 2,
        name: 'Macbook Pro',
        price: 1500
      }, {
        id: 3,
        name: 'iPhone 8 Plus',
        price: 650
      }
    ];
    var {match} = this.props;
    console.log(match)

    var result = products.map((product, index) => {
      return (
        <NavLink to="" key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    return (
      <div className="container">
        <h1>Products</h1>
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>
      </div>
    );
  }
}

export default Product;