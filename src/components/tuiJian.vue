<template id="tuiJian">
    <div class="zf">
      <div class="zf-home-wrap">
      <div class="zf-home-wrap-swipe">
        <mt-swipe :auto="4000">
        <mt-swipe-item
            v-for="banner in banners"
            :key="banner.id"
        >
            <img :src="banner.imageUrl" alt="" class="image">
        </mt-swipe-item>
        </mt-swipe>
      </div>
      </div>
      <div class="zf-home-hot">
        <div class="zf-home-hot-left">
          <img :src="gridsV2Img1.imageUrl" alt="">
          <p>{{ gridsV2Img1.title }}</p>
          <p>{{ gridsV2Img1.text }}</p>
        </div>
        <div class="zf-home-hot-right">
          <div class="zf-home-hot-right-top">

          </div>
          <div class="zf-home-hot-right-bottom">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      banners: [],
      gridsV2Img1: '',
      gridsV2Img2: '',
      gridsV2Img3: ''
    }
  },
  created () {
    console.log(11111111)
    this.$http.getBanner()
      .then(resp => {
        this.banners = resp.data.banners
        let gridsV2 = resp.data.gridsV2
        this.gridsV2Img1 = gridsV2[0]
        this.gridsV2Img2 = gridsV2[2]
        this.gridsV2Img3 = gridsV2[3]
      })
  }
}
</script>

<style lang="scss" scoped>
.zf-home-wrap {
  position: relative;
  height: 0;
  padding-top: (400 / 1080) * 100%;
  width: 100%;
  &-swipe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .image {
      width: 100%;
    }
  }
}
.zf-home-hot {
  height: 130px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  &-left {
    width: 48%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #fdf4e6;
    position: relative;
    img {
      height: 100%;
      position: absolute;
      right: 0;
    }
    p {
      font-size: 12px;
      position: relative;
      z-index: 2;
      padding-left: 8px;
      padding-top: 5px;
    }
  }
  &-right {
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-top {
      width: 100%;
      height: 49%;
      border-radius: 6px;
      background: #fdf4e6;
    }
    &-bottom {
      width: 100%;
      height: 49%;
      border-radius: 6px;
      background: #eef9fc;
    }
  }
}


</style>
