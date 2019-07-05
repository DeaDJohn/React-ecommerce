const initialState = {
    productList: {
        products: [],
        error: null,
        loading: false
    },
    activeProduct: {
        product: [],
        error: null,
        loading: false
    },
    cart: {
        items: [],
        total: 0
    }
}

export default initialState;