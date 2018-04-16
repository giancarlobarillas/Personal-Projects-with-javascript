var startItem=document.getElementById('two');
var prevItem=startItem.previousElementSibling;//need to PES instead of previoussibling since PS takes a nodelist instead of individual node.
var nextItem=startItem.nextElementSibling;

prevItem.className='remove';
nextItem.className='cold';