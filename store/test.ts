import { getAccessorType, mutationTree, getterTree, actionTree } from 'nuxt-typed-vuex'

export const state = () => ({
    List1: [] as any[],
})

export type TestModuleState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
    setList1 (state, aList: any[]) {
        state.List1 = aList
    }
})

export const getters = getterTree(state, {
    getName() {}
})

export const actions = actionTree(
    { state, getters, mutations }, 
    {
        async getList ({commit}) {
            try {
                const resList = await API.business.bearingLyc.list.request({})
                commit('setList1', resList.list)
            } catch (error) {
                // TODO
            }
        },
    }
)

export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions
})