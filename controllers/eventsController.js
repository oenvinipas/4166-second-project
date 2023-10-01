const model = require('../models/eventsModel');

exports.index = (req, res) => {
    let events = model.find();
    res.render('./events/index', { events })
}

exports.newEvent = (req, res) => {}

exports.postEvent = (req, res) => {}

exports.getEventById = (req, res) => {}

exports.editEvent = (req, res) => {}

exports.updateEvent = (req, res) => {}

exports.deleteEvent = (req, res) => {}