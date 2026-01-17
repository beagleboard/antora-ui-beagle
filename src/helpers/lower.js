'use strict'

module.exports = (...args) => {
  const numArgs = args.length
  if (numArgs !== 2) throw new Error('{{lower}} helper expects 2 arguments')
  return args[0].toString().toLowerCase()
}
