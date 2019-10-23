<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <test :msg="data.name" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import test from '../components/test.vue';

export default {
  components: {
    test
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    ...mapActions(['getData'])
  }
};
</script>

<style lang="scss">
.home {
  text-align: center;
}
</style>
