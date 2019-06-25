<template>
    <div class="zf-detail">
        {{ title }}
        <span class="return" @click="goBack">返回</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: '',
            title: ''
        }
    },
  created () {
      this.id = this.$route.query.id
      this.getDetail()

  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$route.params.path = from.path
    })
  },
  methods: {
    getDetail () {
        this.$http.getDetail(this.id)
        .then(resp => {
            this.title = resp.data.shop.nickname
            console.log(resp)
        })
    },
    goBack () {
        this.$router.push(this.$route.params.path)
    }
  }
}
</script>

<style>
.zf-detail {
  text-align: center;
  position: relative;
}
.return {
  position: absolute;
  left: 10px;
  top: 3px;
}
</style>
