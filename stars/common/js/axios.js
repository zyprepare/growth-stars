import axios from 'axios';
import config from './config';
import jsonpPromise from 'growth-jsonp';

// 处理成功请求
function handleSuccess(opts, data) {
  opts.openLoading && opts.closeLoading && opts.closeLoading();
  opts.success(data);
}

// 处理请求错误
function handleError(opts, data) {
  opts.openLoading && opts.closeLoading && opts.closeLoading();
  opts.errorToast && opts.errorToast(data);
  opts.showException && opts.showException();
  opts.error(data);
}

export default {
  defOpts: {
    method: 'GET',
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // 接口调用成功后，提示框
    toast: true,
    // 接口调用成功后，提示框
    sucToast: false,
    // 网络异常，提示框
    errorToast: true,
    // 是否打开loading
    openLoading: true,
    timeout: 10000,
    success: function() {},
    error: function() {}
  },
  send(opts) {
    let _opts = Object.assign({}, this.defOpts, opts);

    _opts.openLoading && _opts.openLoading();

    axios(_opts)
      .then(function(res) {
        let data = res.data;
        data.code = parseInt(data.code);
        if (data.code === 0) {
          handleSuccess(_opts, data);
        } else {
          handleError(_opts, data);
        }
      })
      .catch(function(error) {
        if (error && error.data) {
          handleError(_opts, error.data);
        } else {
          handleError(_opts, {});
        }
      });
  },
  sendHelper(opts) {
    // 如果是开发环境，并且配置了mockURL，则表示用mock数据
    let isMock = config.isDev && !!opts.mockUrl;

    if (isMock) {
      opts.url = opts.mockUrl;
    } else {
      opts.url = config.baseAPIUrl;
    }

    // { withCredentials: true } 使用cors的方式cookie设置
    opts.withCredentials = true;

    this.send(opts);
  },
  /**
   * jsonp请求
   * @param {Object} opts {params: {url, data, opts}} url:请求地址，data：请求参数，opts：jsonp相关配置
   */
  jsonp(opts) {
    let _opts = Object.assign({}, this.defOpts, opts);
    _opts.openLoading && _opts.openLoading();

    jsonpPromise(opts.params.url, opts.params.data, opts.params.opts)
      .then(res => {
        res.code = parseInt(res.code);
        if (res.code === 0) {
          handleSuccess(_opts, res);
        } else {
          handleError(_opts, res);
        }
      })
      .catch(error => {
        if (error) {
          handleError(_opts, error);
        } else {
          handleError(_opts, {});
        }
      });
  },
  jsonpHelper(opts) {
    // 如果是开发环境，并且配置了mockURL，则表示用mock数据
    let isMock = config.isDev && !!opts.mockUrl;

    if (isMock) {
      opts.url = opts.mockUrl;
    }

    if (isMock) {
      this.send(opts);
    } else {
      this.jsonp(opts);
    }
  }
};
