const _0x57fa13=_0x960f;(function(_0x670ec8,_0x40d1bd){const _0x1ad620=_0x960f,_0x56890d=_0x670ec8();while(!![]){try{const _0x500d72=parseInt(_0x1ad620(0xb5))/0x1*(parseInt(_0x1ad620(0xa8))/0x2)+-parseInt(_0x1ad620(0xa5))/0x3+parseInt(_0x1ad620(0xb7))/0x4+-parseInt(_0x1ad620(0xa3))/0x5+-parseInt(_0x1ad620(0xa6))/0x6+parseInt(_0x1ad620(0xba))/0x7*(-parseInt(_0x1ad620(0xb2))/0x8)+parseInt(_0x1ad620(0xc1))/0x9*(parseInt(_0x1ad620(0xb8))/0xa);if(_0x500d72===_0x40d1bd)break;else _0x56890d['push'](_0x56890d['shift']());}catch(_0x40b103){_0x56890d['push'](_0x56890d['shift']());}}}(_0x5651,0x467f7));function _0x5651(){const _0x4bdaf6=['exports','Login\x20failed\x20for\x20','Login\x20error\x20for\x20','Error\x20reading\x20users\x20from\x20file','!\x20No\x20token\x20returned.','Invalid\x20credentials\x20for\x20','Attempting\x20to\x20login\x20with\x20','8ExrYHD','password','Error\x20logging\x20in\x20with\x20','83822XDepzD','account.json','1628616CaBAxA','623810tpuwBL','email','1643306qZDAxr','Login\x20successful\x20for\x20','../app/src/utils/logger','application/json','token','parse','../app/src/utils/file','108wEfTdb','.\x20Please\x20check\x20your\x20email\x20and\x20password.','promises','stringify','...','text','length','1595045ScjNIn','status','793338NuzfPq','2807184uBriEi','readFile','10mhHqzJ','error','node-fetch'];_0x5651=function(){return _0x4bdaf6;};return _0x5651();}const fetch=require(_0x57fa13(0xaa)),{saveToken,readToken,loadProxies}=require(_0x57fa13(0xc0)),{HttpsProxyAgent}=require('https-proxy-agent'),{logger}=require(_0x57fa13(0xbc)),fs=require('fs');async function readUsersFromFile(){const _0x1b185a=_0x57fa13;try{const _0x1280bc=await fs[_0x1b185a(0xc3)][_0x1b185a(0xa7)](_0x1b185a(0xb6),'utf8');return JSON[_0x1b185a(0xbf)](_0x1280bc);}catch(_0x99545){return logger(_0x1b185a(0xae),_0x1b185a(0xa9),_0x99545),[];}}async function login(_0x166b85,_0x14a9b1,_0x3a1bfc){const _0x45fd13=_0x57fa13,_0x2330b6=new HttpsProxyAgent(_0x3a1bfc);try{const _0x2852a5=await fetch('https://api.pipecdn.app/api/login',{'method':'POST','headers':{'Content-Type':_0x45fd13(0xbd)},'body':JSON[_0x45fd13(0xc4)]({'email':_0x166b85,'password':_0x14a9b1}),'agent':_0x2330b6});if(_0x2852a5['ok']){const _0x3fb2d6=await _0x2852a5['json']();_0x3fb2d6['token']?(await saveToken({'token':_0x3fb2d6[_0x45fd13(0xbe)],'username':_0x166b85}),logger(_0x45fd13(0xbb)+_0x166b85+'!','success')):logger(_0x45fd13(0xac)+_0x166b85+_0x45fd13(0xaf),'error');}else{if(_0x2852a5[_0x45fd13(0xa4)]===0x191)logger(_0x45fd13(0xb0)+_0x166b85+_0x45fd13(0xc2),_0x45fd13(0xa9));else{const _0x45778=await _0x2852a5[_0x45fd13(0xa1)]();logger(_0x45fd13(0xad)+_0x166b85+':',_0x45fd13(0xa9),_0x45778);}}}catch(_0x231ed8){logger(_0x45fd13(0xb4)+_0x166b85+':',_0x45fd13(0xa9),_0x231ed8);}}async function loginWithAllAccounts(){const _0x901d5f=_0x57fa13,_0xa3b934=await loadProxies(),_0xb4d1a4=await readUsersFromFile();for(let _0x1f60a7=0x0;_0x1f60a7<_0xb4d1a4[_0x901d5f(0xa2)];_0x1f60a7++){const _0x1336f4=_0xb4d1a4[_0x1f60a7],_0x174ba4=_0xa3b934[_0x1f60a7%_0xa3b934['length']];logger(_0x901d5f(0xb1)+_0x1336f4[_0x901d5f(0xb9)]+_0x901d5f(0xc5)),await login(_0x1336f4[_0x901d5f(0xb9)],_0x1336f4[_0x901d5f(0xb3)],_0x174ba4);};}function _0x960f(_0xf62274,_0x1d6433){const _0x565162=_0x5651();return _0x960f=function(_0x960fef,_0x40a76f){_0x960fef=_0x960fef-0xa1;let _0x378d2c=_0x565162[_0x960fef];return _0x378d2c;},_0x960f(_0xf62274,_0x1d6433);}module[_0x57fa13(0xab)]={'loginWithAllAccounts':loginWithAllAccounts};
