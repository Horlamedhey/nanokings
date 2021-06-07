export type State = {
  overlay: boolean
}
export const state = (): State => ({
  overlay: false,
})

export const mutations = {
  setOverlay(state: State, val: boolean) {
    state.overlay = val
    if (val) {
      document.body.style.overflow = 'hidden !important'
    } else {
      document.body.style.overflow = 'auto'
    }
  },
}
