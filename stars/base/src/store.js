import Vue from 'vue';
import Vuex from 'vuex';
import commonStore from '@common/store';
import service from './service';

const state = {
  data: {}
};

const mutationsType = {
  UPDATE_DATA: 'UPDATE_DATA'
};

const mutations = {
  [mutationsType.UPDATE_DATA](state, data) {
    state.data = data;
  }
};

const getters = {
  data: state => state.data
};

const actions = {
  getData({ commit }, params) {
    service
      .getData(params)
      .then(data => {
        commit(mutationsType.UPDATE_DATA, data.body);
      })
      .catch(() => {
        commit(mutationsType.UPDATE_DATA, {});
      });
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    commonStore
  },
  state,
  mutations,
  getters,
  actions
});
