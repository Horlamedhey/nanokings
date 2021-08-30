import moment from 'moment'
export default (transactionsArray) =>
  transactionsArray.map(({ __typename, createdAt, amount, type: status }) => ({
    date: moment(createdAt).fromNow(),
    status,
    amount: {
      value: `${status === 'withdrawal' ? '-' : ''}${new Intl.NumberFormat(
        'en-US',
        {
          style: 'currency',
          currency: 'USD',
        }
      ).format(amount)}`,
      classes: [
        'subscription',
        'withdrawal initiated',
        'withdrawal declined',
      ].includes(status)
        ? ''
        : status === 'withdrawal completed'
        ? 'text-error'
        : 'text-success',
    },
  }))
