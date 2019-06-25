export default {
    //数量减少
    countDecrement (state, id) {
        state.cart = state.cart.map(cart => {
            if (cart.id === id) {
                cart.count --
            }
            return cart
        })
    },
    //数量增加
    countIncrement (state, id) {
        state.cart = state.cart.map(cart => {
            if (cart.id === id) {
                cart.count ++
            }
            return cart
        })
    },
    toggleIsCheck (state, id) {
        state.cart = state.cart.map(cart => {
            if (cart.id === id) {
                cart.isCheck = !cart.isCheck
            }
            return cart
        })
    },
    addToCart (state, product) {
        let isExit = state.cart.some(cart => {
            return cart.id === product.id
        })
        const obj = {
            count: 1,
            isCheck: true
        }
        let {title,price,image, id} = product,
        obj2 = {title,price,image, id}
        Object.assign(obj,obj2)
        if (isExit) {
            state.cart.map(cart => {
                if (cart.id === obj.id) {
                    cart.count++
                }
                return cart
            })
        } else {
            state.cart.push(obj)
        }
    }
}