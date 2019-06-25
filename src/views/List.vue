<template>
  <div class="zf-list">
    <div class="zf-list-left">
      <ul class="zf-list-left-ul">
          <router-view name="listTab"
            v-for="list in listArr"
            :key="list.id"
            :id="list.id"
            :title="list.name"
          ></router-view>
      </ul>
    </div>
    <div class="zf-list-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listArr: []
    }
  },
  created () {
    this.$http.getNav()
      .then(resp => {
          this.listArr = resp.data.list.slice(1)
          let { id = this.listArr[0].id } = this.$route.params
          this.$router.push(`/list/tab/${id}`)
      })
  }
}
</script>

<style lang="scss" scoped>
.zf-list {
    width: 100%;
    height: 100%;
    display: flex;
    &-left {
        width: 30%;
        height: 100%;
        background: #EEEEE0;
        &-ul {
            overflow: auto;
        }
    }
    &-right {
        flex: 1;
        background: #FFF0F5;
    }
}

</style>
