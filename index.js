/*============≠≠==========≠≠=============\\

skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd
skynerd mod minerd


//=======================================*/

const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap } = require('@adiwajshing/baileys');

//_-_-_-_-_-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-\\

const { hx, fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request, cheerio, ms, ffmpeg, imgbb, googleImage, googleIt, fetch, imageToBase64, webp2gifFile, webp_mp4, EmojiAPI, qrterminal, emoji, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, insert, response, addLimit, getLimit, mediafireDl, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, isFiltered, addFilter, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanime, quizanimais, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, ttthelp, tttme, tttset, esp, kyun, simih, botoff, fechar_abrir_gp, colors } = require('./consts-func.js')

//-_-_-_-_--_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\

const { adeuscara, welcome_group, welcome_group2, bye_group, bye_group2, voting, sotoy, addVote, delVote, countMessage, countMessage_pv, comandos, welkom2, modobn, nsfw, daily, nescessario, welkom, premium, limitefll, antiflood, samih, samih2, _leveling, _level, bancht, anticall, ban, afk, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, antilink, antifake, antilinkhard, autofigu, antilinkgp, antiporn, antiimg, antisticker, antinotas, antictt, anticatalogo, antidoc, antiloc, antipv, antivid, antiaudio, palavra, palavrao } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, cmdmembros, adms, efeitos, menuprem, infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, configbot, hospedar, script, alteradores, destrava, destrava2, tabela,} = require('./consts-func.js')

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./dono/nescessario.json")

const pvzin = JSON.parse(fs.readFileSync('./dono/pvzin.json'))

//====================≠≠===============\\
 
cdd = nescessario.cdd

menu_audio = nescessario.menu_audio
 
crtt = nescessario.crtt
 
fundo1 = nescessario.fundo1

fundo2 = nescessario.fundo2
 
dono2 = nescessario.dono2

dono3 = nescessario.dono3
 
dono4 = nescessario.dono4

dono5 = nescessario.dono5
 
NomeDoBot = setting.NomeDoBot

NickDono = setting.NickDono

numerodono = setting.numerodono 

var prefix = setting.prefix 

banChats = nescessario.banChats 

logo = logoslink.logo

numbernye = '0'

blocked = [] 

hitt = []

var keyale = "Key-saymon(MINERD)2.0"

//=====================================\\

var msgRetryCounterMap = {};

