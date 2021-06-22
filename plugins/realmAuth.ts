import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import * as Realm from 'realm-web'

export default (context: Context, inject: Inject) => {
  const app: Realm.App = new Realm.App('nanokings-vtaum')
  inject('realmApp', app)
  inject('credentials', Realm.Credentials)
  inject(
    'apiKeyCredentials',
    Realm.Credentials.apiKey(
      'GYMqpCeKrZrrLqkAp0mPZ7JMJYnev9W2wrRyCoDfONMEhMw0GJCysSGSKffjtd6B'
    )
  )

  // production
  // 1290435017974069
  // dev
  // 1124818331264020
  // inject('fbClientId', '1290435017974069')
  // inject('apiKeyCredentials', Realm.Credentials.apiKey(context.env.realmApiKey))
  //
  //
  // dev
  // const redirectUri = 'http://localhost:4000/handleOAuthLogin'
  // beta
  // const redirectUri = 'https://beta.yourfootprint.app/handleOAuthLogin'
  // main
  // const redirectUri = 'https://yourfootprint.app/handleOAuthLogin'

  // Create an anonymous credential
  // inject('fbCredentials', Realm.Credentials.facebook(redirectUri))
  // inject('handleAuthRedirect', Realm.handleAuthRedirect)
  // inject(
  //   'googleClientId',
  //   '884837205947-vudun26rcatn8rnndbg72sncj3tbgf3j.apps.googleusercontent.com'
  // )
}
