var count=0;
var count2=0;
var count3=0;
var counter=0;
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
    if(count2==0)
        {
            document.getElementById("image2").src="images/linenote.PNG";
            count2=1;
        }
    else
        {
            document.getElementById("image2").src="images/emptyline.PNG";
            count2=0;
        }
}
function changemid(){
    if(count3==0)
    {
        document.getElementById("image").src="images/midnotetop.PNG";
        document.getElementById("image2").src="images/midnotebot.PNG";
        count3=1;
    }
    else
    {
        document.getElementById("image").src="images/emptyline.PNG";
        document.getElementById("image2").src="images/emptyline.PNG";
        count3=0;
    }
}
function myFunction() {
    for(var i=0;i<9;i++){
    var node = document.createElement("LI");
    var divadd = document.createElement("div");
    counter++;
    divadd.innerHTML=counter;
    node.appendChild(divadd);
    document.getElementById("myList").appendChild(node);   
    }
}
