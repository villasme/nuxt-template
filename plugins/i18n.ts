/**
 * 让vue识别I18N变量
 */
import Vue from 'vue'
import Cookies from 'js-cookie'
import zh from '~/.kiwi/zh-CN/index'
import en from '~/.kiwi/en-US/index'

const lang: any = 'zh-CN'

console.log(Cookies.get('lang'))

Vue.prototype.I18N = Cookies.get('lang') === lang ? zh : en;
