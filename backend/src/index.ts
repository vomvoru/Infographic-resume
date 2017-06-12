import * as express from 'express'

const app = express()

app.use(express.static('../frontend'))

app.listen(3000, function() {
  console.log('listening on port 3000')
})
