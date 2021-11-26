const { NotFound} = require('http-errors')

const contactsOperations = require('../../model/contacts')

const getById = async (req, res) => {
    const { id } = req.params
    const contact = await contactsOperations.getContactById(id)
    if (!contact) {
      throw new NotFound(`Contact with id=${id} not found`)
    }
    res.json(contact)
  }

  module.exports = getById