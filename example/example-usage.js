'use strict'

const pon = require('pon')
const open = require('pon-task-open')

;(async () => {
  let run = pon({
    'open:local': open('http://localhost:300', {wait: false})
  })

  run('open:local')
}).catch((err) => console.error(err))
