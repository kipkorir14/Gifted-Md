/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */

const _0x2c31e6=_0x4225;(function(_0x32d040,_0x37b0f5){const _0x1eee6a=_0x4225,_0x2cb130=_0x32d040();while(!![]){try{const _0x284716=parseInt(_0x1eee6a(0x108))/0x1+-parseInt(_0x1eee6a(0xc4))/0x2*(-parseInt(_0x1eee6a(0xf4))/0x3)+-parseInt(_0x1eee6a(0xfa))/0x4+-parseInt(_0x1eee6a(0xe7))/0x5+parseInt(_0x1eee6a(0xd8))/0x6*(parseInt(_0x1eee6a(0xe2))/0x7)+-parseInt(_0x1eee6a(0xce))/0x8*(-parseInt(_0x1eee6a(0x103))/0x9)+-parseInt(_0x1eee6a(0xb7))/0xa*(parseInt(_0x1eee6a(0xcf))/0xb);if(_0x284716===_0x37b0f5)break;else _0x2cb130['push'](_0x2cb130['shift']());}catch(_0x164bd8){_0x2cb130['push'](_0x2cb130['shift']());}}}(_0x2d6b,0x853e1));import _0x3cef55 from'dotenv';_0x3cef55[_0x2c31e6(0xb1)]();import{makeWASocket,Browsers,jidDecode,makeInMemoryStore,makeCacheableSignalKeyStore,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState,getAggregateVotesInPollMessage}from'@whiskeysockets/baileys';import{Handler,Callupdate,GroupUpdate}from'./funcs/giftedte.js';import{Boom}from'@hapi/boom';import _0x2fe131 from'express';import _0x29a183 from'pino';import _0x38da1f from'fs';import _0x1caca6 from'node-cache';import _0x293045 from'path';import _0x912510 from'chalk';import{writeFile}from'fs/promises';function _0x4225(_0x55e5ec,_0x4823ad){const _0x2d6b9d=_0x2d6b();return _0x4225=function(_0x422571,_0x4a3b88){_0x422571=_0x422571-0xb0;let _0x56b46b=_0x2d6b9d[_0x422571];return _0x56b46b;},_0x4225(_0x55e5ec,_0x4823ad);}import _0x5d594e from'moment-timezone';import _0x9cbea6 from'axios';import _0x21775d from'node-fetch';import*as _0x26765c from'os';import _0x4928f1 from'../set.cjs';import _0x31aa56 from'../gift/giftke.cjs';const {emojis,doReact}=_0x31aa56,sessionName=_0x2c31e6(0xd0),app=_0x2fe131(),orange=_0x912510[_0x2c31e6(0xc5)][_0x2c31e6(0xc0)]('#FFA500'),lime=_0x912510['bold'][_0x2c31e6(0xc0)](_0x2c31e6(0xcb));let useQR,isSessionPutted,initialConnection=!![];const PORT=process[_0x2c31e6(0xbb)][_0x2c31e6(0xd4)]||0x1388,MAIN_LOGGER=_0x29a183({'timestamp':()=>_0x2c31e6(0xdf)+new Date()['toJSON']()+'\x22'}),logger=MAIN_LOGGER['child']({});logger['level']='trace';const msgRetryCounterCache=new _0x1caca6(),store=makeInMemoryStore({'logger':_0x29a183()['child']({'level':_0x2c31e6(0xdd),'stream':_0x2c31e6(0xe9)})});function _0x2d6b(){const _0x15a5d6=['./session/creds.json','message','user','connectionClosed','silent','loggedOut',',\x22time\x22:\x22','SESSION_ID','CHECKING\x20WA\x20VERSION\x20v','7AFxcZG','loadMessage','[♻️]\x20Server\x20Restarting.','restartRequired','Error\x20during\x20auto\x20reaction:','3854405mrIWcg','group-participants.update','store','registered','error','darwin','platform','messages','MODE','statusCode','[😩]\x20Connection\x20closed,\x20reconnecting.','timedOut','GIFTED\x20MD\x20V5\x20IS\x20LIVE!','77514JSCCVq','fromMe','length','bind','key','floor','1216204Aeuftl','exit','♻️\x20Connection\x20reestablished\x20after\x20restart.','AUTO_REACT','public','get','sendMessage','GIFTED\x20MD\x20V5\x20IS\x20ACTIVE','https://pastebin.com/raw/','2772Leyonf','green','blue','Gifted\x20Server\x20Live\x20on\x20Port\x20','[😭]\x20Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.','405609Isfaxu','GIFTED\x20CONNECTING\x20TO\x20WHATSAPP','Linux','split','child',',\x20isLatest:\x20','config','connectionLost','private','text','listMessage','creds','4445190vnURoE','templateMessage','buttonsMessage','remoteJid','env','messages.upsert','writeFileSync','red','string','hex','listen','fatal','send','68yxMYYw','bold','Windows','win32','✅WHATSAPP\x20LOGIN\x20SUCCESSFUL,\x20BOT\x20IS\x20ACTIVE','log','Creds.json\x20file\x20saved\x20in\x20Session\x20Folder','#32CD32','random','Gifted~','23128OCFtmB','33YZqrVi','session','join','121.0.6167.159','/gifted/','PORT','[⏳]\x20Connection\x20Timed\x20Out,\x20Trying\x20to\x20Reconnect.','Session\x20ID\x20Converted\x20to\x20creds.json','chrome','4678326OKsPCq'];_0x2d6b=function(){return _0x15a5d6;};return _0x2d6b();}async function start(){const _0x2cc437=_0x2c31e6;!_0x4928f1['SESSION_ID']?(useQR=![],isSessionPutted=![]):(useQR=![],isSessionPutted=!![]);let {state:_0x3afed1,saveCreds:_0x1ffc08}=await useMultiFileAuthState(sessionName),{version:_0x5c0786,isLatest:_0x5dd354}=await fetchLatestBaileysVersion();console[_0x2cc437(0xc9)](_0x912510['red'](_0x2cc437(0x109))),console[_0x2cc437(0xc9)](_0x912510[_0x2cc437(0x104)](_0x2cc437(0xe1)+_0x5c0786[_0x2cc437(0xd1)]('.')+_0x2cc437(0xb0)+_0x5dd354));const _0x23e092=_0x26765c[_0x2cc437(0xed)]()===_0x2cc437(0xc7)?_0x2cc437(0xc6):_0x26765c[_0x2cc437(0xed)]()===_0x2cc437(0xec)?'MacOS':_0x2cc437(0x10a),_0xd612c9=makeWASocket({'version':_0x5c0786,'logger':_0x29a183({'level':'silent'}),'printQRInTerminal':useQR,'browser':[_0x23e092,_0x2cc437(0xd7),_0x2cc437(0xd2)],'patchMessageBeforeSending':_0x3b408b=>{const _0x45cc3f=_0x2cc437,_0x32c312=!!(_0x3b408b[_0x45cc3f(0xb9)]||_0x3b408b[_0x45cc3f(0xb8)]||_0x3b408b[_0x45cc3f(0xb5)]);return _0x32c312&&(_0x3b408b={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x3b408b}}}),_0x3b408b;},'auth':{'creds':_0x3afed1[_0x2cc437(0xb6)],'keys':makeCacheableSignalKeyStore(_0x3afed1['keys'],_0x29a183({'level':'fatal'})[_0x2cc437(0x10c)]({'level':_0x2cc437(0xc2)}))},'getMessage':async _0x3623c9=>{const _0x56078f=_0x2cc437;if(store){const _0x427ec5=await store['loadMessage'](_0x3623c9[_0x56078f(0xba)],_0x3623c9['id']);return _0x427ec5[_0x56078f(0xda)]||undefined;}return{'conversation':_0x56078f(0x101)};},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'defaultQueryTimeoutMs':undefined,'msgRetryCounterCache':msgRetryCounterCache});store?.[_0x2cc437(0xf7)](_0xd612c9['ev']);if(!_0xd612c9['authState'][_0x2cc437(0xb6)][_0x2cc437(0xea)]&&isSessionPutted){const _0x2e77f8=_0x4928f1[_0x2cc437(0xe0)][_0x2cc437(0x10b)](_0x2cc437(0xcd))[0x1],_0x2c3f24=_0x2cc437(0x102)+_0x2e77f8,_0x5433f3=await _0x21775d(_0x2c3f24),_0x52f93a=await _0x5433f3[_0x2cc437(0xb4)]();typeof _0x52f93a===_0x2cc437(0xbf)&&(_0x38da1f[_0x2cc437(0xbd)](_0x2cc437(0xd9),_0x52f93a),console[_0x2cc437(0xc9)](_0x2cc437(0xd6)),console[_0x2cc437(0xc9)](_0x2cc437(0xca)),await start());}async function _0x12a782(_0x18c20c){const _0x183fed=_0x2cc437;if(store){const _0x536a53=await store[_0x183fed(0xe3)](_0x18c20c[_0x183fed(0xba)],_0x18c20c['id']);return _0x536a53?.[_0x183fed(0xda)];}return{'conversation':_0x183fed(0x101)};}_0xd612c9['ev']['on'](_0x2cc437(0xbc),async _0x1823bb=>await Handler(_0x1823bb,_0xd612c9,logger)),_0xd612c9['ev']['on']('call',async _0x266413=>await Callupdate(_0x266413,_0xd612c9)),_0xd612c9['ev']['on'](_0x2cc437(0xe8),async _0x21c7e8=>await GroupUpdate(_0xd612c9,_0x21c7e8));if(_0x4928f1[_0x2cc437(0xef)]===_0x2cc437(0xfe))_0xd612c9[_0x2cc437(0xfe)]=!![];else _0x4928f1[_0x2cc437(0xef)]===_0x2cc437(0xb3)&&(_0xd612c9[_0x2cc437(0xfe)]=![]);_0xd612c9['ev']['on']('connection.update',async _0x5cfda8=>{const _0x5df8f6=_0x2cc437,{connection:_0x450428,lastDisconnect:_0x41c08d}=_0x5cfda8;if(_0x450428==='close'){let _0x1e2fb1=new Boom(_0x41c08d?.[_0x5df8f6(0xeb)])?.['output'][_0x5df8f6(0xf0)];if(_0x1e2fb1===DisconnectReason[_0x5df8f6(0xdc)])console[_0x5df8f6(0xc9)](_0x912510[_0x5df8f6(0xbe)](_0x5df8f6(0xf1))),start();else{if(_0x1e2fb1===DisconnectReason[_0x5df8f6(0xb2)])console[_0x5df8f6(0xc9)](_0x912510[_0x5df8f6(0xbe)]('[🤕]\x20Connection\x20Lost\x20from\x20Server,\x20reconnecting.')),start();else{if(_0x1e2fb1===DisconnectReason[_0x5df8f6(0xde)])console[_0x5df8f6(0xc9)](_0x912510['red'](_0x5df8f6(0x107))),process[_0x5df8f6(0xfb)]();else{if(_0x1e2fb1===DisconnectReason[_0x5df8f6(0xe5)])console[_0x5df8f6(0xc9)](_0x912510['blue'](_0x5df8f6(0xe4))),start();else _0x1e2fb1===DisconnectReason[_0x5df8f6(0xf2)]&&(console['log'](_0x912510[_0x5df8f6(0xbe)](_0x5df8f6(0xd5))),start());}}}}_0x450428==='open'&&(initialConnection?(console[_0x5df8f6(0xc9)](_0x912510[_0x5df8f6(0x104)](_0x5df8f6(0xc8))),_0xd612c9[_0x5df8f6(0x100)](_0xd612c9[_0x5df8f6(0xdb)]['id'],{'text':'𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃\x20𝐕𝟓\x20𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃\x0a\x0a𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞\x20\x20:\x20Cpanel\x20\x0a𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦:\x20Whatsapp\x20\x0a𝐎𝐰𝐧𝐞𝐫\x20\x20\x20\x20:\x20t.me/giftedmd\x0a𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥𝐬\x20\x20:\x20youtube.com/@giftedtechnexus\x0a𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥\x20:\x20https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l\x0a\x0a>\x20𝐏𝐎𝐖𝐄𝐑𝐄𝐃\x20𝐁𝐘\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐓𝐄𝐂𝐇'}),initialConnection=![]):console[_0x5df8f6(0xc9)](_0x912510[_0x5df8f6(0x105)](_0x5df8f6(0xfc))));}),_0xd612c9['ev']['on'](_0x2cc437(0xbc),async _0x44bc56=>{const _0x5b39df=_0x2cc437;try{const _0x2eff63=_0x44bc56[_0x5b39df(0xee)][0x0];if(!_0x2eff63[_0x5b39df(0xf8)][_0x5b39df(0xf5)]&&_0x4928f1[_0x5b39df(0xfd)]){console[_0x5b39df(0xc9)](_0x2eff63);if(_0x2eff63[_0x5b39df(0xda)]){const _0x40a24a=emojis[Math[_0x5b39df(0xf9)](Math[_0x5b39df(0xcc)]()*emojis[_0x5b39df(0xf6)])];await doReact(_0x40a24a,_0x2eff63,_0xd612c9);}}}catch(_0x5f0fda){console[_0x5b39df(0xeb)](_0x5b39df(0xe6),_0x5f0fda);}});}start(),app[_0x2c31e6(0xff)](_0x2c31e6(0xd3),(_0x53dfa3,_0x40e1d5)=>{const _0x5a602f=_0x2c31e6;_0x40e1d5[_0x5a602f(0xc3)](_0x5a602f(0xf3));}),app[_0x2c31e6(0xc1)](PORT,()=>{const _0x3b4487=_0x2c31e6;console['log'](_0x3b4487(0x106)+PORT);});

/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */