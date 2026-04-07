'use strict'

module.exports = (...args) => {
  const numArgs = args.length
  if (numArgs !== 2) throw new Error('{{splitColon}} helper expects 2 arguments')

  return args[0].split(':').map((x) => x.trim()).filter((x) => x.length > 0)[0]
}
