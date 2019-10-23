<template>
  <div class="toast-wrapper" v-show="toastStatus">
    <div id="toast" class="toast">
      <div
        class="toast-icon"
        :class="'toast-icon-' + toastData.type"
        v-if="toastData.showIcon"
      ></div>
      <div class="toast-message" v-html="toastData.html"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      timeout: 1500
    };
  },
  computed: {
    ...mapState({
      toastData: state => state.commonStore.toastData,
      toastStatus: state => state.commonStore.toastStatus
    })
  },
  watch: {
    toastData: function(newVal) {
      newVal && this.setTimer();
    }
  },
  mounted: function() {
    this.show && this.setTimer();
  },
  methods: {
    ...mapActions(['closeToast']),
    close: function() {
      this.closeToast();
    },
    setTimer: function() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.close(), this.timeout);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.toast-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  overflow: hidden;
  .toast {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: rem(354);
    height: rem(160);
    padding: 0 0.5em;
    background: rgba(0, 0, 0, 0.8);
    border-radius: rem(10);
    overflow: hidden;
    animation: scaleIn 0.3s forwards;
    &-icon {
      width: rem(86);
      height: rem(86);
      margin: 0 auto rem(20);
      &-0 {
        background: url(../assets/toast_success.png) no-repeat;
        background-size: 100%;
      }
      &-1 {
        background: url(../assets/toast_warning.png) no-repeat;
        background-size: 100%;
      }
    }
    &-message {
      text-align: center;
      // line-height: 1.6;
      font-size: rem(24);
      color: #fff;
    }
  }
}
</style>
