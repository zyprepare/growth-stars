/**
 * 对外提供操作全局state的方法
 */

import store from '../store';

export function openLoading() {
  store.dispatch('openLoading');
}

export function closeLoading() {
  store.dispatch('closeLoading');
}

export function openToast(opts = {}) {
  store.dispatch('openToast', opts);
}

export function openPopup() {
  store.dispatch('openPopup');
}

export function closePopup() {
  store.dispatch('closePopup');
}

export function showException() {
  store.dispatch('showException');
}

export function hideException() {
  store.dispatch('hideException');
}
