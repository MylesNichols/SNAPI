const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers);

// /api/users/:_id
router.route('/:_id').get(getSingleUser);

// /api/users/createUser
router.route('/createUser').post(createUser);

// /api/users/updateUser/:_id
router.route('/updateUser/:_id').put(updateUser)

// /api/users/deleteUser/:_id
router.route('/deleteUser/:_id').delete(deleteUser)

module.exports = router;