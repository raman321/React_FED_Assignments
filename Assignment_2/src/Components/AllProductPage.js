import React from 'react';
import ProductList from './ProductList';
import ProductApi from '../data/ProductApi';

class AllProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    };
    componentDidMount() {

        this.setState({ products: ProductApi.getAllProducts() });
    }

    render() {
        return (
            <div className="AllProductPage">
                <h1 style={{ fontWeight: 27 }}>Products List</h1>
                <ProductList products={this.state.products} />
            </div>
        );
    }

}
export default AllProductPage;
