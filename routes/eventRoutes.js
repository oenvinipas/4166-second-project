const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventsController');

// GET /events - send all events to the user
router.get('/', controller.index)

// GET /events/new - send html for creating a new event
router.get('/new', controller.newEvent);

// POST /events - create a new event and redirect user back to all of the events
router.post('/', controller.postEvent);

// GET /events/:id - send details for the event with the given id
router.get('/:id', controller.getEventById);

// GET /events/:id/edit - send details for the event that will be edited with the given id
router.get('/:id/edit', controller.editEvent);

// PUT /events/:id - update the event with the given id and redirect user back to all of the event with the given id
router.put('/:id', controller.updateEvent)

// DELETE /events/:id - delete the event with the given id
router.delete('/:id', controller.deleteEvent)


module.exports = router;