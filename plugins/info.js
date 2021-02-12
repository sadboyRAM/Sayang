let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: RAMA GANSS
Script: @sadboy.genz
Github: 
https://github.com/

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @sadboy.genz
➥ YouTube:
youtube.com/RAMA GANSS

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Telkom: 6282323835783
╠➥ treee: 0895355566000
╠➥ TOM: 6282323835783
║>Request? Wa.me/6282323835783
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

