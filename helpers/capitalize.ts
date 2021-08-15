export default (text: String): String => {
  return text.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
}