async function startAle() {
  
// ABAIXO: INÍCIO DE CONEXÃO

var qrcode = "./MINERD-QR"

const { state, saveCreds } = await useMultiFileAuthState(qrcode)


const conn = makeWASocket({
logger: P({ level: 'silent' }),
printQRInTerminal: true,
auth: state,
msgRetryCounterMap: MessageRetryMap,
defaultQueryTimeoutMs: undefined, 
keepAliveIntervalMs: 1000 * 60 * 10 * 3
})


conn.ev.process(
  
async(events) => {

//===============(BEM VINDO)=============\\

if(events['group-participants.update']) {
const sky = events['group-participants.update']  

if(sky.participants[0].startsWith(conn.user.id.split(':')[0])) return 
const grpmdt = await conn.groupMetadata(sky.id)

const isGroup2 = grpmdt.id.endsWith('@g.us') 

const GroupMetadata_ = isGroup2 ? await conn.groupMetadata(sky.id): ""
const mdata_ = isGroup2 ? await conn.groupMetadata(sky.id): ""

// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(sky)
if(dbackid.indexOf(sky.id) >= 0) {
if (sky.action == 'add'){ 
num = sky.participants[0]
var ind = dbackid.indexOf(sky.id)
if(adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await conn.sendMessage(mdata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
conn.groupParticipantsUpdate(mdata_.id, [sky.participants[0]], 'remove')
return
}
}
}

// FIM LISTANEGRA CONST ^


// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(sky.id)) {
if (sky.action === 'add' && !sky.participants[0].startsWith(55)){
num = sky.participants[0]
conn.sendMessage(mdata_.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
setTimeout(async() => {
conn.groupParticipantsUpdate(mdata_.id, [sky.participants[0]], 'remove')
}, 1000)
}
}

// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 


if(welkom.includes(sky.id)) {
if(antifake.includes(sky.id) && !sky.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await GroupMetadata_.desc  
  
try {
ppimg = await conn.profilePictureUrl(sky.participants[0])
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

try {
ppgp = await conn.profilePictureUrl(mdata_.id)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(sky.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(sky.id) >= 0) ? true : false

if(sky.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(sky.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', '@'+sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(sky.participants[0].split('@')[0], mdata_.subject)
}
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)

fs.unlinkSync(ran)
conn.sendMessage(mdata_.id, {image: {url:`https://aleatoryapi.herokuapp.com/welcome?titulo=BEM%20VINDO(A)&nome=${sky.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata_.subject)}`},
mentions: sky.participants, caption: teks})
} else if(sky.action === 'remove') {
mem = sky.participants[0]

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

if(isByed) {
var ind = groupIdBye.indexOf(sky.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(sky.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
conn.sendMessage(mdata_.id, {image: {url:`https://aleatoryapi.herokuapp.com/welcome?titulo=Adeus&nome=${sky.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SAIU DE ${encodeUrl(mdata_.subject)}`}, caption: teks, 
mentions: sky.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas não precisa definir,
qualquer dúvida dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite : 
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
  
if(sky.participants[0].startsWith(conn.user.id.split(':')[0])) return 
if(welkom2.includes(sky.id)) {
if(antifake.includes(sky.id) && !sky.participants[0].startsWith(55)) return
try {

const GroupMetadata_2 = isGroup2 ? await conn.groupMetadata(sky.id): ""
  
const mdata_2 = isGroup2 ? await conn.groupMetadata(sky.id): ""

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await GroupMetadata_2.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(sky.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(sky.id) >= 0) ? true : false

if(sky.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(sky.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(sky.participants[0].split('@')[0], mdata_2.subject)
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: sky.participants})

} else if(sky.action === 'remove') {
mem = sky.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(sky.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sky.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(sky.participants[0].split('@')[0])
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: sky.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas
não precisa definir, qualquer dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite :
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
}

async function msg_ups() {
  
if(events['creds.update']) {
await saveCreds()
}  
  
if(events['messages.upsert']) {
const upsert = events['messages.upsert']
for(const info of upsert.messages) {
if(!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return

const baileys = require('@adiwajshing/baileys');
const type = baileys.getContentType(info.message);


global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const isGroup = from.endsWith('@g.us')

if(fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
var prefixo2_on = JSON.parse(fs.readFileSync(`./func/prefixo/prefixo2_${from}.json`))
var prefix = prefixo2_on.prefixo
} else {
var prefix = setting.prefix 
}

//==============(BODY)================\\
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''

const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')

if(fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./func/limitecaracteres/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
var prefixo2_on = JSON.parse(fs.readFileSync(`./func/prefixo/prefixo2_${from}.json`))
var isCmd = budy2.startsWith(prefixo2_on.prefixo)
} else {
var isCmd = budy2.startsWith(prefix)  
}

if(!isCmd && type === "stickerMessage") return

const command = isCmd ? budy2.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//=======================================\\


//===============(BUDY)==================\\

var budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
//======================================\\

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''


//=====================================\\

const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid

const pushname = info.pushName ? info.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)

const botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const argss = body.split(/ +/g)
const testat = body
const ants = body
const tescuk = ["0@s.whatsapp.net"]

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

//=======(ADMS/DONO/ETC..CONST)========\\

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

//============(FUNÇÕES)============\\

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isnit = nit.includes(sender) 

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isAutofigu = isGroup ? autofigu.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

//=======================================\\

if(botoff.includes(from) && !SoDono) return 

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//=====================================\\


//==========(VERIFICADO)===============\\



var blalogoofc = getBuffer(`${logo}`)


var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`, 'jpegThumbnail': blalogoofc}}}

//=====================================\\

const reply = (texto) => {
conn.sendMessage(from, { text: texto }, {quoted: info}).catch(e => {
console.log(e.stack)
})
}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await conn.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }


const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, {sticker: filename}, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, {image: ytb}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, {text: ytb})
}


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
conn.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
	
//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return conn.sendMessage(from,{text: `[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`},{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
conn.sendMessage(from, {text: jrpl.limitend(pushname)}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}
	
const sendFileFromUrl = async (from, url, caption, info, men) => {
let mime = ''; 
let res = await axios.head(url)
mime = res.headers['content-type'] 
if (mime.split("/")[1] === "gif") { 
return conn.sendMessage(from, {video: {url: url},
caption: caption, gifPlayback: true, 
mentions: men ? men : []}, {quoted: info}) 
}
 
let type = mime.split("/")[0]+"Message" 
if(mime === "application/pdf"){ 
return conn.sendMessage(from, {document: {url: url}, mimetype: 'application/pdf', 
caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 

if(mime.split("/")[0] === "image"){ 
return conn.sendMessage(from, {image: {url: url}, caption: caption, mentions: men ? men : []}, {quoted: info}) 
}
if(mime.split("/")[0] === "video"){ 
return conn.sendMessage(from, {video: {url: url}, caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 
if(mime.split("/")[0] === "audio"){ 
return conn.sendMessage(from, {audio: {url: url}, caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: info}) 
}
}
	
const sendMediaURL = async(to, url, text ="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, {type: media, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}}, { quoted: info})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}

const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}

return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

// ENVIAR BOTÃO COM TEXTO
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}

// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// ENVIAR MENU COM GIF OU QUALQUER DO TIPO
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => {
buttonMessage = {
video: {url: gif1},
caption: text1,
gifPlayback: true, 
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {

templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
conn.sendMessage(id, templateMessage, {quoted: vr})
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
conn.sendMessage(id, listMessage)  
}

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
conn.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buff}, {quoted: info}).catch(e => {
})
fs.unlinkSync(rano)
})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 10)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  

txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

conn.sendMessage(from, {text: txt}, {quoted: info})
}
}
 
if(isGroup && fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {

const sairalg = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${from}.json`)); 

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(datinhaofc == sairalg.Data_de_sair) {

group = await conn.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: `Atenção membros, aqui quem está falando é o bot com a mensagem automática, sairei do grupo por o tempo que foi realizado no dia que alugou, completou 30 dias....`,
mentions: mem,
quoted: info
}
conn.sendMessage(from, options)

exec(`cd func && cd sairgp && rm sairgp-${from}.json`)

setTimeout(async() => {
reply(`${prefix}sairgp`)
}, 5000)
}
}

var blaaviso_ndms = `./func/avisos/aviso_${from}.json`

if(fs.existsSync(blaaviso_ndms)) {
async function avsofcbt() {
hora100 = moment.tz('America/Sao_Paulo').format('HH/mm/ss');
var avisos_gps = JSON.parse(fs.readFileSync(blaaviso_ndms))
if(hora100 === avisos_gps.hora) {
conn.sendMessage(from, {text: `${prefix}hidetag ${avisos_gps.texto}`})
}
}
myinterval = setInterval(avsofcbt, 1000)
await setTimeout(async () => {
clearInterval(myinterval);
}, 1000)
}
 
if(fs.existsSync("dados_store.json")) {
statsObj = fs.statSync('./dados_store.json')  

if(convertBytes(statsObj.size) >= "20 MB") {
exec("rm dados_store.json")
}
}
 
if(fs.existsSync(`./func/fgp-${from}.json`)) {
async function fgptotale() {
if(isGroup && fs.existsSync(`./func/fgp-${from}.json`)) {
 
var json_fgp = JSON.parse(fs.readFileSync(`./func/fgp-${from}.json`))
 
var hora_d_agr = moment.tz('America/Sao_Paulo').format('HH/mm/ss'); 

switch(hora_d_agr){
case json_fgp.abrirgp: {
await conn.groupSettingUpdate(from, 'not_announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { 
blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))
}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break

case json_fgp.fechargp: {
await conn.groupSettingUpdate(from, 'announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`  
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { 
blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))
}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break

default:
}
} 
}

myinterval = setInterval(fgptotale, 1000)
await setTimeout(async () => {
clearInterval(myinterval);
}, 1000)
}

require('./msgs.js')(conn, body, reply,from)
//require('./msgs1.js')(conn, body, reply,from)

if(SoDono && budy.includes("reiniciar-sky") || info.key.fromMe && budy.includes("reiniciar-sky")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
console.log(banner3.string)   
console.log(banner2.string)  
console.log(color(
`〔 - _ SKYNERD _ - Por Ordem do meu Dono irei reiniciar..... 〕`))
setTimeout(() => {
startAle()
}, 500)
setTimeout(() => {
fs.unlinkSync("./cnt-upd.json")
}, 1500)
}

if(!isGroup && !info.key.fromMe && ['opa', 'bom dia', 'boa tarde', 'boa noite', 
'oi', 'ola', 'minerd'].indexOf(budy.toLowerCase()) != -1){ sendBimgT(from, `${logo}`, 
`Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
*Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n
*NÃO MANDE ÁUDIO, DIGITE OK*`, "", 
[{index: 1, quickReplyButton: {displayText: 'MENU PRINCIPAL', id: `${prefix}menu2`}}, 
{index: 2, quickReplyButton: {displayText: 'SOBRE A INTERNET', id: `${prefix}net`}},    
{index: 3, quickReplyButton: {displayText: 'SOBRE A IPTV', id: `${prefix}iptv`}},  
{index: 4, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}}], selo)
}


else if(!isCmd && !isGroup && !info.key.fromMe){
if(pvzin.length < 1||!pvzin.map(i => i.id).includes(sender)){
if(pvzin.length < 1||pvzin.map(i => i.id).indexOf(sender) < 0){
sendBimgT(from, `${logo}`, `Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n*NÃO MANDE ÁUDIO, DIGITE OK*?`, "",
[{index: 1,quickReplyButton: {displayText: 'MENU PRINCIPAL', id: `${prefix}menu2`}},
{index: 2, quickReplyButton: {displayText: 'SOBRE A INTERNET', id: `${prefix}net`}},
{index: 3, quickReplyButton: {displayText: 'SOBRE A  IPTV', id: `${prefix}iptv`}},
{index: 4, quickReplyButton: {displayText: 'TESTE DE INTERNET', id: `${prefix}sshgratis`}}], selo)
pvzin.push({id:sender, date:date})
fs.writeFileSync('./dono/pvzin.json', JSON.stringify(pvzin))
}

else if(pvzin[pvzin.map(i => i.id).indexOf(sender)].date != date){
sendBimgT(from, `${logo}`, `Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n*NÃO MANDE ÁUDIO, DIGITE OK*?`, "",
"", [{index: 1, quickReplyButton: {displayText: 'MENU PRINCIPAL', id: `${prefix}menu2`}},
{index: 2, quickReplyButton: {displayText: 'SOBRE A INTERNET', id: `${prefix}net`}},
{index: 3, quickReplyButton: {displayText: 'SOBRE A  IPTV', id: `${prefix}iptv`}},
{index: 4, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id: `${prefix}sshgratis`}}], selo)
pvzin.push({id:sender, date:date})
fs.writeFileSync('./dono/pvzin.json', JSON.stringify(pvzin))

}
}
}

//========================================\\
//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
//========================================\\



//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn && !info.key.fromMe) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`            ◪ LEVEL UP ◪\n\n├─ ❏ NÚMERO: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ XP: ${getLevelingXp(sender)}\n└─ ❏ LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}`)
}
} catch (err) {
console.error(err)
}
}
//=======================================\\



const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}



///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff)
}

if (isAntiLinkHard && isUrl(budy) && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM] - LINK', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${budy}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
return 
}

if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff1 = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff1)
}


//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////,

if(!isGroup && isCmd) console.log(`${colors.brightGreen("[ COMANDO ]")} - [ ${colors.gray(sender.split("@")[0])} ] ${colors.brightRed('- [ PRIVADO - CMD ]')}`)

if(!isGroup && !isCmd && !info.key.fromMe) console.log(`${colors.brightBlue("[ MENSAGEM ]")} - [ ${colors.gray(sender.split("@")[0])} ] ${colors.green('- [ PRIVADO - MSG ]')}`)

if(isCmd && isGroup) console.log(`${colors.brightGreen("[ COMANDO ]")} - [ ${colors.brightWhite(sender.split("@")[0])} ] ${colors.brightCyan(`- [ NO GRUPO ] : [ ${groupName} ]`)}`)

if(!isCmd && isGroup && !info.key.fromMe) console.log(`${colors.brightMagenta("[ MENSAGEM ]")} - [ ${colors.brightWhite(sender.split("@")[0])} ] ${colors.brightCyan(`- [ NO GRUPO ] : [ ${groupName} ]`)}`)

//=================================\\

async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
reply('*Link detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\



if (body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
if(budy.includes("keyale") && !isnit) return reply("Fofo você em kkkkk")
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && budy.length < 100) return  
await conn.sendMessage(from, {text: '*Mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>



//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return conn.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\

if ((isAntiPorn && isBotGroupAdmins)) {
if (type === 'imageMessage') {
buff = await getFileBuffer(info.message.imageMessage, 'image')
ran = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
anu = await fetchJson(`https://nsfw-demo.sashido.io/api/image/classify?url=${res}`)
fs.unlinkSync(ran, buff)
if(anu[0].className === 'Porn' && anu[0].probability >= '0.723584315776825' && isGroupAdmins)  {
await conn.sendMessage(from,{text: `Você é adm, não banirei você por isto..`}, {quoted: info})
fs.unlinkSync(ran, buff)
return
} else if(anu[0].className === 'Sexy' && anu[0].probability >= '0.28157779574394226' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `hummm`}, {quoted: info})
fs.unlinkSync(ran, buff)
return
}
if(anu[0].className === 'Hentai' && isGroupAdmins) {
await conn.sendMessage(from,{text: `Você é adm, não banirei você...`},{quoted: info})
fs.unlinkSync(ran, buff)
return
}  else if(anu[0].className === 'Hentai' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `PORNO DETECTADO, VOCÊ SERÁ BANIDO..`}, {quoted: info})
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
fs.unlinkSync(ran, buff)
}, 2000)
return
}
}
}

// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
conn.ws.on('CB:call', async (B) => {
var msgcallblock = `./func/call/msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR EFETUAR LIGAÇÃO PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if (B.content[0].tag == 'offer') {
conn.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
fs.unlinkSync(msgcallblock)
})
}
}
})
}

//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !SoDono && !isnit) addFilter(sender)

//INICIO DE COMANDO DE PREFIXO
switch(command) {


//=========(-MENUS-DE-CMDS-)========\\

case 'desbanir':
case 'desban':
try {
if(!isPremium) return reply("Só para usuários Premium novinha 😪")
if(!budy.includes("/")) return reply(`Exemplo: ${prefix}desbanir Número banido injustamente/Meu número +55 81 xxx-xxxx foi banido injustamente desbana por favor`)
var [qsp, qsp2] = q.split("/")
await fetchJson(`http://aleatoryapi.herokuapp.com/api/EnviarEmail?titulo=${qsp}&texto=${qsp2}&apikey=${keyale}`)
reply(`Olá : ${pushname} A mensagem foi enviada para o suporte com sucesso BB...`) 
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
conn.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply("Error, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
conn.sendMessage(from, {image: {url: q}}, {quoted: info}).catch(e => {
reply("Error, visualize se este link é válido...")
})
}
break

case 'playstore':
if(!q.length > 2) return reply("Cade o título do apk que deseja pesquisar?")
async function ytsrcbtt() {
var Lrows = []

data = await fetchJson(`http://aleatoryapi.herokuapp.com/api/playstore?q=${q}&apikey=${keyale}`)

for(let a of data.resultados) {
Lrows.push({title: `${a.title}\n\n----------------------------------------------\n`, description: `ID: ${a.appId}\n\n----------------------------------------------\n\nURL: ${a.url}\n\n----------------------------------------------`, rowId: `a`})
}

listMessage = {
text: "Pesquisa realizada: Play Store",
footer: "Canal do Bot : youtube.com/minerdland",
title: `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`,
buttonText: "Lista da pesquisa - Clique aqui!",
sections: [{
title: "Resultado das informações :", 
rows: Lrows
}
]

}
conn.sendMessage(from, listMessage)
}
ytsrcbtt().catch(e => {
reply("Error")
})
break

case 'ytsearch':
if(!q.length > 2) return reply("Cade o título da música que deseja pesquisar?")
async function ytsrcbt() {
var Lrows = []

data = await yts(q) 

for(let a of data.all) {
Lrows.push({title: a.title, description: `Tipo: Audio > Canal: ${a.author.name}\n Duração: ${a.timestamp}`, rowId: `${prefix}down_a ${a.url}`}, {title: a.title, description: `Tipo: Video > Canal: ${a.author.name}\n Duração: ${a.timestamp}`, rowId: `${prefix}down_v ${a.url}`})
}

listMessage = {
text: "Pesquisa realizada.",
footer: "Canal do Bot : youtube.com/minerdland",
title: `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`,
buttonText: "Lista da pesquisa - Clique aqui!",
sections: [{
title: "Resultado da pesquisa :", 
rows: Lrows
}
]

}
conn.sendMessage(from, listMessage)
}
ytsrcbt().catch(e => {
reply("Error")
console.log(e)
})
break

case 'menu2':
botaoale = [
{title: "LISTA",
rows: [
{title: "MENU ADMS", rowId: `${prefix}adms`},
{title: "MENU PARA MEMBROS", rowId: `${prefix}efeitos`},
{title: "MENU PARA DONO", rowId: `${prefix}menudono`},
{title: "AUDIO SOBRE O DONO", rowId: `${prefix}infobot`, description: "SKYMERD"}]
}]
sendlistA(from, "Menu de comandos", "SELECIONE UMA OPÇÃO", "MENU PRINCIPAL", botaoale)
break

case 'menu': case 'comandos': case 'help':
sendBimgT(from, `${logo}`, menu(prefix, NomeDoBot), "", 
[{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'MENU PARA MEMBROS', id: `${prefix}efeitos`}},
{index: 2, quickReplyButton: {displayText: 'MENU ADMNISTRADORES', id: `${prefix}adms`}}, 
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id: `${prefix}sshgratis`}}], selo)
break

case 'audio-menu': 
if(!SoDono) return reply(`Apenas o dono pode executar esta ação!!`)
if(menu_audio === false) {
menu_audio = true
nescessario.menu_audio = menu_audio
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Áudio foi ativado para o menu _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(menu_audio === true) {
menu_audio = false
nescessario.menu_audio = menu_audio
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Áudio foi Desativado do menu _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break

case 'menu':
case 'help':
case 'comandos':
sendBimg(from, `${logo}`, menu(prefix, NomeDoBot), "GUIA DE COMANDOS", [{buttonId: `${prefix}sshgratis`, buttonText: {displayText: `GERAR UM TESTE`}, type: 1}, {buttonId: `${prefix}dono`, buttonText: {displayText: `🔸 COMANDOS DO DONO 🔸`}, type: 1}], selo) 
break 

break
case 'sshgratis':
const senhateste = getRandom('');
        const userteste = `TESTE${senhateste}`;
        
        const child = spawn("bash create_logins/create-teste.sh", {
          shell: true,
          env: {
            SENHA: senhateste,
            LOGIN: userteste,
          },
        });

        child.stdout.pipe(process.stdout);
        
        let testemsg;
        testemsg = `*✅ CRIADO COM SUCESSO !*\n\n`;
        testemsg += `*USUÁRIO:* ${userteste}\n`;
        testemsg += `*SENHA:* ${senhateste}\n`;
        testemsg += "*LIMITE: 1*\n";
        testemsg += "*EXPIRA EM: 2 dias*\n\n";
        testemsg += `Faça o dowload do aplicativo para conexão`
        reply(testemsg)
break

case 'iptv':
texto = `Desde já agradecemos pelo contato!

Você está prestes a usufruir dos serviços da maior plataforma de streaming da América Latina! 

Com todos os canais disponíveis em território brasileiro. 

Tudo isso por apenas R$25,00 mensais🤗🤗 Para você conhecer melhor o nosso serviço, gostaríamos de lhe proporcionar um teste gratuito e sem compromisso por 3h. Você tem disponibilidade para testar agora? 

Escolha A para sim B para não`
sendBtext(from, texto, "Menu iptv", [{buttonId: `A`, buttonText: {displayText: `Sim`}, type: 1}, {buttonId: `B`, buttonText: {displayText: `Não`}, type: 1}], selo) 
break

case 'net':
texto = `Agora sim vou lhe ajudar no que deseja!

Me diga uma coisa aqui meu amigo(a), você ja usou internet por aplicavito ou VPN como é tbem chamado nossa internet?

Escolha Aa para sim Bb para não`
sendBtext(from,texto, "Menu Internet", [{buttonId: `Aa`, buttonText: {displayText: `Sim`}, type: 1}, {buttonId: `Bb`, buttonText: {displayText: `Não`}, type: 1}], selo) 
break

case 'menuadm':
sendBimg(from, `${logo}`, adms(prefix), `☂️`, [
{buttonId: `${prefix}infobot`, buttonText: {displayText: `♦️ ÁUDIO DE INFORMAR SOBRE O DONO ♣️`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `💥 INFORMAÇÕES DO DONO⚡`}, type: 1}], selo) 
break 

case 'cmdmem':  
sendBimg(from, `${logo}`, cmdmembros(prefix), [
{buttonId: `${prefix}menu`, buttonText: {displayText: `VOLTAR`}, type: 1}, {buttonId: `${prefix}menu2`, buttonText: {displayText: `MENU PRINCIPAL`}, type: 1}], selo)
break 

case 'efeitos':  
sendBimg(from, `${logo}`, efeitos(prefix), `🌀`, [
{buttonId: `${prefix}sshgratis`, buttonText: {displayText: `🤡 TESTE SSH GRATIS 🤡`}, type: 1}, {buttonId: `${prefix}menu2`, buttonText: {displayText: `🔸 MENU 🔸`}, type: 1}], selo)
break 

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = setting.numerodono 
await conn.sendMessage(from, {image: {url: logo}, caption: infodono(prefix, numerodn, NomeDoBot)}, {quoted: selo})
break 

case 'alteradores':
await conn.sendMessage(from, {image: {url: logo}, caption: alteradores(prefix)}, {quoted: selo})
break 

case 'menupremium':
case 'menuprem':
await conn.sendMessage(from, {text: menuprem(prefix)}, {quoted: selo})
break

case 'configurar-bot':
await conn.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'comandos-script':
await conn.sendMessage(from, {text: cmd_script(prefix)}, {quoted: selo})
break

case 'hospedar':
await conn.sendMessage(from, {text: hospedar(prefix)}, {quoted: selo})
break

case 'script':
await conn.sendMessage(from, {text: script(prefix)}, {quoted: selo})
break

case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
break 


case 'tabela':
await conn.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava2 (prefix)}, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
await conn.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: selo})
break

