const model = require('../models/eventsModel');

exports.index = (req, res) => {
    let events = model.find();
    res.render('./events/index', { events })
}

exports.newEvent = (req, res) => {
    res.render('./events/newEvent');
}

exports.postEvent = (req, res) => {
    let event = req.body;
    model.save(event, req.body);
    res.redirect('/events')
}

exports.getEventById = (req, res) => {
    let id = req.params.id;
    let event = model.findById(id);
    if (!event) {
        //implement error handling here
    }
    res.render('./events/event', { event })
}

exports.editEvent = (req, res) => {}

exports.updateEvent = (req, res) => {}

exports.deleteEvent = (req, res) => {}