import { actionTree, getterTree, getAccessorType, mutationTree } from 'nuxt-typed-vuex'
import * as test from '~/store/test'

export const namespace = true

export const state = () => ({
  list: [] as any[]
})

export type RootState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  setList (state, testList: any[]) {
    state.list = testList
  }
})

export const getters = getterTree(state, {})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async getList (): Promise<any> {
      try {
        const reslist = await API.business.bearingLyc.list.request({})
        this.app.$accessor.setList(reslist.list)
      } catch (error) {
        // TODO
      }
    }
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    test
  }
})
