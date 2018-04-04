function apartments(name, apartments, booked){
    this.name=name;
    this.apartments=apartments;
    this.booked=booked;
    this.checkAvailability=function(){
        return this.apartments-this.booked;
    };
}

var loft=new apartments('Loft Roosevelt',15,10);
var bongo=new apartments('Bongo Apartments', 5,2);

var first=loft.name+' rooms: ';
first+=loft.checkAvailability();
var second=bongo.name+' rooms: '+bongo.checkAvailability();

elFirst=document.getElementById('first');
elSecond=document.getElementById('second');

elFirst.textContent=first;
elSecond.textContent=second;