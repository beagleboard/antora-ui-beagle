'use strict'

module.exports = (...args) => {
  const numArgs = args.length
  if (numArgs < 3) throw new Error('{{concat}} helper expects at least 2 arguments')
  args.pop()
  return args.join('')
}
