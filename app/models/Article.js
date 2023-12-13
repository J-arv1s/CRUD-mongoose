const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, "An article must have a title"],
    unique: true
  },
  body: {
    type:  String,
    required: [true, "You can't have an empty article"]
  }
}, { timestamps: true })

const Article = mongoose.model('Article', articleSchema)

module.exports = Article