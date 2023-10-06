const model = require("../models/eventsModel");
const { DateTime } = require("luxon");

exports.index = (req, res) => {
  let events = JSON.parse(JSON.stringify(model.find()));
  events.map((category) => {
    category.events.map((event) => {
      event.startDate = DateTime.fromISO(event.startDate).toLocaleString(
        DateTime.DATETIME_MED
      );
      event.endDate = DateTime.fromISO(event.endDate).toLocaleString(
        DateTime.DATETIME_MED
      );
    });
  });
  res.render("./events/index", { events });
};

exports.newEvent = (req, res) => {
  res.render("./events/newEvent");
};

exports.postEvent = (req, res, next) => {
  let event = req.body;
  let image = "/images/" + req.file.filename;
  // req.body.start = model.convertTime(req.body.start)
  // req.body.end = model.convertTime(req.body.end)
  req.body.image = image;
  model.save(event, req.body);
  res.redirect("/events");
};

exports.getEventById = (req, res, next) => {
  let id = req.params.id;
  let event = JSON.parse(JSON.stringify(model.findById(id)));
  event.startDate = DateTime.fromISO(event.startDate).toLocaleString(
    DateTime.DATETIME_MED
  );
  event.endDate = DateTime.fromISO(event.endDate).toLocaleString(
    DateTime.DATETIME_MED
  );
  console.log(event);
  if (!event) {
    let err = new Error("Cannot find a event with id " + id);
    err.status = 404;
    next(err);
  }
  res.render("./events/event", { event });
};

exports.editEvent = (req, res, next) => {
  let id = req.params.id;
  let event = model.findById(id);
  // console.log(event);
  if (event) {
    res.render("./events/edit", { event });
  } else {
    let err = new Error("Cannot find a event with id " + id);
    err.status = 404;
    next(err);
  }
};

exports.updateEvent = (req, res, next) => {
  let event = req.body;
  event.image = `/images/${req.file.filename}`;
  let id = req.params.id;
  if (model.update(id, event)) {
    res.redirect("/events/" + id);
  } else {
    let err = new Error("Cannot find a event with id " + id);
    err.status = 404;
    next(err);
  }
};

exports.deleteEvent = (req, res, next) => {
  let id = req.params.id;
  if (model.delete(id)) {
    res.redirect("/events");
  } else {
    let err = new Error("Cannot find a event with id " + id);
    err.status = 404;
    next(err);
  }
};
