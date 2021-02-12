let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [0895355566000]
│ • Telkomsel [6282323835783]
│ • Pulsa[0895355566000]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895355566000
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 081357302007
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
