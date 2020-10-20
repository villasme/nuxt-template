import I18N from '~/assets/utils/I18N';
import axios from 'axios'
import { PontCore } from '~/services/pontCore'

export default ({ $config }: any) => {
  const instance = axios.create({
    baseURL: $config.baseURL
  })

  function fetchFun (url: any, options: any) {
    if (options === void 0) {
      options = {}
    }

    const option = {
      data: options.body,
      method: options.method
    }

    return instance(url, option).then((res) => {
      if (res.data.success) {
        return res.data
      } else {
        return Promise.reject({
          message: res.data.message || I18N.plugins.fetch.SrEv
        })
      }
    })
  };

  PontCore.useFetch(fetchFun)
}
