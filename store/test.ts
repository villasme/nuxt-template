interface State {
    list: any[]
}

export const state: () => State = () => ({
    list: []
  })
  
  export const mutations = {
    add(state: State, text: any) {
      state.list.push({
        text,
        done: false
      })
    },
    remove(state: State, { todo }: any) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state: State, todo: { done: boolean }) {
      todo.done = !todo.done
    }
}