const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/appController');


router.route('/').get(getThoughts).post(createThoughts);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtsId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