case 'infobemvindo':
case 'infobv':  
await conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo : ${prefix}tradutor dog`)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/tradutor?text=${args.join(" ")}&idioma=pt&apikey=${keyale}`)
blatxt = `Olá ${pushname} sua palavra/texto foi traduzida(o) com sucesso ->\n\n ${bla.bla}`
conn.sendMessage(from, {text: blatxt, contextInfo: { externalAdReply:{title: `Traduzido com sucesso`,body:"", previewType:"PHOTO",thumbnail: {url: logo}}}}, {quoted: info}).catch(e => {
reply("ERROR!!")
console.log(e)
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${setting.NomeDoBot}🔥`

conn.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'infocontador':
await conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'databoton':
await conn.sendMessage(from, {text: databoton(prefix)}, {quoted: selo})
break

case 'infolistanegra':
await conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
await conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
await conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

break

case 'ler': 
case 'ocr':   
case 'lerfoto':  
if(!isPremium) return reply(enviar.msg.premium)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
reply(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await conn.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'cep':
if(!q.length > 2) return reply("Cade o cep?")
blacep = await fetchJson(`http://aleatoryapi.herokuapp.com/api/consultacep?cep=${q}&apikey=${keyale}`)

bla_res = `${JSON.stringify(blacep, null, 1)}`

rsp = bla_res.replace(new RegExp(' "', "gi"), "- > ").replace(new RegExp('[{}"]', "gi"), "").replace(new RegExp(',' ,"gi"), "\n").replace(new RegExp(':- >','gi'), '').replace("street", "Rua").replace("city", "Cidade").replace("state", "Estado").replace("neighborhood", "Vizinhança") 

reply(`_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${rsp}\n_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${NomeDoBot}\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-`)
break

case 'placa':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/minerdland`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'repetir':
rsp = q.replace(new RegExp("[()+-/ +a/b/c/d/e/fghijklmnopqrstwuvxyz/]", "gi"), "")
reply(rsp)
break

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(rsp))
return reply(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ Antiaudio: ${isAntiAudio? '✓' : '✕'}
│➱ Antidocumento: ${Antidoc ? '✓' : '✕'}
│➱ Antifake: ${isAntifake ? '✓' : '✕'}
│➱ Antiimg: ${isAntiImg? '✓' : '✕'}
│➱ AntiContato ${isAntiCtt ? '✓' : '✕'}
│➱ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
│➱ Antiligação: ${isAnticall ? '✓' : '✕'}
│➱ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
│➱ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
│➱ AntiCatalogo: ${isAnticatalogo ? '✓' : '✕'}
│➱ AntiPalavrão: ${isPalavrao ? '✓' : '✕'}
│➱ Antivideo: ${isAntiVid ? '✓' : '✕'}
│➱ AntiLocalização: ${Antiloc ? '✓' : '✕'}
│➱ Bemvindo: ${isWelkom ? '✓' : '✕'}
│➱ Simih: ${isSimi ? '✓' : '✕'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`
conn.sendMessage(from, {image: {url: logo}, caption: statuszada, thumbnail: null})
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await conn.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
conn.sendMessage(from, {text: teks, mentions: [mem]}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await conn.profilePictureUrl(from, 'image')
const metadata = await conn.groupMetadata(from) 
conn.sendMessage(from, {image: {url: ppUrl}, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
conn.sendMessage(from, options)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(budy){
if(q.length < 1) return reply('Citar oq?')
conn.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcar':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!')
}
break

case 'marcar2':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec("cd MINERD-QR && rm -rf pre-key* sender* session*")
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
startAle()
}, 1200)
}, 1000)
break

