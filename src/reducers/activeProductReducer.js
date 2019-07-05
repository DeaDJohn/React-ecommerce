import{
    FETCH_PRODUCT_INIT,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from '../actions/types';
import initialState from "./initialState";
console.log(initialState.activeProduct);
export default function activeProductReducer (state = initialState.activeProduct, action) {
    switch( action.type){
        case FETCH_PRODUCT_INIT:
            return{
                ...state,
                product: [],
                error: null,
                loading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                error: null,
                product: action.payload,
                loading: false,
            }
        case FETCH_PRODUCT_FAILURE:
            return{
                ...state,
                product: [],
                error:action.payload,
                loading: false
            }
        default:
            return state;
    }
}