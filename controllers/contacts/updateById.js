const { NotFound } = require('http-errors')

const { Contact } = require('../../models')

const updateById = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true }, '_id name email phone favorite')
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
