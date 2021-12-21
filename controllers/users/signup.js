const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')

const { sendEmail } = require('../../helpers')
const { User } = require('../../models')

const signup = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user) {
    throw new Conflict(`Email ${email} in use`)
  }

  const avatarURL = gravatar.url(email)
  const verificationToken = nanoid()
  const newUser = new User({ email, avatarURL, verificationToken })

  newUser.setPassword(password)
  newUser.save()

  const mail = {
    to: email,
    subject: 'Email submition',
    html: `<a target="_blanc" href="http://localhost:3000/api/user/verify/${verificationToken}>Submit email</a>`
  }
  await sendEmail(mail)
  res.status(201).json({
    user: {
      email,
      subscription: 'starter'
    }
  })
}

module.exports = signup
