const { NotFound } = require('http-errors')

const { Contact } = require('../../models')

const updateStatusContact = async (req, res) => {
  const { id } = req.params
  const { favorite } = req.body

  if (!favorite) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'missing field favorite',
      data: 'Not found'
    })
  }

  const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true })
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'succsess',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateStatusContact
