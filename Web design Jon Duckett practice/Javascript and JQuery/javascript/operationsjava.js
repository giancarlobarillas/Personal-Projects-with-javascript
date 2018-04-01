var greeting="Hello";
var name="Giancarlo";
var total=40+32;
var welcomemessage=greeting+" "+name+"!";

var el=document.getElementById('title');
el.textContent=welcomemessage;

var elfirst=document.getElementById('first');
elfirst.textContent=greeting;
var elsecond=document.getElementById('second');
elsecond.textContent=name;

var eltotal=document.getElementById('add');
eltotal.textContent=total;
