var el=document.querySelector('li.hot');
el.className='cold';

var hotlist=document.querySelectorAll('li.hot');
for(var i=0;i<2;i++){
    hotlist[i].className='cold';
}