const _0x399dc4=_0x544e;(function(_0x1c0ec2,_0x54f0bb){const _0x761e59=_0x544e,_0x42b1fe=_0x1c0ec2();while(!![]){try{const _0x3d3866=-parseInt(_0x761e59(0x131))/0x1*(parseInt(_0x761e59(0x154))/0x2)+parseInt(_0x761e59(0x139))/0x3*(parseInt(_0x761e59(0x14c))/0x4)+-parseInt(_0x761e59(0x148))/0x5*(parseInt(_0x761e59(0x12c))/0x6)+parseInt(_0x761e59(0x138))/0x7*(-parseInt(_0x761e59(0x12f))/0x8)+parseInt(_0x761e59(0x152))/0x9*(-parseInt(_0x761e59(0x146))/0xa)+parseInt(_0x761e59(0x151))/0xb*(parseInt(_0x761e59(0x144))/0xc)+-parseInt(_0x761e59(0x13f))/0xd*(-parseInt(_0x761e59(0x149))/0xe);if(_0x3d3866===_0x54f0bb)break;else _0x42b1fe['push'](_0x42b1fe['shift']());}catch(_0x38a5fc){_0x42b1fe['push'](_0x42b1fe['shift']());}}}(_0x55a3,0xd948b));const fetch=require('node-fetch'),{readToken,loadProxies}=require(_0x399dc4(0x14f)),{HttpsProxyAgent}=require(_0x399dc4(0x13b)),{logger}=require(_0x399dc4(0x13c)),fs=require('fs')['promises'],API_BASE=_0x399dc4(0x14a);async function runNodeTests(){const _0x463fdb=_0x399dc4,_0x573200=await loadProxies();if(_0x573200[_0x463fdb(0x13d)]===0x0){logger('No\x20proxies\x20available.\x20Please\x20check\x20your\x20proxy.txt\x20file.',_0x463fdb(0x147));return;}try{const _0x4cc257=new HttpsProxyAgent(_0x573200[0x0%_0x573200[_0x463fdb(0x13d)]]),_0x49a937=await fetch(API_BASE+_0x463fdb(0x145),{'agent':_0x4cc257}),_0x4f82d5=await _0x49a937[_0x463fdb(0x153)](),_0x47cab7=await readToken();for(let _0x5b60ec=0x0;_0x5b60ec<_0x4f82d5[_0x463fdb(0x13d)];_0x5b60ec++){const _0x46604c=_0x4f82d5[_0x5b60ec],_0x44bc44=_0x573200[_0x5b60ec%_0x573200[_0x463fdb(0x13d)]],_0x34f36e=new HttpsProxyAgent(_0x44bc44);logger(_0x463fdb(0x13e)+_0x46604c[_0x463fdb(0x132)]+_0x463fdb(0x12d)+_0x44bc44);const _0x4295a6=await testNodeLatency(_0x46604c,_0x34f36e);logger('Node\x20'+_0x46604c[_0x463fdb(0x132)]+'\x20('+_0x46604c['ip']+_0x463fdb(0x133)+_0x4295a6+'ms');for(const {token:_0x49a6b1,username:_0x5d53b4}of _0x47cab7){await reportTestResult(_0x46604c,_0x4295a6,_0x49a6b1,_0x34f36e,_0x5d53b4);}}logger('All\x20node\x20tests\x20completed!\x20Results\x20sent\x20to\x20backend.','success');}catch(_0x2f36d5){logger('Error\x20running\x20node\x20tests:',_0x463fdb(0x147),_0x2f36d5);}}async function testNodeLatency(_0x7b105c,_0x40d560){const _0x13ea21=_0x399dc4,_0x26629d=Date['now'](),_0x4e6b1f=0x1388;try{return await Promise[_0x13ea21(0x143)]([fetch(_0x13ea21(0x13a)+_0x7b105c['ip'],{'mode':_0x13ea21(0x14e),'agent':_0x40d560}),new Promise((_0x3785af,_0x88862a)=>setTimeout(()=>_0x88862a(new Error(_0x13ea21(0x135))),_0x4e6b1f))]),Date[_0x13ea21(0x12e)]()-_0x26629d;}catch(_0xafbc83){return-0x1;}}async function reportTestResult(_0x1b0c68,_0xfaff14,_0x54b4a7,_0x37679d,_0x2d2b3b){const _0x1b947d=_0x399dc4;if(!_0x54b4a7){logger('No\x20token\x20found.\x20Skipping\x20result\x20reporting.','warn');return;}try{const _0x1ed012=await fetch(API_BASE+_0x1b947d(0x14d),{'method':'POST','headers':{'Content-Type':'application/json','Authorization':'Bearer\x20'+_0x54b4a7},'body':JSON[_0x1b947d(0x150)]({'node_id':_0x1b0c68['node_id'],'ip':_0x1b0c68['ip'],'latency':_0xfaff14,'status':_0xfaff14>0x0?_0x1b947d(0x134):_0x1b947d(0x141)}),'agent':_0x37679d});_0x1ed012['ok']?logger(_0x1b947d(0x140)+_0x1b0c68[_0x1b947d(0x132)]+_0x1b947d(0x142)+_0x2d2b3b,_0x1b947d(0x12b)):logger(_0x1b947d(0x136)+_0x1b0c68[_0x1b947d(0x132)]+_0x1b947d(0x142)+_0x2d2b3b+':','error',await _0x1ed012[_0x1b947d(0x137)]());}catch(_0x3ea9ec){logger(_0x1b947d(0x130)+_0x1b0c68[_0x1b947d(0x132)]+_0x1b947d(0x142)+_0x2d2b3b+':',_0x1b947d(0x147),_0x3ea9ec);}}function _0x544e(_0x40f7e8,_0x431c60){const _0x55a3ca=_0x55a3();return _0x544e=function(_0x544e63,_0x4ad7b3){_0x544e63=_0x544e63-0x12b;let _0x510b3f=_0x55a3ca[_0x544e63];return _0x510b3f;},_0x544e(_0x40f7e8,_0x431c60);}module[_0x399dc4(0x14b)]={'runNodeTests':runNodeTests};function _0x55a3(){const _0xebfacd=['offline','\x20for\x20','race','262956tHRrVX','/nodes','43770wDMvfi','error','667790WBzIwa','448qzSuuW','https://pipe-network-backend.pipecanary.workers.dev/api','exports','4aeEznI','/test','no-cors','../app/src/utils/file','stringify','11qxTteV','2727IqtvjX','json','2949470hMWMqf','success','78OaTgAx','\x20using\x20proxy:\x20','now','8GMsawS','Error\x20reporting\x20node\x20','1tCjiXF','node_id',')\x20latency:\x20','online','Timeout','Failed\x20to\x20report\x20node\x20','text','4402251MYozeU','2384601WcqoPn','http://','https-proxy-agent','../app/src/utils/logger','length','Testing\x20node\x20','2128477ZrEBSC','Reported\x20result\x20node\x20ID:\x20'];_0x55a3=function(){return _0xebfacd;};return _0x55a3();}