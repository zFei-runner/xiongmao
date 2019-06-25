<template>
  <div class="zf-cart-item">
    <label class="zf-cart-item-check">
      <!-- 不能使用v-model来进行input的状态管理，因为该状态是由
      state来进行管理的，如果要修改状态，必须要通过mutations来修改
       -->
      <input type="checkbox" :checked="isCheck" @change="toggleIsCheck(id)">
      <span></span>
    </label>
    <div class="zf-cart-item-img">
      <img :src="imageUrl" alt="">
    </div>
    <div class="zf-cart-item-info">
      <p class="zf-cart-item-title">{{ title }}</p>
      <p class="zf-cart-item-action">
        <span class="zf-cart-item-price">总计：{{ price * count | toFixed }}</span>
        <span class="zf-cart-item-counter">
          <span @click="countDecrement(id)">-</span>
          <span>{{ count }}</span>
          <span @click="countIncrement(id)">+</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: {
    id: {
    type: Number,
    required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      default: 1
    },
    isCheck: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters(['sangleTotalPrice'])
  },
  methods: {
      ...mapMutations(['countDecrement', 'countIncrement', 'toggleIsCheck'])
  }
}
</script>

<style lang="scss" scoped>
$grey: #eee;
$deepGrey: #383838;
$mainColor: #26a2ff;
.zf-cart-item {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid $grey;

  &-check {
    width: 30px;
    padding-top: 10px;

    input {
      display: none;

      &:checked {
        + span {
          background-color: $mainColor;
          border-color: $mainColor;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            width: 12px;
            height: 6px;
            border: 2px solid #fff;
            border-width: 0 0 2px 2px;
            left: 0;
            top: 0;
            transform: rotate(-45deg);
          } 
        }
      }
    }

    

    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border: 2px solid $deepGrey;
    }

  }

  &-img {
    width: 80px;
    height: 80px;

    img {
      width: 100%;
    }
  }

  &-title {
    font-size: 12px;
    line-height: 20px;
  }

  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 8px;
  }

  &-action {
    display: flex;
    justify-content: space-between;
  }

  &-price {
    color: #e00;
  }

  &-counter {
    height: 20px;
    line-height: 20px;
    border: 1px solid $deepGrey;
    border-radius: 3px;

    span {
      display: inline-block;
      width: 20px;
      text-align: center;

      &:nth-child(2) {
        border: 1px solid $deepGrey;
        border-width: 0 1px;
        width: auto;
        padding: 0 3px;
      }
    }
  }
}
</style>
