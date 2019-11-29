export function parseUrlParams(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  } else {
    return null;
  }
}

/**
 * 解决模态框里面的滑动无效问题
 */
export const modalHelper = (function(bodyCls) {
  var scrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls);
      // scrollTop lost after set position:fixed, restore it back.
      document.scrollingElement.scrollTop = scrollTop;
    }
  };
})('modal-open');

/**
 * 动态创建js文件
 * @param {String} src
 */
export const loadJs = src => {
  return new Promise((resolve, reject) => {
    var ref = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');

    script.src = src;
    ref.parentNode.insertBefore(script, ref);

    script.onload = data => {
      resolve(data);
    };

    script.onerror = err => {
      reject(err);
    };
  });
};

/**
 * 解决小数相乘有误差的问题
 * @param {Number} arg1
 * @param {Number} arg2
 */
export function accMul(arg1, arg2) {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {} // eslint-disable-line
  try {
    m += s2.split('.')[1].length;
  } catch (e) {} // eslint-disable-line
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}

/**
 * 节流函数
 * @param {Function} fn
 * @param {Number} delay
 * @param {Number} mustRunDelay
 */
export function throttle(fn, delay, mustRunDelay) {
  let timer = null;
  let t_start;
  return function() {
    let context = this,
      args = arguments,
      t_curr = +new Date();
    clearTimeout(timer);
    if (!t_start) {
      t_start = t_curr;
    }
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args);
      t_start = t_curr;
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    }
  };
}

/**
 * 返回年月日字符串
 * @param {String} dateStr
 * @param {String} joinStr
 */
export function getDateYMD(dateStr = '', joinStr = '.') {
  let time = new Date(dateStr);
  let Y = time.getFullYear();
  let M = time.getMonth() + 1;
  let d = time.getDate();

  M = M < 10 ? '0' + M : M;
  d = d < 10 ? '0' + d : d;

  return `${Y}${joinStr}${M}${joinStr}${d}`;
}
