const port = process.env.PORT || 3000
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const { generateProductsByPage } = require('./products')

const app = express()

app.use(helmet())
app.use(bodyParser.json())

app.get('/', (_, res) => {
  res.status(200).send({
    status: 'healthy',
    routes: {
      '/products': {
        method: 'GET',
        response: 'application/json'
      }
    }
  })
})

app.get('/products', (req, res) => {
  const page = Number.parseInt(req.query.page) || 1
  const nextPage = page + 1
  res.status(200).send({
    products: generateProductsByPage(page),
    nextPage: `${req.headers.host}/products?page=${nextPage}`
  })
})

app.listen(port, _ => console.log(`App listening on port ${port}`))
