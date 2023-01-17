const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/applications/:applicationId/tags
router.route('/:userId/friends').post(addFriend);

// /api/applications/:applicationId/tags/:tagId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
