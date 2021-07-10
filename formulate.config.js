import { de } from '@braid/vue-formulate-i18n'

export default {
  validationNameStrategy: ['validationName', 'label', 'name', 'type'],
  classes: {
    input: 'my-formulate-input-field',
  },
  //   plugins: [de],
  //   locale: 'de',
  rules: {
    // foobar: ({ value }) => ['foo', 'bar'].includes(value),
  },
  library: {
    phone: {
      classification: 'text',
      component: 'FormulatePhoneInput',
    },
    // phone: {
    //   classification: 'text',
    //   component: 'Formulatephone',
    // },
  },
}
