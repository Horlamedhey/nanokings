import Cookies from 'js-cookie'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const httpLink = new HttpLink({
    uri: `https://us-east-1.aws.stitch.mongodb.com/api/client/v2.0/app/nanokings-vtaum/graphql`,
    credentials: 'same-origin',
  })

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    const headers = {
      authorization: `Bearer ${Cookies.get('apollo-token')}`,
    }
    operation.setContext({
      headers,
    })
    return forward(operation)
  })
  const link = ApolloLink.from([
    // onError(err) =>console.log(err),
    middlewareLink,
    httpLink,
  ])
  // middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache(),
    defaultHttpLink: false,
  }
}
