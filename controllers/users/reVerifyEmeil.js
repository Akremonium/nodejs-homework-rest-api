const { BadRequest, NotFound } = require('http-errors')

const { User } = require('../../models')
const { sendEmail } = require('../../helpers')

const reVerifyEmail = async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })

  if (!email) {
    throw BadRequest('Missing required field email')
  }

  if (!user) {
    throw NotFound()
  }

  if (user.veryfy) {
    throw BadRequest('Verification has already been passed')
  }

  const verificationToken = user.verificationToken

  const mail = {
    to: email,
    subject: 'Email submition',
    html: `<a target="_blanc" href="http://localhost:3000/api/user/verify/${verificationToken}>Submit email</a>`
  }
  await sendEmail(mail)
  res.status(201).json({
    message: 'Verification email sent'
  })
}

module.exports = reVerifyEmail
