import { parseUrlParams } from './utils';

// 正式接口地址
const APIUrl = '/';
// 预发接口地址
const betaAPIUrl = '/';
// 是否调试正式api接口，用于预发页面访问正式接口调试
const isAPIDebug = parseUrlParams('APIDebug') == 1;
// 是否是本地开发环境
const isDev = process.env.NODE_ENV === 'development';
// 如果是预发环境或者是本地环境，都当做预发环境，这样做是为了让接口默认地址是betaAPIUrl
// const isPre = __ISPRE__ || isDev; // eslint-disable-line

export default {
  baseAPIUrl: isAPIDebug ? APIUrl : isDev ? APIUrl : betaAPIUrl,
  isDev
};
