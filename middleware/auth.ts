import I18N from '~/src/utils/I18N';
import { Middleware } from '@nuxt/types'

export default (({ store, route, redirect }) => {
  // Check if user is connected first
  // if (!store.getters['user/user'].isAuthenticated) return redirect('/login')

  // Get authorizations for matched routes (with children routes too)
  // const authorizationLevels = route.meta.map((meta) => {
  //   if (meta.auth && typeof meta.auth.authority !== 'undefined')
  //     return meta.auth.authority
  //   return 0
  // })
  const roles = ['test', 'test-id', 'index']
  console.log(route)

  if (route.name && roles.indexOf(route.name) === -1) {
    console.log(I18N.middleware.auth.noAuthority)
    redirect('/404')
  }
  // Get highest authorization level
  // const highestAuthority = Math.max.apply(null, authorizationLevels)
  // console.log(highestAuthority)

  // if (store.getters['user/user'].details.general.authority < highestAuthority) {
  //   return error({
  //     statusCode: 401,
  //     message: 'Du måste vara admin för att besöka denna sidan.'
  //   })
  // }
}) as Middleware;
