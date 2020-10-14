import axios from 'axios'
import {PontCore} from '~/services/pontCore'

const instance = axios.create({
  baseURL: process.env.baseUrl
})

function fetchFun (url, options) {
    if (options === void 0) {
      options = {};
    }

    const config = {
        data: options.body,
        method: options.method
    }

    return instance(url, config)
};

PontCore.useFetch(fetchFun);