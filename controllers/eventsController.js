const model = require('../models/eventsModel');

exports.index = (req, res) => {
    let events = model.find();
    // events.map(event => {
    //     event.events.forEach(singleEvent => {
    //         console.log(singleEvent)
    //         singleEvent.startDate = model.convertTime(singleEvent.startDate);
    //         singleEvent.endDate = model.convertTime(singleEvent.endDate);
    //     })
    // })
    // events.map(event =>{
        console.log(events)
    // })
    res.render('./events/index', { events })
}

exports.newEvent = (req, res) => {
    res.render('./events/newEvent');
}

exports.postEvent = (req, res) => {
    let event = req.body;
    req.body.start = model.convertTime(req.body.start)
    req.body.end = model.convertTime(req.body.end)
    model.save(event, req.body);
    res.redirect('/events')
}

exports.getEventById = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    if (!event) {
        let err = new Error("Cannot find a event with id " + id);
        err.status = 404;
        next(err);
    }
    res.render('./events/event', { event })
}

exports.editEvent = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    console.log(event);
    if (event) {
        res.render("./events/edit", { event });
    } else {
        let err = new Error("Cannot find a event with id " + id);
        err.status = 404;
        next(err);
    }
}

exports.updateEvent = (req, res, next) => {
    let event = req.body;
    let id = req.params.id;
    if (model.update(id, event)) {
        res.redirect('/events')
    } else {
        let err = new Error("Cannot find a event with id " + id);
        err.status = 404;
        next(err);
    }
}

exports.deleteEvent = (req, res, next) => {
    let id = req.params.id
    if (model.delete(id)) {
        res.redirect("/events");
    } else {
        let err = new Error("Cannot find a event with id " + id);
        err.status = 404;
        next(err);
    }
}