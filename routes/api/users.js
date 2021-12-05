const express = require('express')

const { ctrlWrapper, validation } = require('../../middlewares/index')
const { users: ctrl } = require('../../controllers')
const { joiUserSchema } = require('../../models')

const router = express.Router()

router.post('/signup', validation(joiUserSchema), ctrlWrapper(ctrl.signup))
router.post('/login', validation(joiUserSchema), ctrlWrapper(ctrl.login))

module.exports = router
