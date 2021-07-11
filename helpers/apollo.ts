const apollo = async (app: any) => {
  await app.$realmApp.currentUser.refreshCustomData()
  await app.$apolloHelpers.onLogin(app.$realmApp.currentUser.accessToken)
}
export default apollo
