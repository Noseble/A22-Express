const express = require('express') 
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const start = "首頁"

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index', { start })
})


app.listen(port, () => {
  console.log(`~~~`)
})

app.get('/:paging', (req, res) => {
  let pagings = { paging: req.params.paging }

  res.render('show', { paging: pagings })
})
