const _0x5e93cf=_0xb1e8;(function(_0x219009,_0x48648f){const _0x3347a8=_0xb1e8,_0x2dee18=_0x219009();while(!![]){try{const _0x38b2e2=parseInt(_0x3347a8(0x207))/0x1*(-parseInt(_0x3347a8(0x1f1))/0x2)+-parseInt(_0x3347a8(0x1f5))/0x3+parseInt(_0x3347a8(0x208))/0x4+parseInt(_0x3347a8(0x1f0))/0x5*(parseInt(_0x3347a8(0x1f6))/0x6)+-parseInt(_0x3347a8(0x1f9))/0x7*(-parseInt(_0x3347a8(0x1fe))/0x8)+parseInt(_0x3347a8(0x205))/0x9+parseInt(_0x3347a8(0x1ea))/0xa*(parseInt(_0x3347a8(0x1fd))/0xb);if(_0x38b2e2===_0x48648f)break;else _0x2dee18['push'](_0x2dee18['shift']());}catch(_0x367610){_0x2dee18['push'](_0x2dee18['shift']());}}}(_0x369a,0xc5dba));const fs=require('fs')[_0x5e93cf(0x203)],{logger}=require(_0x5e93cf(0x1f8)),TOKEN_FILE=_0x5e93cf(0x206);async function saveToken(_0x60b04){const _0x450928=_0x5e93cf;try{let _0x1fe38e=[];try{const _0x22c31a=await fs[_0x450928(0x209)](TOKEN_FILE,_0x450928(0x201));_0x1fe38e=JSON[_0x450928(0x1fa)](_0x22c31a);}catch(_0x368ebe){logger(_0x450928(0x1ec),_0x450928(0x1ef));}const _0x3886a3=_0x1fe38e[_0x450928(0x204)](_0x5e233f=>_0x5e233f[_0x450928(0x1f3)]===_0x60b04[_0x450928(0x1f3)]);_0x3886a3?logger(_0x450928(0x202)+_0x60b04['username']+'\x20already\x20exists.'):(_0x1fe38e[_0x450928(0x1fc)](_0x60b04),await fs[_0x450928(0x1fb)](TOKEN_FILE,JSON[_0x450928(0x1ee)](_0x1fe38e,null,0x2)),logger('Token\x20saved\x20successfully!',_0x450928(0x1f7)));}catch(_0x16451d){logger(_0x450928(0x200),'error',_0x16451d);}}async function readToken(){const _0x469dda=_0x5e93cf;try{const _0x190397=await fs[_0x469dda(0x209)](TOKEN_FILE,_0x469dda(0x201));return JSON[_0x469dda(0x1fa)](_0x190397);}catch{logger(_0x469dda(0x1f4),'error'),process[_0x469dda(0x1f2)](0x1);}}function _0xb1e8(_0x3b050d,_0x3dc842){const _0x369a57=_0x369a();return _0xb1e8=function(_0xb1e89f,_0x2e4a24){_0xb1e89f=_0xb1e89f-0x1e9;let _0x390562=_0x369a57[_0xb1e89f];return _0x390562;},_0xb1e8(_0x3b050d,_0x3dc842);}function _0x369a(){const _0x596fb=['24177UkQkbv','3894512wSvqpW','readFile','trim','10lxpifX','proxy.txt','No\x20previous\x20tokens\x20found.','exports','stringify','error','45355dUbzrO','70kIaocp','exit','username','No\x20tokens\x20found.\x20Please\x20login\x20first.','323502xokmZY','228uOnLtG','success','./logger','1897091XHbZcn','parse','writeFile','push','1314533lxQGxc','8DoQPzE','Error\x20reading\x20proxy\x20file:','Error\x20saving\x20token:','utf8','Token\x20for\x20','promises','some','500517msKWXp','tokenz.json'];_0x369a=function(){return _0x596fb;};return _0x369a();}async function loadProxies(){const _0xab42e=_0x5e93cf;try{const _0x1aa29a=await fs[_0xab42e(0x209)](_0xab42e(0x1eb),_0xab42e(0x201));return _0x1aa29a['split']('\x0a')['filter'](_0x58c8d7=>_0x58c8d7[_0xab42e(0x1e9)]()!=='');}catch(_0x59c4b9){return logger(_0xab42e(0x1ff),_0xab42e(0x1ef),_0x59c4b9),[];}}module[_0x5e93cf(0x1ed)]={'saveToken':saveToken,'readToken':readToken,'loadProxies':loadProxies};