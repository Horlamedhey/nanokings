import { Context } from '@nuxt/types'
export default (
  {
    graphQLErrors,
    networkError,
    operation,
    forward,
  }: {
    graphQLErrors: any
    networkError: any
    operation: any
    forward: any
  },
  context: Context
) => {
  // console.log(context.app.$realmApp.currentUser.refreshToken)
  // console.log('Global error handler')
  // console.log(
  //   'graphQLErrors',
  //   graphQLErrors,
  //   'networkError',
  //   networkError,
  //   'operation',
  //   operation,
  //   'forward',
  //   forward
  // )
}
