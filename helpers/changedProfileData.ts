export default async (oldProfile: any, newProfile: any): Promise<any> => {
  return new Promise((resolve) => {
    const formChanges = {} as any
    for (const key in oldProfile) {
      if (Object.hasOwnProperty.call(oldProfile, key)) {
        const oldProfileElement = oldProfile[key][0]
        const newProfileElement = newProfile[key][0]
        for (const nestedKey in oldProfileElement) {
          if (Object.hasOwnProperty.call(oldProfileElement, nestedKey)) {
            const oldProfileNestedElement = oldProfileElement[nestedKey]
            const newProfileNestedElement = newProfileElement[nestedKey]

            if (oldProfileNestedElement !== newProfileNestedElement) {
              formChanges[nestedKey] = newProfileNestedElement
            }
          }
        }
      }
    }
    resolve(formChanges)
  })
}
