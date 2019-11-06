const express = require('express')
const app = express()
// const logger = require('./logger')

// function sayHello(name) {
//   console.log('Hello ' + name)
// }

// sayHello('Uriel')

// SETUP HEADERS AND CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

const listOfCourses = [1, 2, 3]
app.get('/', (req, res) => {
  res.send('Hello API')
})

app.get('/api/courses', (req, res) => {
  res.send(listOfCourses)
})
app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id)
})

//PORT
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}...`))
