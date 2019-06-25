export default {
  //购物车中商品的总数量
  totalCount (state) {
      return state.cart.reduce((total, item) => {
          return total += item.count
      },0)
  },
  //购物车中商品被选中的数量
  totalIsChecked (state) {
    return state.cart.reduce((totalCount, item) => {
        return totalCount += item.isCheck === true? item.count : 0
    },0)
  },
  //购物车中被选中商品的总价格
  totalPrice (state) {
    return state.cart.reduce((totalCount, item) => {
        return totalCount += item.isCheck === true? item.price * item.count : 0
    },0)
  },
  //判断购物车中是否有商品
  isCartEmpity (state) {
    return state.cart.length === 0
  }

}