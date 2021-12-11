const express = require('express')

const { ctrlWrapper, validation, auth } = require('../../middlewares')
const { joiContactSchema, statusSchema } = require('../../models')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', auth, ctrlWrapper(ctrl.getAll))

router.get('/:id', auth, ctrlWrapper(ctrl.getById))

router.post('/', auth, validation(joiContactSchema), ctrlWrapper(ctrl.add))

router.put('/:id', auth, validation(joiContactSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:id/favorite', auth, validation(statusSchema), ctrlWrapper(ctrl.updateStatusContact))

router.delete('/:id', auth, ctrlWrapper(ctrl.removeById))

module.exports = router
