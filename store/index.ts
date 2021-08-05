import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  overlay: false,
  loggedIn: false,
  authUser: null,
})

export type RootState = ReturnType<typeof state>

// export const getters: GetterTree<RootState, RootState> = {
//   name: (state) => state.name,
// }

export const mutations: MutationTree<RootState> = {
  setOverlay(state, val: boolean) {
    state.overlay = val
    if (val) {
      document.body.style.overflow = 'hidden !important'
    } else {
      document.body.style.overflow = 'auto'
    }
  },
  setUser(state, authInfo) {
    state.loggedIn = true

    state.authUser = authInfo
  },
  unSetUser(state) {
    state.loggedIn = false
    state.authUser = null
    state.overlay = false
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtClientInit({ state, commit }, { app }) {
    const authUser = app.$realmApp.currentUser
    if (authUser) {
      app.$cookies.set('loggedIn', true)

      commit('setUser', await authUser.refreshCustomData())
    } else {
      app.$cookies.remove('loggedIn')
      commit('unSetUser')
    }
  },
}
