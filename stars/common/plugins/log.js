let Log = {};

Log.install = Vue => {
  Vue.prototype.$log = (...args) => {
    // eslint-disable-next-line
    if (!__ISPROD__) {
      // eslint-disable-next-line
      console.log(...args);
    }
  };
};

export default Log;