case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!SoDono) return reply("Comando Desativado pelo dono...")
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
add = info.message.extendedTextMessage.contextInfo.participant
sleep(5000)
response2 = await conn.groupParticipantsUpdate(from, [add], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'add':
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(!SoDono) return reply('Comando Desativado por questões de segurança, estava ocasionandoo Ban do número do bot.')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 558198923680`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser = await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')  
reply('Irei adicionar ele(a) em 5 segundos...')  
adduser = info.message.extendedTextMessage.contextInfo.participant
setTimeout(async() => {
responser =  await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch (e){
if(!q.includes("@")) {
var addusr = info.message.extendedTextMessage.contextInfo.participant
} else {
var addusr = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
}
if(String(e).includes("responser is not defined")) {
linkgc = await conn.groupInviteCode(from)  
conn.sendMessage(addusr, {text: `Você está com o número privado para adicionar em grupos, então está ae o link do grupo : https://chat.whatsapp.com/${linkgc}`})
} else {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
}
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
conn.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "demote")
break

case 'bann':
if(!isPremium) return reply("Apenas usuário premium.")
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if(!JSON.stringify(groupMembers).includes(mentioned)) return reply("Este usuário já foi removido do grupo.")
if(premium.includes(mentioned)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
if(groupAdmins.includes(mentioned)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(!JSON.stringify(groupMembers).includes(mentioned2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(mentioned2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned2)) return reply('Não posso remover meu dono 🤧')
if(premium.includes(mentioned2)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
if(groupAdmins.includes(mentioned2)) return mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) - `, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "remove")
}
break

case 'ban': case 'banir': case 'kick':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
try {
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if(!JSON.stringify(groupMembers).includes(mentioned)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(botNumber.includes(mentioned2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned2)) return reply('Não posso remover meu dono 🤧')
if(!JSON.stringify(groupMembers).includes(mentioned2)) return reply("Este usuário já foi removido do grupo.")
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) - `, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "remove")
}
} catch (e) {
console.log(e)
}
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'listagp': //case by: Bielzinho-Bot
if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await conn.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)

teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if(!isAdeusCara) {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')  
}
if(!budy.includes(" ")) {
if(!info.message?.extendedTextMessage?.contextInfo?.participant
) return reply("Marque a mensagem do usuário que deseja add na lista negra, ou coloque o número da fórma que copiou de dados do usuário.")  
var mentioned = info.message?.extendedTextMessage?.contextInfo?.participant

var ind = dbids.indexOf(from)
if(isAdeusCara) {
var numind = adeuscara[ind].number.indexOf(`${mentioned.split("@")[0]}`)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(`${mentioned.split("@")[0]}`)
} else {
adeuscara.push({
groupId: from,
actived: false,
number: [`${mentioned.split("@")[0]}`]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
} else {
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
}
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono && !isnit) return reply("Só dono pode executar este comando..")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
setTimeout(async() => {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}, 1000)
}
}
} else {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
setTimeout(async() => {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}, 1000)
}
}
}
}
break

case 'nome-bot':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = args.join(" ") 
setting.NomeDoBot = NomeDoBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${setting.NomeDoBot}`)
break

case 'nick-dono':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NickDono = args.join(" ")
setting.NickDono = NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nick Do Dono foi configurado para : ${setting.NickDono}`)
break

case 'numero-dono':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
reply(`O número dono foi configurado com sucesso para : ${q}\n\n_ REINICIANDO EM 3. 2 . 1`)
numerodonoofc = setting.numerodono 
numerodonoofc = args.join(" ")
setting.numerodono = numerodonoofc
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
break

case 'prefixo-bot': case 'setprefix':
if (args.length < 1) return
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'a_autorepo':
if(!SoDono) return reply("Apenas dono") 
reply(`Auto Resposta - [ Ativada ] - com sucesso...`)
fs.writeFileSync(`./func/autorepo/autorepo_${from}.json`, JSON.stringify([], null, 2))
break

case 'd_autorepo':
if(!SoDono) return reply("Apenas dono") 
reply(`Auto Resposta - [ Desativada ] - com sucesso...`)
fs.unlinkSync(`./func/autorepo/autorepo_${from}.json`)
break

case 'prefixo_tipo2':
case 'prefixo_tipo_off':  
if (!SoDono  && !isnit) return reply(enviar.msg.donosmt)
if(budy.includes(`prefixo_tipo2`)) {
if(args.length < 1) return reply(`Digite o prefixo que deseja :\nExemplo: ${prefix}prefixo_tipo2 -`)    
var prefixo2_ = {
prefixo: q
}
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo único só para este grupo foi criado com sucesso..\n\n Prefixo: ${q}`)
} else {
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`) 
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo re-criado com sucesso de : ${prefixo2_on.prefixo} para : ${q}`)
}
} else if(budy.includes("prefixo_tipo_off")) {
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) return reply(`Já está no prefixo original do bot, que é : ${setting.prefix}`)
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`)  
reply(`Parabéns, voltou ao prefixo original : ${setting.prefix}`)
}
break

case 'fotomenu':
case 'fundomenu':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./logos/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'setprefixs':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'fotobot':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await conn.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 10)
reply("Olá chefe, foi adicionado 10 Level para você 🙂")
break

case 'ganharxp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")  
addLevelingXp(sender, 5000)
reply("Foi adicionado 5000 mil de XP para você 🙂")
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
            ◪ *REGISTRO* ◪                                                                  
            
  ├─ ❏ *NICK* : ${pushname}
  ├─ ❏ *NÚMERO* : ${sender.split("@")[0]}
  ├─ ❏ *PATENTE* : ${patt}               
  ├─ ❏ *XP* : ${userXp}
  └─ ❏ *LEVEL* : ${userLevel}`
await conn.sendMessage(from, {text: resul}, {quoted: info})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'bcgp':
case 'bcgc':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
conn.sendMessage(_.id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `*「 TM SKYNERD 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'vemqrcode':
if(!SoDono) return reply("Apenas Dono..")
bla = fs.readFileSync("./MINERD-QR")
conn.sendMessage(from, {document: bla, mimetype: 'document/json', fileName: 'ALEATORY-QR.json'})
break

case 'dono2':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de donos do bot ${setting.NomeDoBot} ] 

Dono Oficial do bot: ${setting.numerodono}

- [ 1 ] ${nescessario.dono1}\n- [ 2 ] ${nescessario.dono2}\n- [ 3 ] ${nescessario.dono3}\n- [ 4 ] ${nescessario.dono4}\n- [ 5 ] ${nescessario.dono5}\n- [ 6 ] ${nescessario.dono6} `
reply(p)
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'aviso_gp':
if(!SoDono) return reply("Apenas dono...")
if(budy.includes(`${prefix}execut`) || budy.includes(`=>`) || budy.includes(`>`)) return
if(!budy.includes("|")) return reply(`Cadê a |\nExemplo: ${prefix}aviso_gp jantar já está pronto|19/00/00`)
var[qds, qds2] = q.split("|")  
var blaaviso_ndms = `./func/avisos/aviso_${from}.json`
if(fs.existsSync(blaaviso_ndms)) {
var avisos_gps = JSON.parse(fs.readFileSync(blaaviso_ndms))
}
if(!fs.existsSync(blaaviso_ndms)) {
var avs = {
texto: qds, 
hora: qds2
}
fs.writeFileSync(blaaviso_ndms, JSON.stringify(avs, null, 2))
reply(`Aviso feito com sucesso, programado para todos os dias...`)
} else {
if(fs.existsSync(blaaviso_ndms)) {
fs.unlinkSync(blaaviso_ndms)
var avs = {
texto: qds, 
hora: qds2
}
fs.writeFileSync(blaaviso_ndms, JSON.stringify(avs, null, 2))
reply(`Aviso re-feito com sucesso, programado para todos os dias..`)
}
}
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

conn.sendMessage(from, {text: blity}, {quoted: info})
break

case 'alugado': case 'tempodesair': case 'tempo-aluguel': case 'aluguel': 
if(!SoDono && !info.key.fromMe) return 
txt = args.join(" ")
if(!txt.includes("/")) return reply(`O formato da data é assim : 03/04/22`)
msgz = args.join(" ").replace(" ", "")

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Data_que_alugou: datinhaofc, 
Data_de_sair: msgz
}

if(!fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/sairgp/sairgp-" + from + ".json")) {
fs.unlinkSync("./func/sairgp/sairgp-" + from + ".json");
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo de quando vai expirar o aluguel do bot e irei sair na data exata..`)
break

