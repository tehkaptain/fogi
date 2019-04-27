const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const fs = require('fs')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/loadMap', (req, res) => res.send('resources/Level2.png'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
