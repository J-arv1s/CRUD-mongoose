require('dotenv').config()

const app = require("./app")
const mongoose = require('mongoose')


// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for req
    app.listen(process.env.PORT, () => {
        console.log(`App connected to DB && listening on ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
