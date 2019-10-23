<template>
  <div class="test">
    <div class="test-item">
      <div class="test-button" @click="openMyPopup">打开弹窗</div>
      <popup>
        <div>自定义HTML</div>
        <button @click="closePopup">关闭弹窗</button>
      </popup>
    </div>
    <div class="test-item">
      <div class="test-button" @click="openMyLoading">打开loading</div>
    </div>
    <div class="test-item">
      <div class="test-button" @click="openMyToast">打开Toast</div>
    </div>
    <div class="test-item">
      <div class="test-button" @click="showMyException">显示异常页面</div>
    </div>
  </div>
</template>

<script>
import popup from '@common/components/popup';
import store from '../store';

export default {
  components: {
    popup
  },
  methods: {
    openMyPopup() {
      store.dispatch('openPopup');
    },
    closePopup() {
      store.dispatch('closePopup');
    },
    openMyLoading() {
      store.dispatch('openLoading');
      setTimeout(() => {
        store.dispatch('closeLoading');
      }, 2000);
    },
    openMyToast() {
      store.dispatch('openToast', {
        html: '<p>错误信息</br>错误信息2</p>'
      });
    },
    showMyException() {
      store.dispatch('showException');
    }
  }
};
</script>

<style lang="scss">
@import '@common/styles/mixins.scss';

.test-item {
  .test-button {
    height: rem(100);
    line-height: rem(100);
    @include fontSize(40);
    text-align: center;
    border-bottom: 1px solid #acc;
  }
}

.common-popup-content {
  background: #fff;
  text-align: center;
}
</style>
