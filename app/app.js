const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

// express app
const app = express();

// routes
const routes = require('./routes/appRoutes')

app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


app.get("/", (req, res) => {
  res.json({
    title: "My App",
    description: "App stuff!"
  })
})

app.use('/things', routes)

module.exports = app;