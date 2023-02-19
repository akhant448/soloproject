const Spending = require('../models/spending.model.js');

module.exports.createSpending = (req,res) => {
    Spending.create(req.body)
        .then(newSpending => res.json(newSpending))
        .catch(err => res.status(400).json(err))
};

module.exports.findAllSpending = (req,res) => {
    Spending.find()
        .then(allSpending => res.json(allSpending))
        .catch(err => res.status(400).json(err))
};

module.exports.findOneSpending =(req,res) => {
    Spending.findOne({_id: req.params.id})
        .then(oneSpending => res.json(oneSpending))
        .catch(err => res.status(400).json(err))
};

module.exports.updateSpending = (req,res) => {
    Spending.findOneAndUpdate({_id: req.params.id}, req.body, {new: true,runValidators: true})
        .then(updatedSpending => res.json(updatedSpending))
        .catch(err => res.status(400).json(err))
};

module.exports.deleteSpending =(req,res) => {
    Spending.deleteOne({_id: req.params.id})
        .then(deletedSpending => res.json(deletedSpending))
        .catch(err => res.status(400).json(err))
};

