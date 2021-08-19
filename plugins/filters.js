/* eslint-disable no-unused-vars */
import Vue from 'vue'
import moment from 'moment'

Vue.filter('timeago', (value) => {
  return moment(value).fromNow()
})

// Vue.filter('formatDate', (value) => {
//   return moment(value).format('D MMMM YYYY')
// })

// Vue.filter('eventDate', (value) => {
//   return moment(value).format('D MMM, YYYY')
// })

// Vue.filter('individualEventDate', (value) => {
//   return moment(value).format('ddd, MMM')
// })

// Vue.filter('dateOnly', (value) => {
//   return moment(value).format('D')
// })

// Vue.filter('formatTaskDate', (value) => {
//   return moment(value).format('Do MMMM, YYYY')
// })

// Vue.filter('formatChatDate', (value) => {
//   return moment(value).calendar()
// })

// Vue.filter('formatTime', (value) => {
//   return moment(value).format('hh:mma')
// })

// Vue.filter('fullDateTime', (value) => {
//   return moment(value).format('YYYY-MM-DD HH:mma')
// })

// Vue.filter('localDateTime', (value) => {
//   return moment.utc(value).local().format('YYYY-MM-DD HH:mma')
// })
// Vue.filter('localDate', (value) => {
//   return moment.utc(value).local().format('Do MMMM, YYYY')
// })

// Vue.filter('countdownTimer', (value) => {
//   // const interval = 1000
//   const incomingLocalTime = moment.utc(value).local()
//   const currentLocalTime = moment.utc().local()
//   const diffTime = incomingLocalTime.diff(currentLocalTime)
//   if (diffTime < 0) {
//     return '00:00:00'
//   } else {
//     const duration = moment.duration(diffTime, 'milliseconds')
//     const hours =
//       duration.years() * 365 * 24 +
//       Math.round(duration.months() * 30.4167 * 24) +
//       duration.days() * 24 +
//       duration.hours()
//     return `${hours}:${duration.minutes()}:${duration.seconds()}`
//   }
//   // setInterval(() => {
//   //   duration = moment.duration(duration - interval, 'milliseconds')

//   //   return duration.hours()
//   // }, interval)
// })

// Vue.filter('localDateTimeAgo', (value) => {
//   return moment.utc(value).local().fromNow()
// })

// Vue.filter('getFileName', (value) => {
//   const valueChunk = value.split('/')
//   return valueChunk[valueChunk.length - 1]
// })

// Vue.filter('getFileExt', (value) => {
//   const valueChunk = value.split('/')
//   const splittedValueChunk = valueChunk[valueChunk.length - 1].split('.')
//   return splittedValueChunk[splittedValueChunk.length - 1]
// })

// Vue.filter('encryptId', (value) => {
//   return Buffer.from(value.toString()).toString('base64')
// })

Vue.filter('currencyFormatter', (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(value)
})
