const { NotFound} = require('http-errors')

const contactsOperations = require('../../model/contacts')

const removeById = async (req, res) => {
    const { id } = req.params
    const result = await contactsOperations.removeContact(id)
    if (!result) {
      throw new NotFound(`Product with id=${id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'Success delete'
    })
}

  module.exports = removeById