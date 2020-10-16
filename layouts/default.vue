<template>
  <div class="flex">
    <div class="left-menu">
      <el-select v-model="currLang" placeholder="切换中英文" @change="changeLang">
        <el-option label="中文" value="zh-CN" />
        <el-option label="英文" value="en-US" />
      </el-select>
    </div>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Cookie from 'js-cookie'
export default {
  middleware: ['auth'],
  data () {
    return {
      currLang: 'zh-CN'
    }
  },
  mounted () {
    this.currLang = Cookie.get('lang') || 'zh-CN'
  },
  methods: {
    changeLang (value: string) {
      Cookie.set('lang', value)
      this.$router.go(0)
    }
  }
}
</script>

<style>
.flex {
  display: flex;
}

.left-menu {
  width: 214px;
  min-height: 100vh;
  background: #35495e;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
