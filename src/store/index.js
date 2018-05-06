import Vue from "vue"
// 引入vuex插件
import Vuex from "vuex";
Vue.use(Vuex);

// 需要将购物车信息存放在localstorage中

// 从localstorage中读取购物车信息
function readCartsFromStorage() {
  var cartStr = localStorage.getItem('cart-info');
  if (cartStr == null || cartStr.trim() == "") {
    return cartStr = [];
  } else {
    return JSON.parse(cartStr);
  }
}
// 把购物车信息存储到localstorage中
function writeCartsFromStorage(carts) {
  localStorage.setItem('cart-info', JSON.stringify(carts))
}

export default new Vuex.Store({
  state: {
    carts: readCartsFromStorage()
  },
  getters: {
    totalCount: state => {
      var result = 0
      state.carts.forEach(v => {
        result += v.count
      })
      return result
    },
    getIds: state => {
      return state.carts.map(v => v.id).join(',')
    },
    // 获取id对应的数量
    getCountById:state=>id=>{
        var temp =  state.carts.find(v=>v.id == id);
        
          return temp.count
       
        
    },
  },
  mutations: {
    addToCart(state, cart) {
      // 如果购物车中已经有了对应的商品信息，那就让数量累加
      // 如果没有，那就新增一个对象
      let temp = state.carts.find(v => {
        return v.id == cart.id
      })
      if (temp) {
        temp.count += cart.count
      } else {
        state.carts.push(cart)
      }
      //当数组中的购物车信息更新之后，需要将其更新到localstorage
      writeCartsFromStorage(state.carts)
    },
    updateCarts(state,cartList){
            // console.log(cartsList);
            // 这个方法中，接收了到购物车页面中有数量的数组
            // 我们把数组进行遍历，找到每一项对应的vuex中的购物车信息
            // 更新count即可
            cartList.forEach(v=>{
                let cart = state.carts.find(e=>{
                    return e.id == v.id
                })
                cart.count = v.count
            })
            writeCartsFromStorage(state.carts)
    }
  }
})
