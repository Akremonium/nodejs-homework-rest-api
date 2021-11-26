const shortid = require('shortid')

const updateContact = require('./updateContact')
const listContacts = require('./listContacts')

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts()
  const newContact = {
    id: shortid.generate(),
    name,
    email,
    phone,
  }
  contacts.push(newContact)

  await updateContact(contacts)

  return newContact
}

module.exports = addContact
