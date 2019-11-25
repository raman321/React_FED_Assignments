import React from 'react';
import './ProductList.css';
import Product from './Product';

//import Product from './Product';

class ProductList extends React.Component {

    render() {

        return (
            <div className="ProductList">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product =>
                            <Product key={product.id} id={product.id} productname={product.productname} quantity={product.quantity} price={product.price}>
                            </Product>)}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default ProductList;