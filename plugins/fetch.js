import axios from 'axios'
import {PontCore} from '~/services/pontCore'


export default ({$config}) => {
  const instance = axios.create({
    baseURL: $config.baseURL
  })
  
  function fetchFun (url, options) {
      if (options === void 0) {
        options = {};
      }
  
      const option = {
          data: options.body,
          method: options.method
      }
  
      return instance(url, option).then(res => {
        if (res.data.success) {
          return res.data.content
        } else {
          return Promise.reject({
            message: res.data.message || '请求超时...'
          })
        }
      })
  };
  
  PontCore.useFetch(fetchFun);
}
