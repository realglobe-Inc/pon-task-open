/**
 * Define task
 * @function define
 * @param {string} target - Target to open
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const opn = require('opn')

/** @lends define */
function define (target, options = {}) {
  const {wait = false} = options

  async function task (ctx) {
    await opn(target, {wait})
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define
