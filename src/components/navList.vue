<template>
    <div class="zf-navlist">
      <h4>潮流精选</h4>
      <ul class="caoliu">
        <li v-for="categorie in categories"
          :key="categorie.id"
        >
          <div>
            <img :src="categorie.imageUrl" alt="">
          </div>
          <p class="title">{{ categorie.title }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [],
      lists: [],
      id: ''
    }
  },
  created () {
    console.log(111)
    this.id = this.$route.params.id
    this.getHot()
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    this.getHot()
    next()
  },
  methods: {
      getHot () {
        this.$http.getHot(this.id).then(resp => {
          this.categories = resp.data.categories
          this.lists = resp.data.items.list
        })
      }
  }
  
}
</script>

<style lang="scss" scoped>
.zf-navlist {
  text-align: center;
  h4 {
    font-weight: normal;
  }
  .caoliu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    li {
      width: 23%;
      font-size: 12px;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>
