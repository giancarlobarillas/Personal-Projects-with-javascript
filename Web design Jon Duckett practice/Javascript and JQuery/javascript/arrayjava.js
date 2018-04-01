var colors=new Array('White','Black','Blue','Red');
var counter=0;

function myFunction(){
    if(counter>colors.length)
        {
            counter=0;
            var el=document.getElementById('color');
            el.textContent=colors[counter];
            counter++;
        }
    else{
        var el=document.getElementById('color');
        el.textContent=colors[counter];
        counter++;
    }
}