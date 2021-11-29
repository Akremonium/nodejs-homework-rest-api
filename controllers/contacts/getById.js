const { NotFound } = require('http-errors')

const { Contact } = require('../../models')

const getById = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findById(id)
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json(contact)
}

module.exports = getById
