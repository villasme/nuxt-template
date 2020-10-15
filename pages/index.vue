<template>
  <div class="container">
    <div>
      <Logo a="aaa"/>
      <h1 class="title" @click="getAbc">
        zsy
      </h1>
      <Test :user="user" />
       <nuxt-link to="/test/12">{{I18N.common.test}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import I18N from '~/src/utils/I18N'
import Logo from '~/components/Logo.vue'
import Test from '~/components/Test.vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  data () {
    return {
      user: {
        firstName: 'hahah',
        lastName: 'lastName'
      }
    }
  },
  fetch ( { store } ) {
    store.dispatch('test/getLYCList')
    store.dispatch('getLYCList')
  },
  components: {
    Test,
    Logo
  },
  methods: {
    getAbc (): void {
      console.log(this.$config)
      API.business.bearingLyc.list.request({}).then((res) => {
        console.log(res);
      })
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
