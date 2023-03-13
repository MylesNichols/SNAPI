const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
  } = require('../../controllers/thoughtController');
  
  // /api/thoughts
  router.route('/').get(getThoughts);
  
  // /api/thoughts/:_id
  router.route('/:_id').get(getSingleThought);
  
  // /api/thoughts/createthought
  router.route('/createThought').post(createThought);
  
  // /api/thoughts/updateThought/:thoughtId
  router.route('/updateThought/:_id').put(updateThought);
  
  // /api/thoughts/deletethought/:_id
  router.route('/deleteThought/:_id').delete(deleteThought);
  
  module.exports = router;