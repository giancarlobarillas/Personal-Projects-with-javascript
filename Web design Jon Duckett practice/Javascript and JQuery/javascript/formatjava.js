var randomNum=Math.random()*100

var msg='<h2>Original Number: </h2><p>'+randomNum+'</p>';
msg+='<h2>3 Decimal Places: </h2><p>'+randomNum.toFixed(3)+'</p>';
msg+='<h2>3 Digits: </h2><p>'+randomNum.toPrecision(3)+'</p>';
msg+='<h2>Floored: </h2><p>'+Math.floor(randomNum)+'</p>';
var el=document.getElementById('info');
el.innerHTML=msg;