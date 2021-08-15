export default (array: Array<any>, prop: string) => {
  return Math.max.apply(
    Math,
    array.map(function (item) {
      return item[prop]
    })
  )
}
