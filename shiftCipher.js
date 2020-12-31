const alphabetArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
)

class ShiftCipher {
  constructor(shiftValue) {
    this.shiftValue = shiftValue
  }

  encrypt(string) {
    const stringsArray = string.split('')
    const results = stringsArray.map(char => {
      if (alphabetArray.includes(char)) {
        if (char === 'z' || (char === 'Z' && this.shiftValue === 1)) {
          return 'a'
        }
        const index = alphabetArray.indexOf(char)
        return alphabetArray[index + this.shiftValue]
      } else {
        return char
      }
    })

    return results.join('').toUpperCase()
  }

  decrypt(encryptedMessage) {
    const encryptedMessageArray = encryptedMessage.split('')
    const results = encryptedMessageArray.map(char => {
      if (alphabetArray.includes(char)) {
        if (char === 'a' || (char === 'A' && this.shiftValue === 1)) {
          return 'z'
        }
        const index = alphabetArray.indexOf(char)
        return alphabetArray[index - this.shiftValue]
      } else {
        return char
      }
    })

    return results.join('').toLowerCase()
  }
}
