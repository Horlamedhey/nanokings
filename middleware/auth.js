export default function ({ store, redirect, app, route }) {
  // If the user is not authenticated
  if (!app.$cookies.get('loggedIn')) {
    return redirect(`/login?redirect=${route.path}`)
  }
}
