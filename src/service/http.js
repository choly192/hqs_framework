/**
 * 封装接口请求 http
 * 采用axios
 */

import axios from 'axios';
/**
 * get请求 
 */
const getMethod = (url, options) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(url, options).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
  return promise;
};

/**
 * 数据操作类型(post、put、delete、patch)
 */
const optionMethod = (url, options) => {
  let httpType;
  switch (options.type.toLowerCase()) {
    case 'post':
      httpType = 'post';
      break;
    case 'put':
      httpType = 'put';
      break;
    case 'delete':
      httpType = 'delete';
      break;
    case 'patch':
      httpType = 'patch';
      break;
    default:
      break;
  };
  const bodyParams = setOptionMethodBody(options); // 转换body数据格式和类型
  const promise = new Promise((resolve, reject) => {
    axios({
      method: httpType,
      url,
      data: bodyParams
    }).then(response => {
      resolve(response);
    }).catch(error => {
      alert('系统异常，请联系管理员！');
      reject(error);
    });
  });
  return promise;
};
/**
 * 转换body数据格式和类型
 * Object.prototype.toString.call(value) 判断数据类型
 */
const setOptionMethodBody = options => {
  const { data } = options;
  if (options.type === 'form') {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
      if (Object.prototype.toString.call(data[key]) === '[object Array]') {
        data[key].map(item => {
          formData.append(key, item);
        })
      } else {
        formData.append(key, data);
      }
    }
    return formData;
  } else if (options.type === 'json') {
    return JSON.stringify(data);
  } else {
    return data;
  }
};

/**
 * 请求数据
 */
export const http = (url, options) => {
  if (options.method.toLowerCase() === 'get') {
    return getMethod(url, Object.assign({}, { params: options.data || {} }, options)); // get请求
  } else {
    return optionMethod(url, options); // post、put、delete、patch
  }
};
