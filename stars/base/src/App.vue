<template>
  <div id="app" class="wrapper">
    <loading />
    <toast />
    <exception />
    <home />
  </div>
</template>

<script>
import loading from '@common/components/loading';
import toast from '@common/components/toast';
import exception from '@common/components/exception';
import home from './views/home';

export default {
  components: {
    loading,
    toast,
    exception,
    home
  }
};
</script>

<style lang="scss">
/*配置页面公共样式*/
body {
  line-height: 1.5;
  font-family: PingFangSC, droid sans fallback, Helvetica, STHeiTi, sans-serif;
  // -webkit-overflow-scrolling: touch;
  &.modal-open {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: auto;
  }
}

/*配置图片缩放策略*/
img {
  max-width: 100%;
  max-height: 100%;
}

/*清除浮动*/
.clearfix {
  &:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
  }
}

/*适配iPhone X*/
@media only screen and (width: 375px) and (min-height: 635px) and (-webkit-device-pixel-ratio: 3) {
  .iphoneXWrapper {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
  .iphoneXBottom {
    box-sizing: content-box;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
