var count=0;
var count2=0;
function changing(){
    if(count==0)
        {
            document.getElementById("image").src="images/topnote.PNG";
            count=1;
        }
    else
        {
            document.getElementById("image").src="images/nonote.PNG";
            count=0;
        }
}
function changingimage2(){
    document.getElementById("image").src="images/midnote.PNG";
}