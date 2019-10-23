<template>
  <div class="common-popup-wrapper" ref="popupWrapper" v-if="popupStatus">
    <i class="mask-bg" @touchmove.stop.prevent></i>
    <div class="common-popup-content">
      <slot></slot>
      <div class="common-popup-close" v-if="!isHideCloseBtn" @click="hide">
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { modalHelper } from '../js/utils';

export default {
  props: {
    isHideCloseBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      popupStatus: state => state.commonStore.popupStatus
    })
  },
  updated() {
    let el = this.$refs.popupWrapper;
    if (el) {
      modalHelper.afterOpen();
    } else {
      modalHelper.beforeClose();
    }
  },
  methods: {
    ...mapActions(['closePopup']),
    hide() {
      this.closePopup();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.common-popup-wrapper,
.mask-bg {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.mask-bg {
  position: absolute;
  background-color: #000;
  opacity: 0.6;
}
.common-popup-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
  .common-popup-content {
    position: relative;
    min-width: rem(600);
    min-height: rem(370);
    // max-height: rem(780);
    border-radius: rem(10);
    animation: scale 0.3s;
    z-index: 1009;
    .common-popup-close {
      position: absolute;
      bottom: rem(-96);
      left: 50%;
      transform: translate(-50%, 0);
      i {
        display: inline-block;
        width: rem(50);
        height: rem(50);
        background: url(../assets/close.png) no-repeat center;
        background-size: contain;
      }
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