case 'tempo-fgp': 
if(!SoDono) return 
txt = args.join(" ")
.replace(" |", "|")
.replace("| ", "|")
var [txt1,txt2] = txt.split('|')
var blarpty = {
fechargp: txt1, 
abrirgp: txt2, 
grupoid: from
}

if(!fs.existsSync(`./func/fgp-${from}.json`)) {
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/fgp-" + from + ".json")) {
fs.unlinkSync("./func/fgp-" + from + ".json");
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo determinado..`)
break

case 'fechar-gp':
if(!SoDono) return reply("Comando especial para o dono.")
if(!q.includes("/") && !q.length <= 17) return reply(`Olá, você tem que determinar os 2 tempo pra o bot fechar o grupo e abrir, por exemplo..\n${prefix}fechar-gp 1m/2m\n\nEle fechará o grupo depois de um minuto, e depois abre após 2 minutos....`)
qtxt = args.join(" ").replace(" /", "/").replace("/ ", "/").replace("1m", "60000").replace("2m", "120000").replace("3m", "180000").replace("30m", "1800000").replace("1h", "3600000").replace("2h", "7200000").replace("7h", "25200000")

txt1 = qtxt.split("/")[0]
txt2 = qtxt.split("/")[1]

var fcgp = {
tempo1: txt1, 
tempo2: txt2, 
grupo: from
}

if(!fs.existsSync(`./func/fechar-abrir-gp-${from}.json`)) {
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
} else {
if (fs.existsSync("./func/fechar-abrir-gp-" + from + ".json")) {
fs.unlinkSync("./func/fechar-abrir-gp-" + from + ".json");
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
}
}
reply(`Tempo de fechar o grupo e abrir em tal horário foi programado com sucesso..`)

const tempodttl = JSON.parse(fs.readFileSync(`./func/fechar-abrir-gp-${from}.json`)); 

setTimeout(async () => {
reply("Grupo Fechado..")
await conn.groupSettingUpdate(from, 'announcement')  
}, `${tempodttl.tempo1}`)

setTimeout(async () => {
reply("Grupo Aberto..")
await conn.groupSettingUpdate(from, 'not_announcement')  
}, `${tempodttl.tempo2}`)

break


case 'ausente': case 'off': case 'afk':
if(!SoDono) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")

var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}

if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Mensagem de ausência criada com sucesso...`)
break

case 'ativo': case 'on': case 'voltei':
if(!SoDono) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
break

case 'serpremium':
case 'serprem':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
premium.push(`${setting.numerodono}@s.whatsapp.net`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium.`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.key
}
}
sendMsg = await conn.sendMessage(from, reactionMessage)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
conn.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned]}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${bla.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break
case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
await conn.chatModify({ clear: { message: { id: String, fromMe: true } } }, from, [])
reply("Chat limpo")
break

case 'addpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar':  case 'apagar':  case 'delete':   case 'del':  case 'd':
if (!isGroup)return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'fundobemvindo':
case 'fundobv':  
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'block':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse Número ja esta incluso*')
ban.push(blcp)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'unblock':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
conn.sendMessage(from, {text: jrc.trim(), mentions: ban})
break

case 'acess':
if (!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return conn.sendMessage(from, {text: `root@SKYNERD-BOT:~ ${err}`}, {quoted: info})
if (stdout) {
conn.sendMessage(from, {text: stdout})
}
})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if(budy.includes("limitec")) {
lmt = args[0]
limitecaracteres_ = {
limite: lmt
}
if(!fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
fs.writeFileSync(`./func/limitecaracteres/limite-c_${from}.json`, JSON.stringify(limitecaracteres_, null, 2))
reply(`${limitefl} foi adicionado como limite de caracteres..`)
} else {
fs.unlinkSync(`./func/limitecaracteres/limite-c_${from}.json`)
fs.writeFileSync(`./func/limitecaracteres/limite-c_${from}.json`, JSON.stringify(limitecaracteres_, null, 2))
reply(`foi alterado o limite de caracteres para : ${limitefl}`)
}
} else {
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de caracteres!!`)
}
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
reply(`${e}`)
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'dados':
case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
┏─────── ─ ━
┃ 𝑇𝑒𝑚𝑝𝑜 𝑂𝑛-𝑙𝑖𝑛𝑒: 
┣•  ${kyun(uptime)}
┃
┣• 𝑉𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑𝑒: ${String(r.toFixed(3))}
┃
┣• ${!isGroup ? `𝑈𝑠𝑢𝑎𝑟𝑖𝑜: ${pushname}` :  `𝐺𝑟𝑢𝑝𝑜: ${groupName}`}
┃
┣• 𝐷𝑎𝑡𝑎: ${date} 
┃
┣• 𝐻𝑜𝑟𝑎: ${hora1} 
┃
┗─────── ─ ━
`
await conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'gtts':
if (args.length < 1) return conn.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: info})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: info})
fs.unlinkSync(rano)
})
})
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break


case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: teks1}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break


break

case 'play':
if(!q) return reply(` - Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
reply(enviar.espere)
bla = `☂️ Titulo: ${res.all[0].title}\n\n📉 Visualizações: ${res.all[0].views}\n\n⏰ Tempo: ${res.all[0].timestamp}\n\n🔎 Canal: ${res.all[0].author.name}\n`

sendBimg(from, `${res.all[0].image}`, bla, NomeDoBot, [
{buttonId: `${prefix}down_a ${res.all[0].url}`, buttonText: {displayText: `🎵 Audio`}, type: 1}, {buttonId: `${prefix}down_v ${res.all[0].url}`, buttonText: {displayText: `🎥 Video`}, type: 1}], info)
break 


