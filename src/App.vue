<template>
  <div class="zf-app">
      <main class="zf-app-main">
        <router-view></router-view>
      </main>
      <footer class="zf-app-footer">
        <router-view name="footer"></router-view>
      </footer>
      
  </div>
</template>
 
<script>
export default {
  
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1243753 */
  src: url('//at.alicdn.com/t/font_1243753_6bwm0v0m82c.eot');
  src: url('//at.alicdn.com/t/font_1243753_6bwm0v0m82c.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1243753_6bwm0v0m82c.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1243753_6bwm0v0m82c.woff') format('woff'),
  url('//at.alicdn.com/t/font_1243753_6bwm0v0m82c.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1243753_6bwm0v0m82c.svg#iconfont') format('svg');
}
.icon {
  font-family: 'iconfont';
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; }
html,
body {
  height: 100%;
}
.zf-app {
  height: 100%;
  display: flex;
  flex-direction: column;
 
  &-main {
    flex: 1;
  }
}

</style>

