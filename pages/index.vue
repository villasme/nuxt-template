<template>
  <div class="container">
    <div>
      <Logo a="aaa" />
      <h1 class="title">
        zsy
      </h1>
      <Test :user="user" />
      <nuxt-link to="/test/12">
        {{ I18N.common.test }}
      </nuxt-link>
      <Table :columns="columns1" :data="testList" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import I18N from '~/assets/utils/I18N'
import Logo from '~/components/Logo.vue'
import Test from '~/components/Test.vue'

export default Vue.extend({
  components: {
    Test,
    Logo
  },
  fetch () {
    this.$accessor.getList()
  },
  data () {
    return {
      user: {
        firstName: 'hahah',
        lastName: 'lastName'
      },
      columns1: [
        {
          title: I18N.pages.index.brand,
          key: 'brand'
        },
        {
          title: I18N.pages.index.pCEm,
          key: 'name'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      testList: (state: any) => state.list
    })
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
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
