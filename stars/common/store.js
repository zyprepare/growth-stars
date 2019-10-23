const state = {
  /**
   * loading状态
   * false 表示loading隐藏
   * true 表示loading展示
   */
  loadingStatus: false,
  /**
   * 异常状态
   * false 表示异常页面隐藏
   * true 表示异常页面展示
   */
  exceptionStatus: false,
  /**
   * 弹窗状态
   * false 表示弹窗隐藏
   * true 表示弹窗展示
   */
  popupStatus: false,
  /**
   * toast状态
   * false 表示toast隐藏
   * true 表示toast展示
   */
  toastStatus: false,
  toastData: {
    showIcon: false,
    type: 1,
    html: '有问题'
  }
};

const mutationsType = {
  EXCEPTION_SHOW: 'EXCEPTION_SHOW',
  EXCEPTION_HIDE: 'EXCEPTION_HIDE',
  LOADING_SHOW: 'LOADING_SHOW',
  LOADIND_HIDE: 'LOADIND_HIDE',
  POPUP_SHOW: 'POPUP_SHOW',
  POPUP_HIDE: 'POPUP_HIDE',
  TOAST_SHOW: 'TOAST_SHOW',
  TOAST_HIDE: 'TOAST_HI'
};

const mutations = {
  [mutationsType.EXCEPTION_SHOW](state) {
    state.exceptionStatus = true;
  },
  [mutationsType.EXCEPTION_HIDE](state) {
    state.exceptionStatus = false;
  },
  [mutationsType.LOADING_SHOW](state) {
    state.loadingStatus = true;
  },
  [mutationsType.LOADIND_HIDE](state) {
    state.loadingStatus = false;
  },
  [mutationsType.POPUP_SHOW](state) {
    state.popupStatus = true;
  },
  [mutationsType.POPUP_HIDE](state) {
    state.popupStatus = false;
  },
  [mutationsType.TOAST_SHOW](state, toastData) {
    state.toastData = toastData;
    state.toastStatus = true;
  },
  [mutationsType.TOAST_HIDE](state) {
    state.toastStatus = false;
  }
};

const actions = {
  showException({ commit }) {
    commit(mutationsType.EXCEPTION_SHOW);
  },
  hideException({ commit }) {
    commit(mutationsType.EXCEPTION_HIDE);
  },
  openLoading({ commit }) {
    commit(mutationsType.LOADING_SHOW);
  },
  closeLoading({ commit }) {
    commit(mutationsType.LOADIND_HIDE);
  },
  openPopup({ commit }) {
    commit(mutationsType.POPUP_SHOW);
  },
  closePopup({ commit }) {
    commit(mutationsType.POPUP_HIDE);
  },
  openToast({ commit }, toastData) {
    commit(mutationsType.TOAST_SHOW, toastData);
  },
  closeToast({ commit }) {
    commit(mutationsType.TOAST_HIDE);
  }
};

export default {
  state,
  mutations,
  actions
};
