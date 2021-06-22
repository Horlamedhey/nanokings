import { Context } from '@nuxt/types'
export default ({
  graphQLErrors,
  networkError,
  operation,
  forward,
}: {
  graphQLErrors: any
  networkError: any
  operation: any
  forward: any
}) => {
  // console.log('apollo', app.$apolloHelper, 'realm', $realmApp)
  console.log('Global error handler')
  console.log(
    'graphQLErrors',
    graphQLErrors,
    'networkError',
    networkError,
    'operation',
    operation,
    'forward',
    forward
  )
}
