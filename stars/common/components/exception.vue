<template>
  <div class="exception-page" v-if="exceptionStatus">
    <div class="exception-content">
      <img src="../assets/exception.png" class="exception-img" />
      <div class="exception-text" @click="refresh">
        <span>刷新页面 </span><i class="icon-refresh"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    refresh() {
      this.$emit('exception-refresh');
    }
  },
  computed: {
    ...mapState({
      exceptionStatus: state => state.commonStore.exceptionStatus
    })
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.exception-page {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding-top: rem(230);
  background: #dedede;
  z-index: 99999;
  .exception-img {
    width: rem(329);
    height: rem(286);
  }
  .icon-refresh {
    display: inline-block;
    width: rem(22);
    height: rem(25);
    background: url(../assets/refresh.png) no-repeat center;
    background-size: contain;
  }
  .exception-text {
    margin-top: rem(12);
    font-size: rem(26);
    color: #999;
    text-align: center;
    span,
    i {
      vertical-align: middle;
    }
  }
}
</style>
