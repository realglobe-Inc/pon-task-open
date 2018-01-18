/**
 * pon task to open files
 * @module pon-task-open
 * @version 1.0.1
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
