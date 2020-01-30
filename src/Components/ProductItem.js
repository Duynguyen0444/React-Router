import React, {Component} from 'react';

class ProductItem extends Component {
  render() {
    var {match} = this.props;
    // Props match lấy từ component Product
    var name = match.params.name;    

    return (
      <div>
        <h1>Product details</h1>
        <h2>{name}</h2>
      </div>
    );
  }
}

export default ProductItem;