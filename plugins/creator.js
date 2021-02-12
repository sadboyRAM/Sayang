let handler = function (m) {
  // this.sendContact(m.chat, '6282323835783', 'Nurutomo', m)
  this.sendContact(m.chat, '6282323835783', 'Admin DrawlNag', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
