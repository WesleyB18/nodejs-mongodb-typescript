import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

mongoose.connect('')
  .then(() => console.log('Connected'))
  .catch(error => console.log('Error:', error))

app.listen(3333)
