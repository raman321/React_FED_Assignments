import axios from 'axios';
export default class ProductApi {
    static getAllProducts(cb) {
        axios.get('http://localhost:4000/products')
            .then(response => cb(response.data))
            .catch(error => { throw error });
    }
}
