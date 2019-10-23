<template>
  <div class="goTop" v-if="isShow" @click="goTop">
    <img src="../assets/go_top.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      //滚动条在Y轴上的滚动距离
      var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0,
        clientHeight = 0;
      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollTop =
        bodyScrollTop - documentScrollTop > 0
          ? bodyScrollTop
          : documentScrollTop;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight =
          document.body.clientHeight < document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      } else {
        clientHeight =
          document.body.clientHeight > document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      }
      if (scrollTop > clientHeight) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    goTop() {
      if (document.body) {
        document.body.scrollTop = 0;
      }
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.show);
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.goTop {
  position: fixed;
  bottom: rem(30);
  right: rem(42);
  width: rem(81);
  height: rem(81);
  background: #fff;
  box-shadow: 0 rem(1) rem(11) 0 rgba(218, 218, 218, 0.5);
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  line-height: rem(81);
  z-index: 3;
  img {
    width: rem(22);
    height: rem(26);
    margin-top: rem(25);
  }
}
</style>
