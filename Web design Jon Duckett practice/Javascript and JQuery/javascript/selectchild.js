//This is a very specific way to coding 
//the li elements are imbedded in the ul tag

var ullist = document.getElementsByTagName('ul')[0];
var first = ullist.firstChild;
var last = ullist.lastChild;

first.className = 'remove';
last.className = 'cold';