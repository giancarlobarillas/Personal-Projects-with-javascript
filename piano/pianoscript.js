var count=0;
var count2=0;
var count3=0;
var counter=0;
var pianoMidArray=[{name:'F Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'E Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'D Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'C Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'B Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'A Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'G Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'F Note',image:'images/emptyline.PNG',pressed:0},
                   {name:'E Note',image:'images/emptyline.PNG',pressed:0}];

function changing(){
    if(count==0)
        {
            pianoMidArray[0].image='images/linenote.PNG';
            var list=document.getElementById("myList");
            list.removeChild(list.childNodes[0]);
            var node = document.createElement("LI");
            var divadd = document.createElement("div");
            divadd.innerHTML='<img src="'+pianoMidArray[0].image+'">';
            node.appendChild(divadd);
            document.getElementById("myList").appendChild(node); 
        }
    else
        {
            pianoMidArray[0].image='images/emptyline.PNG';
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
function createpiano() {
    for(var i=0;i<9;i++){
        var node = document.createElement("LI");
        var divadd = document.createElement("div");
        divadd.innerHTML='<img src="'+pianoMidArray[i].image+'">';
        node.appendChild(divadd);
        document.getElementById("myList").appendChild(node);   
    }
}
