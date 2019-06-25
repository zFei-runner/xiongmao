<template>
  <ul class="zf-footer">
    <router-link tag="li" 
        v-for="tabbar in tabbars"
        :key="tabbar.meta.title"
        :to="`/${tabbar.meta.path}`"
    >
        <p class="icon" v-html="tabbar.meta.icon"></p>
        <span>{{ tabbar.meta.title }}</span>
        <b v-if="tabbar.name === 'cart'" class="totalNum">{{ totalCount | count99 }}</b>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tabbars: []
    }
  },
  computed: {
    ...mapGetters(['totalCount'])
  },
  created () {
    this.tabbars = routes.filter(route => {
      let isTab = route.meta.isTab
      if (isTab === true) {
        return route.meta
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active, 
.router-link-active {
  color: #009ACD;
}
.zf-footer {
  width: 100%;
  border-top: 1px solid #D9D9D9;
  color: #5E5E5E;
  display: flex;
  justify-content: space-between;

  li {
      width: 24%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      .icon {
        font-size: 26px;
      }
    
      span {
          font-size: 16px;
      }
      .totalNum {
        position: absolute;
        right: 10px;
        top: -5px;
        background: red;
        color: #fff;
        font-size: 14px;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
      }
  }
}

</style>
