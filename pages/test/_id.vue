<template>
  <div class="container">
      copy
      <p>
        id: {{$route.params.id}}
      </p>
      <nuxt-link to="/test">test</nuxt-link>
  </div>
</template>

<script>
import I18N from '~/src/utils/I18N';

export default {
    head() {
      return {
        title: I18N.test._id.ohHey,
      }
    },
    mounted () {
        // console.log(this)
    }
}
</script>

<style>

</style>