import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    lycList: [] as any[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    setLycList (state, lycList: any[]) {
        state.lycList = lycList
    }
}

export const getters: GetterTree<RootState, RootState> = {}

export const actions: ActionTree<RootState, RootState> = {
    async getLYCList ({commit}) {
        try {
            const lycList = await API.business.bearingLyc.list.request({})
            console.log(lycList)
            commit('setLycList', lycList.list)
        } catch (error) {
            // TODO
        }
    }
}
