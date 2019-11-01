import axios from '@common/js/axios';
import store from './store';

export default {
  getData(params) {
    return new Promise((resolve, reject) => {
      axios.sendHelper({
        mockUrl: '/test',
        params: {
          appid: '',
          functionId: '',
          body: JSON.stringify(params)
        },
        errorToast: false,
        openLoading: false,
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error);
        }
      });
    });
  },
  /**
   * jsonp请求演示
   */
  getData2(params) {
    return new Promise((resolve, reject) => {
      axios.jsonpHelper({
        // mockUrl: '/test',
        params: {
          url: '',
          data: {
            appid: 'aries_m_h5',
            functionId: 'aries_m_getGiftPopUp',
            body: JSON.stringify({
              paramData: JSON.stringify({
                businessChannel: 99999
              })
            })
          },
          // jsonp配置，根据需要配置，非必选
          opts: {
            param: 'jsonp'
          }
        },
        showException() {
          store.dispatch('showException');
        },
        errorToast: false,
        openLoading() {
          store.dispatch('openLoading');
        },
        closeLoading() {
          store.dispatch('closeLoading');
        },
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error);
        }
      });
    });
  }
};
