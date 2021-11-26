const express = require('express')

const {validation, ctrlWrapper} =require('../../middlewares')
const {contactSchema} = require('../../schemas')
const {contacts: ctrl} = require('../../controllers')

const validationMiddlware = validation(contactSchema)

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:id', ctrlWrapper(ctrl.getById))

router.post('/', validationMiddlware, ctrlWrapper(ctrl.add))

router.put('/:id', validationMiddlware,  ctrlWrapper(ctrl.updateById))

router.delete('/:id', ctrlWrapper(ctrl.removeById))

module.exports = router
