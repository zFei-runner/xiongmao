<template>
    <div class="zf-listdetail">
       <router-link :to="{name: 'detail', query: {id: product.id}}"
          tag="div"
          class="zf-listdetail-show"
          v-for="product in products"
          :key="product.id"
       >
          <img :src="product.image" alt="" class="img">
          <p class="title">{{ product.title }}</p>
          <div class="addToCart" @click.stop="addToCart(product)">添加到购物车</div>
          <!-- 也可以是这种写法：
          <div class="addToCart" @click.stop="addToCart({id：product.id, title: product.title, image: product.title.......})">添加到购物车</div>
           -->
       </router-link>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      id: '',
      products: ''
    }
  }, 
  created () {
      this.id = this.$route.params.id
    this.getProductDetail()
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    this.getProductDetail()
    next()
  },
  methods: {
    ...mapMutations(['addToCart']),
    getProductDetail () {
    this.$http.getHot(this.id)
      .then(resp => {
        this.products = resp.data.items.list
      })
    }
  } 
}
</script>

<style lang="scss" scoped>
.zf-listdetail {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &-show {
    width: 110px;
    height: 110px;
    margin-bottom: 5px;
    padding-bottom: 50px;

    .img {
      width: 100%;
      height: 100%;
    }

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
    }
    
    .addToCart {
      width: 100%;
      padding: {
          top: 3px;
          bottom: 3px;
      }
      text-align: center;
      font-size: 16px;
      color: #fff;
      background: #2fa2fd;
      border-radius: 4px;
    }
  }

}

</style>
