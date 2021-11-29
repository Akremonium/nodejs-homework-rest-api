const express = require('express')

const { ctrlWrapper, validation } = require('../../middlewares/index')
const { joiContactSchema, statusSchema } = require('../../models')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:id', ctrlWrapper(ctrl.getById))

router.post('/', validation(joiContactSchema), ctrlWrapper(ctrl.add))

router.put('/:id', validation(joiContactSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:id/favorite', validation(statusSchema), ctrlWrapper(ctrl.updateStatusContact))

router.delete('/:id', ctrlWrapper(ctrl.removeById))

module.exports = router
