var count=0;
var count2=0;
function changing(){
    if(count==0)
        {
            document.getElementById("image").src="images/linenote.PNG";
            count=1;
        }
    else
        {
            document.getElementById("image").src="images/emptyline.PNG";
            count=0;
        }
}
function changingimage2(){
    document.getElementById("image2").src="images/linenote.PNG";
}
function changeboth(){
    document.getElementById("image").src="images/midnotetop.PNG";
    document.getElementById("image2") src="images/midnotebot.PNG";
}