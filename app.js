const express = require('express')
const app = express()
// const logger = require('./logger')

// function sayHello(name) {
//   console.log('Hello ' + name)
// }

// sayHello('Uriel')

const listOfCourses = [1, 2, 3]
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/api/courses', (req, res) => {
  res.send(listOfCourses)
})
app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id)
})

//PORT
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port + ${port}...`))
