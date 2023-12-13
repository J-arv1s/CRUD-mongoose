const Article = require('../models/Article')
const mongoose = require('mongoose')

const index = async (req, res) => {
    const articles = await Article.find({}).sort({createdAt: -1})
    res.status(200).json(articles)
}

const show = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'ID not valid'})
    }

    const article = await Article.findById(id)
    if(!article){
        return res.status(404).json({error: 'No Arcticle Found'})
    }
    res.status(200).json(article)
}

const create = async (req, res) => {
    const {title, body} = req.body
    try {
        const article = await Article.create({title, body})
        res.status(201).json(article)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const update = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'ID not valid'})
    }

    const articleToUpdate = await Article.findOneAndUpdate({_id: id}, {...req.body})
    if(!articleToUpdate){
        return res.status(404).json({error: 'No Arcticle Found'})
    }
    res.status(200).json(articleToUpdate)
}

const destroy = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'ID not valid'})
    }

    const articleToDelete = await Article.findOneAndDelete({_id: id})
    if(!articleToDelete){
        return res.status(404).json({error: 'No Arcticle Found'})
    }
    res.status(204).json(articleToDelete)
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}