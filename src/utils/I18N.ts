import Cookies from 'js-cookie'
import zh from '~/.kiwi/zh-CN/index'
import en from '~/.kiwi/en-US/index'

const cookieLang = Cookies.get('lang')

let I18N = zh
switch (cookieLang) {
  case 'zh-CN':
    I18N = zh
    break
  case 'en-US':
    I18N = en
    break
  default:
    I18N = zh
}

const Langs = I18N

export default Langs
