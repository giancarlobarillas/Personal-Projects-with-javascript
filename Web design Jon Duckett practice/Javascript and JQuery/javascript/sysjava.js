var today=new Date();
var year=today.getFullYear();
var final="The current year is: "+year;
var el=document.getElementById('message');
el.textContent=final;

var msg='<h2>Browser Window</h2>';
msg+='<p>width:'+window.innerWidth+'</p>';
msg+='<p>height:'+window.innerHeight+'</p>';
msg+='<h2>History</h2>';
msg+='<p>items:'+window.history.length+'</p>';
msg+='<h2>Screen</h2>';
msg+='<p>width:'+window.screen.width+'</p>';
msg+='<p>height:'+window.screen.height+'</p>';
var el=document.getElementById('info');
el.innerHTML=msg;