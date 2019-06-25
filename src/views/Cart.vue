<template>
    <div class="zf-cart">
        <div class="unShow"
          v-if="isCartEmpity"
        >
            购物车空空如也！！！！
        </div>
       <div class="isShow" v-else>
           <CartList 
            v-for="shop in cart"
            :key="shop.id"
            :id="shop.id"
            :title="shop.title"
            :price="shop.price"
            :imageUrl="shop.image"
            :count="shop.count"
            :isCheck="shop.isCheck"
            />
            <p>购物车中的总数量为： {{ totalCount }}</p>
            <p>购物车中的被选中的数量为： {{ totalIsChecked }}</p>
            <p>购物车中被选中的总价格为： {{ totalPrice | toFixed }}</p>
            </div>
       </div>
</template>

<script>
import CartList from '@/components/CartList'
import { mapState, mapGetters } from 'vuex'
export default {
    components: {
        CartList
    },
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['totalCount', 
                        'totalIsChecked', 
                        'totalPrice',
                        'isCartEmpity'
                    ])
    }

}
</script>

<style>

</style>