case 'twitter':
if (!q) return reply('Ops, insira o link.')
sendBtext(from, "✔️ Download De Vídeo / Audio [ TWITTER ]\nEscolha uma opção que deseja baixar.", `☂️`, [
{buttonId: `${prefix}down_v ${q}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}down_a ${q}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
break 

case 'facebook':
if (!q) return reply('Ops, insira o link.')
sendBtext(from, "✔️ Download De Vídeo / Audio [ FACEBOOK ]\nEscolha uma opção que deseja.", `☂️`, [
{buttonId: `${prefix}down_v ${q}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}down_a ${q}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
break 

case 'tiktok':
if (!q) return reply('Ops, insira o link.')
sendBtext(from, "✔️ Download De Vídeo / Audio [ TIKTOK ]\nEscolha uma opção que deseja.", `☂️`, [
{buttonId: `${prefix}down_v ${q}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}down_a ${q}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
break 

case 'ytmp3':
case 'down_a':
try {
if(!q) return 
if(q.includes("facebook")) {
reply("Só baixo no formato fb.watch")
}
if(q.includes("youtu") && !q.includes("share")) {
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
}
reply(enviar.espere)
conn.sendMessage(from, {audio: {url:`http://aleatoryapi.herokuapp.com/api/download/?url=${q}&apikey=${keyale}`}, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
console.log(e)
reply("Error")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log(e)
reply('ERROR!!')
}
}
break

case 'ytmp4':
case 'down_v':
try {
if(!q) return
if(q.includes("facebook")) {
reply("Só baixo no formato fb.watch")
}
if(q.includes("youtu") && !q.includes("share")) {
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
}
reply(enviar.espere)
conn.sendMessage(from, {video: {url:`http://aleatoryapi.herokuapp.com/api/download/?url=${q}&apikey=${keyale}`}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
console.log(e)
reply("Error")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log(e)
reply('ERROR!!')
}
}
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
conn.sendMessage(i, {text: txt})
}
reply(`Enviando com sucesso `)
}
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
await conn.sendMessage(from, {image: {url: teste.profile_pic_url}, caption: `${corno}`}, {quoted:info})
break

case 'celular': //alterado
if (!q) return reply(`Qual celular você está procurando?`)
ane = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
busca_celular = `📝 Titulo: ${ane.judul}
❗Última atualização: ${ane.rilis}
📱 Tamanho do celular: ${ane.ukuran}
⚡ Tipo: ${ane.type}
🗃️ Armazenamento: ${ane.storage}
📴 Tela: ${ane.display}
📳 Polegada: ${ane.inchi}
🔰 Resolução da câmera: ${ane.pixel}
📲 Resolução do video: ${ane.videoPixel}
💭 Ram do celular: ${ane.ram}
👤 Hardware do celular: ${ane.chipset}
⚠️ Bateria: ${ane.batrai}
🔋 Tipo da bateria: ${ane.merek_batre}`
conn.sendMessage(from, {image: {url: `${ane.thumb}`}, caption: `${busca_celular}`}, {quoted: info})
break

case 'gimage':
try {
blar = Math.floor(Math.random() * 300)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/gimage?txt=${q}&apikey=${keyale}`)
conn.sendMessage(from, {image: {url:bla.resultado.result[`${blar}`].url}}, {quoted: info}).catch(e => {
reply("ERROR, não foi encontrado, tente novamente...")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'join': case 'entrar':
if (!SoDono) return reply('Somente proprietário!')
string = args.join(' ')
if (!string) return reply('Insira um link de convite ao lado do comando.')
if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
await conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if (String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if (String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'play2':
try {
playzin = args.join(" ") 
if(!playzin) return reply('Cade o nome da música?')
reply(enviar.espere)
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
bla = bla.resultado
pla = `Titulo: ${bla.titulo}\n`
pla += `Visualizações: ${bla.visu}\n`
pla += `Publicado : ${bla.publicado}\n\n`
pla += `Enviando o áudio, vai demorar pra caramba, OK?`
conn.sendMessage(from, {image: {url: bla.thumb}, caption: `${pla}`}, {quoted: info})
conn.sendMessage(from, {audio: {url: bla.url}, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply(`desculpe mas não achei o que você quer.`)
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'play3':
try {
if(!q) return reply(`Cade o nome da música?`)
reply(enviar.espere)
res = await yts(q)

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: {url: res.all[0].image}, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp3-2?q=${res.all[0].url}&apikey=${keyale}`)
conn.sendMessage(from, {audio: {url: bla[0].link}, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('Error')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'playmp4':
try {
if(!q) return reply(`Cade o nome da música?/Video?`)
reply(enviar.espere)
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: {url: res.all[0].image}}, {quoted: info})
blad = await fetchJson(`http://aleatoryapi.herokuapp.com/api/playmp4_2022?titulo=${q}&apikey=${keyale}`)
conn.sendMessage(from, {video: {url: blad.resultado.dl_link}, mimetype: 'video/mp4', fileName: `${blad.resultado.title}`}, {quoted: info}).catch(async(e)=> {
conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
conn.sendMessage(from, {video: {url: bla.resultado.url}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!')
})
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

//============(CASE-BEM-VINDO/E ETC..)=========\\

case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//=====================================\\



//=================(ANTS)=================\\

case 'antictt':
case 'anticontato':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'botoff':
case 'boton':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("Só dono pode executar esta ação...")
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (botoff.includes(from)) return reply('Ja esta ativo')
botoff.push(from)
fs.writeFileSync('./datab/grupos/botoff.json', JSON.stringify(botoff))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if (Number(args[0]) === 0) {
if (!botoff.includes(from)) return reply('Ja esta Desativado')
pesquisar = from
processo = botoff.indexOf(pesquisar)
while(processo >= 0){
botoff.splice(processo, 1)
processo = botoff.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/botoff.json', JSON.stringify(botoff))
reply(`Ativando todos os funcionamentos do bot novamente...`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('🌀 Ativou com sucesso o recurso de anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. info.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'reiniciar':
if(!SoDono) return
rp = (Date.now() / 1000) - info.messageTimestamp
blar = process.uptime()
startAle()
reply(`Reiniciei em ${String(rp.toFixed(3))}m\n\nTempo Ativo : ${kyun(blar)}`)
break

case 'antiporno':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPorn) return reply('Ja esta ativo')
antiporn.push(from)
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('🌀 Ativou com sucesso o recurso de antiporn neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPorn) return reply('Ja esta Desativado')
pesquisar = from
processo = antiporn.indexOf(pesquisar)
while(processo >= 0){
antiporn.splice(processo, 1)
processo = antiporn.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('‼️ Desativou com sucesso o recurso de antiporn neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./armor/funcoes/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no script, pois no site ou lugar diferente do script que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
pesquisar = from
processo = samih2.indexOf(pesquisar)
while(  processo >= 0){
samih2.splice(processo, 1)
processo = samih2.indexOf(pesquisar)
}
fs.writeFileSync('./armor/funcoes/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autofigu': case 'autosticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkgp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from, emoji.images[idemot].url, info)
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI..")
})
break

case 'emoji-mix':
case 'emojimix':
try {
textoo = args.join(' ')
textoo1 = textoo.split('+')[0]
textoo2 = textoo.split('+')[1]
bau = require('./armor/funcoes/emoji.js')
sitee = bau.Semoji(textoo1, textoo2)
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `SKYNERD - MD`, `SKYNERD`)
imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: imageBuffer}, {quoted: info})
fs.unlinkSync('./imagem.webp')
} catch {
try {
textoo = args.join(' ')
textoo1 = textoo.split('+')[0]
textoo2 = textoo.split('+')[1]
bau = require('./armor/funcoes/emoji.js')
sitee = bau.Semoji(textoo1, textoo2)
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `SKYNERD - MD`, `SKYNERD`)
imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: imageBuffer}, {quoted: info})
fs.unlinkSync('./imagem.webp')  
} catch {
reply('*Ops não foi possivel fazer esse mix de emoji...*')
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'rename':
case 'roubar':  
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case 'fstiker': 
case 'fsticker':
case 'f':
async function stickerffc() {
await setTimeout(async () => {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
reply(enviar.espere) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
}, 1000)
}
stickerffc().catch(e => {
console.log(e)
reply("ERROR")
})
break 

case 'st':
case 'stk':
case 'sticker':
case 's':
async function stickerfc() {
await setTimeout(async () => {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
reply(enviar.espere)
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
}, 1000)
}
stickerfc().catch(e => {
console.log(e)
reply("ERROR")
})
break

case 'toimg':
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'infosorteio':
case 'helpsorteio':  
await conn.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
break

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
conn.sendMessage(from, {text:'Substituido com sucesso..'},{quoted: info})
} else {
reply('nao deu')
}
break

case 'index-bot':
if(!SoDono)return reply('Só meu dono')
if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
conn.sendMessage(from, {text:'Pronto novinha..'},{quoted: info})
} else {
reply('nao deu')
}
break

case 'promover': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja promover ele pra administrador ou marque com ${prefix}promover @marcar-ele`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "promote")  
} else {
if(q.length > 15) return reply('Só pode promover uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi promovido(a) para [ ADMINISTRADOR ] com sucesso.`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "promote")
}
break

case 'rebaixar': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja promover ele pra administrador ou marque com ${prefix}promover @marcar-ele`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]}  Foi Rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "demote")  
} else {
if(q.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi Rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "demote")
}
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(info.key.fromMe) return 
function banirtodos() {
var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
nmrbot = botNumber.split("@")[0]
var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
if(resp === setting.numerodono || resp === nmrbot) {
return
} else {
conn.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
}
}
myinterval = setInterval(banirtodos, 1000)
if(groupMembers.length <= 2) {
clearInterval(myinterval);
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
//======================================\\



//==========(TTPS/ATTP/TTM)============\\

case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
reply(enviar.espere)
await conn.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`}}, {quoted: info}).catch(async (e) => {
conn.sendMessage(from, {sticker: {url:`http://aleatoryapi.herokuapp.com/api/attp?q=${q}&apikey=${keyale}`}}, {quoted: info}).catch(e => {
reply("ERROR...")
})
})
break

