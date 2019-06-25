<template>
  <div class="zf-home">
    <header class="zf-home-header">
      <router-link class="zf-home-header-search" to="/search">
        <span class="icon se">&#xe61d;</span>
        <span class="icon text">搜索商品</span>
      </router-link>
      <div class="zf-home-header-nav">
        <div class="tuijian">
          <router-link tag="span" class="tj" :to="`/home/${tJ.id}`">{{ tJ.name }}</router-link>
        </div>
        <div class="sNav">
          <ul>
            <router-link tag="li"
              v-for="nav in navs"
              :key="nav.id"
              :to="`/home/tab/${nav.id}`"
            >{{ nav.name }}</router-link>
          </ul>
          
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tJ: "",
      navs: []
    };
  },
  created() {
    this.$http.getNav().then(resp => {
      this.tJ = resp.data.list[0]
      this.navs = resp.data.list.slice(1)
      let { id = this.tJ.id } = this.$route.params
      if (this.$route.params && this.$route.params.id != this.tJ.id) {//根据id的不同进不同的路由
        this.$router.push(`/home/tab/${id}`)
      } else {
        this.$router.push(`/home/${id}`)
      }
      this.$route.params.id = id
      
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.id == this.$route.query) {
      this.news = "tuiJian"
    } else {
      this.news = "navList"
    }
    next();
  }
};
</script>

<style lang="scss" scoped>
.zf-home {
  &-header {
    height: 80px;
    padding-top: 8px;
    box-sizing: border-box;
    background: #fdde4a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &-search {
      width: 70%;
      height: 34%;
      background: #f8f8ff;
      padding-left: 3px;
      border-radius: 8px;
      color: #5e5e5e;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .se {
        font-size: 20px;
      }
      .text {
        font-size: 14px;
      }
    }
    &-nav {
      height: 50%;
      width: 100%;
      display: flex;
      .router-link-exact-active {
        border-bottom: 4px solid #43240c;
      }
      .tuijian {
        height: 100%;
        width: 25%;
        padding-top: 7px;
        box-sizing: border-box;
        text-align: center;
        font-size: 14px;
        color: #43240c;
        border-right: 2px solid #43240c;
        padding-right: 5px;
        padding-left: 5px;
        .tj {
          display: inline-block;
          height: calc(100% - 4px);
        }
      }
      .sNav {
        height: 100%;
        flex: 1;
        font-size: 14px;
        overflow-x: scroll;
        position: relative;
        ul {
          width: 100%;
          padding-left: 3px;
          display: flex;
          justify-content: flex-start;
          white-space: nowrap;
          li {
            height: calc(100% - 4px);
            line-height: 33px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
