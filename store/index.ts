import { GetterTree, ActionTree, MutationTree } from 'vuex'
import apollo from '~/helpers/apollo'
import User from '@/graphs/read/User'

export interface AuthUser {
  _id: string
  avatar: string
  coverPhoto: string
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  gender: string
  subscription: { tier: { label: string }; rank: number; active: boolean }
  facebook: string
  instagram: string
  twitter: string
  youtube: string
  bankAccount: {
    bankName: string
    bankCode: string
    accountName: string
    accountNumber: string
  }

  walletBalance: number
  releases: number
  streams: number
  views: number
  sales: number
  downloads: number
  transactions: {
    _id: string
  }
  songs: {
    _id: string
    title: string
    uid: string
    artWork: string
    createdAt: string
  }[]
}
interface State {
  authUser: AuthUser | null
  loading: boolean
  overlay: boolean
  loggedIn: boolean
}
export const state = (): State => ({
  loading: true,
  overlay: false,
  loggedIn: false,
  authUser: null,
})

export type RootState = State

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
  addSong(state, { subscription, song }) {
    const authUser = state.authUser as AuthUser
    const musicTypes = [
      {
        label: 'Single',
        ranks: [0, 1, 2, 3],
      },
      { label: 'EP', ranks: [2, 3] },
      { label: 'Album', ranks: [3] },
    ]
    const addedSongTypeRanks =
      musicTypes.find((musicType) => musicType.label == song.musicType)
        ?.ranks || []
    if (subscription.active && addedSongTypeRanks.includes(subscription.rank)) {
      authUser.songs.unshift(song)
      authUser.releases += 1
    }
    if (subscription.rank === 0) {
      authUser.subscription.active = false
    }
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
      if (user.songs) {
        user.song = user.songs.reverse()
      }
      commit('setUser', user)
    } else {
      app.$cookies.remove('loggedIn')
      commit('unSetUser')
    }
    commit('setLoadState', false)
  },
}
