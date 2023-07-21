const express = require('express');
const { getAllUsers, getUserProfile, createUser, updateUserProfile, deleteUserProfile } = require('../controllers/usersController');

const router = express.Router();

// router.route('/api/v1/users/register').post(validateUserInput,register)
router.route('/api/v1/users').get(getAllUsers)
router.route('/api/v1/users/:id').get(getUserProfile)
router.route('/api/v1/users').post(createUser)
router.route('/api/v1/users/:id').put(updateUserProfile)
router.route('/api/v1/users/:id').delete(deleteUserProfile)
// router.route('/api/v1/users/profile/:id').get(authentication, getProfile)
// router.route('/api/v1/users/profile/:id').put(authentication, validateEmailInput, updateProfile)
// router.route('/api/v1/users/profile/:id').delete(authentication, deleteAccount)

module.exports = router;