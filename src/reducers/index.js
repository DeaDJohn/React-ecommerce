import { combineReducers } from "redux";

import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    productList: productList,
    activeProduct: activeProduct,
    cart: cart
});

export default rootReducer;