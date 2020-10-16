import Cookies from 'js-cookie'
import zh from '~/.kiwi/zh-CN/index'
import en from '~/.kiwi/en-US/index'

let I18N: typeof zh = zh
const cookieLang = Cookies.get('lang')

switch (cookieLang) {
    case 'zh-CN':
        I18N = zh
    break;
    case 'en-US':
        I18N = en
    break;
    default:
        I18N = zh
}

export default I18N
