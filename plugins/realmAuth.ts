import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import * as Realm from 'realm-web'

export default (context: Context, inject: Inject) => {
  const app: Realm.App = new Realm.App('nanokings-vtaum')
  inject('realmApp', app)
  inject('credentials', Realm.Credentials)
  inject('anonymousCredentials', Realm.Credentials.anonymous())
}
