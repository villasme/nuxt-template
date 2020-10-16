module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  globals: {
    I18N: true,
    API: true,
    window: true
  },
  rules: {
    /** 不校验模板字符串 `${a}a` */
    'no-template-curly-in-string': 0
  }
}
