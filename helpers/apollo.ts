const apollo = async (context: any) => {
  await context.app.$realmApp.currentUser.refreshCustomData()
  await context.app.$apolloHelpers.onLogin(
    context.app.$realmApp.currentUser.accessToken
  )
}
export default apollo
