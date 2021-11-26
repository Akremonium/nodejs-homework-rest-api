const {NotFound, BadRequest} = require('http-errors')

const contactsOperations = require('../../model/contacts')

const updateById = async (req, res) => {
    const { id } = req.params
    const result = await contactsOperations.updateContactById(id, req.body)
    if (!result) {
      throw new NotFound(`Product with id=${id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  }

  module.exports = updateById