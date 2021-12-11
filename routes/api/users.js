const express = require('express')

const { ctrlWrapper, validation, auth, upload } = require('../../middlewares/index')
const { users: ctrl } = require('../../controllers')
const { joiUserSchema } = require('../../models')

const router = express.Router()

router.post('/signup', validation(joiUserSchema), ctrlWrapper(ctrl.signup))
router.post('/login', validation(joiUserSchema), ctrlWrapper(ctrl.login))
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))
router.post('/logout', auth, ctrlWrapper(ctrl.logout))
router.patch('/', auth, ctrlWrapper(ctrl.updateSubscription))
router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar))

module.exports = router
