require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const oysterRoutes = require('./routes/oysters')

// db connection
connection()

// middlewares
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

// routes
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/oysters', oysterRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}...`))