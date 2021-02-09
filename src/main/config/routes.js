const { Router: router } = require('express')
const fb = require('fast-glob')

module.exports = app => {
  app.use('/api', router)
  fb.sync('**/src/main/routes/**.js').forEach(file => require(`../../../${file}`)(router))
}