case 'ttp':
try {
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `http://aleatoryapi.herokuapp.com/api/ttp?texto=${string}&apikey=${keyale}`
sendStickerFromUrl(from, post, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
await conn.sendMessage(from, {sticker: {url:`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`}}, {quoted: info})
} catch {
reply('ERROR')
}
break	


//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'nick':
case 'gerarnick':
case 'fazernick':
try {
nick = args.join(' ')
if(!nick) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`https://aleatoryapi.herokuapp.com/api/fazernick?nome=${nick}&apikey=${keyale}`)
.then(dados => {
var emoji = `🔮`
nicks = dados.data
txt = '💈Nicks Gerados Com Sucesso!💈\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n\n
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'chance':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var avb = body.slice(7)
if (args.length < 1) return conn.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
await conn.sendMessage(from, {text: hasil, contextInfo: {mentionedJid: [sender]}}, {quoted: info})
break

case 'inativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
if(countMessage[ind].numbers[indnum].messages == 2570) {
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? -1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais inativos do grupo :\n\n'
try {
for (let i = 0; i < groupMembers.length; i++) {
if (i) boardi += `${i}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `A`}, {quoted: info})
}
}
break

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: info})
}
break

case 'rankinativo':
case 'rankinativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 6 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages > b.messages) ? 0 : -1)
mentioned_jid = []
boardi = 'Rank dos mais ghost do Grupo:\n\n'
try {
for (let i = 0; i < 6; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 5) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`		
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, {text: `É necessário 6 jogadores para se construir um ranking`}, {quoted: info})
}
break


case 'checkativo':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
conn.sendMessage(from, {text: leaderboardlvl, sendEphemeral: true}, {quoted: selo})
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break


//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'simi':
if(isSimi) return reply('Desativado')
text = args.join(" ")
data = await fetchJson(`https://simsimi.info/api/?text=${text}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

//========================================\\


//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = fs.readFileSync('audios/qviado.mp3')
await conn.sendMessage(from, {audio: soundft, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'infobot':
const cmdoo = fs.readFileSync('audios/infobot.mp3')
await conn.sendMessage(from, {audio: cmdoo, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if ((isMedia && isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if ((isMedia && isQuotedVideo) && args.length == 0) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if ((isMedia && isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o áudio..")
}
break

//=========(FIM-ALTERAR-AUDIO)===========\\


//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\

//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
conn.sendMessage(from, {video: {url: a}, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'triggered':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info.message.imageMessage
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
post = await fetchJson(`https://aleatoryapi.herokuapp.com/canvas/trigger?url=${res}&apikey=${keyale}`)
sendStickerFromUrl(from, {sticker: post}, {quoted:info})
} else {
reply('Marque a imagem')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'rip':  
case 'morto':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url: `http://aleatoryapi.herokuapp.com/canvas/rip?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'lgbt':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`https://aleatoryapi.herokuapp.com/canvas/lgbt?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'trash':
case 'lixo':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatoryapi.herokuapp.com/canvas/trash?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'preso':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`https://aleatoryapi.herokuapp.com/canvas/jail?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'borrar':
case 'figuborrada':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`https://aleatoryapi.herokuapp.com/canvas/blur?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'hitler':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatoryapi.herokuapp.com/canvas/hitler?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'deletef':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatoryapi.herokuapp.com/canvas/delete?url=${link}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'wanted':
case 'procurado':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
conn.sendMessage(from, {image: {url:`http://aleatoryapi.herokuapp.com/canvas/procurado?url=${link}&apikey=${keyale}`}}, {quoted: info}).catch(e => {
reply("Error!!")  
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'comporn':
try {
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
await conn.sendMessage(from, {image: {url:`https://aleatoryapi.herokuapp.com/canvas/phub?nome=${jrr}&msg=${jrr1}&foto=https://telegra.ph/file/954832554bf2b2e40f932.jpg&apikey=${keyale}`}}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break 

case 'legenda':
try {
gh = args.join(" ")        
txt1 = gh.split('/')[0] || ''
txt2 = gh.split('/')[1] || ''
if(!gh.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedSticker)) {
base64 = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
link = await upload(base64)
conn.sendMessage(from, {image: {url:`https://aleatoryapi.herokuapp.com/api/legenda?url=${link}&texto1=${encodeUrl(txt1)}&texto2=${encodeUrl(txt2)}&apikey=${keyale}`}}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sendBtext(`${setting.numerodono}@s.whatsapp.net`,`✔️ Convite para entrar em um Grupo\n\nLink : ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `☂️`, [
{buttonId: `${prefix}entrar ${cnvt}`, buttonText: {displayText: `Aceitar`}, type: 1},
{buttonId: `${prefix}recusar ${sender}`, buttonText: {displayText: `Recusar`}, type: 1}], selo)
break

case 'recusar':
if(!SoDono) return reply("Só dono...")
conn.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join': case 'entrar':
if (!SoDono) return reply('Somente proprietário!')
string = args.join(' ')
if (!string) return reply('Insira um link de convite ao lado do comando.')
if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
await conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if (String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if (String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break
//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (isAntiFlood && budy.length >= limitefl && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
setTimeout( () => {
return reply('Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.')
console.log(color('Deram Spam de caracteres..','red'))
}, 100)
setTimeout(async () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

if(fs.existsSync(`./func/autorepo/autorepo_${from}.json`) && !info.key.fromMe) {


if(budy2.includes("bot")) {
blars = ["oi delícia", "oi amor da minha vida", "oi princesa do meu coração"] 
blarnd = blars[Math.floor(Math.random() * blars.length)]
reply(blarnd)  
}

if (budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if (budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
adivinha = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'WhatsApp web';
await conn.sendMessage(from, {text: adivinha}, {quoted: info})
}

if (messagesC == "corno"){
tujuh = fs.readFileSync('./audios/corno.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao && isBotGroupAdmins) { //CREDITOS TIAGO
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
 conn.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : info})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
conn.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : info}).catch(e => {
conn.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : info})
})       							
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 
//================(SIMIH-2)=================\\

if (!isCmd && isSimi2 && isGroup) {
if(isCmd || isUrl(budy2)) return
if(budy.length >= 500) return 
if(budy.includes("@55")) return
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) conn.sendMessage(from, {text: sami, thumbnail: blalogoofc}, {quoted: info});
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}


//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if (isCmd) {
uptime = process.uptime() 
conn.sendMessage(from, {text: `
┏━━━┅━━━━━━ ━ ━━
┗━ ━━ SKYNERD
┃
┃• _Comando Inesistente ✧࿐
┃
┃• _Digite_ : ${prefix}menu
┃
┃• _Hora_ : ${hora2}
┃
┗────────────────╯`}, {quoted: selo}) 
}
//========================================\\

}
}
}
}
msg_ups().catch(e => {
console.log(e)
})  

if(events['connection.update']) {
const update = events['connection.update']  
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(connection === "open") {
console.log(banner3.string)   
console.log(banner2.string)  
console.log(color(
`〔 - _ SKYNERD 1.1_ - CONECTADO COM SUCESSO.. 〕`))
}
require("./armor/conect.js")(conn, connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications, qrcode)
}

}

)
return conn

}

startAle().catch(e => {
console.log(e.stack+" -CONEXÃO...")
})

exports.startAle = startAle

file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color("Atualizando, index.js...", "green"))
delete require.cache[file]
require(file)
})
