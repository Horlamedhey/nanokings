import { GetterTree, ActionTree, MutationTree } from 'vuex'
import apollo from '~/helpers/apollo'
import User from '@/graphs/read/User'

export const state = () => ({
  loading: true,
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
  setLoadState(state, loadState) {
    state.loading = loadState
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtClientInit({ state, commit }, { app }) {
    const authUser = app.$realmApp.currentUser
    if (authUser) {
      app.$cookies.set('loggedIn', true)
      const { _id: id } = await authUser.refreshCustomData()
      await apollo(app)
      const {
        data: { user },
      } = await app.apolloProvider!.defaultClient.query({
        query: User,
        variables: {
          id,
        },
      })

      commit('setUser', user)
    } else {
      app.$cookies.remove('loggedIn')
      commit('unSetUser')
    }
    commit('setLoadState', false)
  },
}
