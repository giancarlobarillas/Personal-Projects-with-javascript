var apartment={
    name:'Roosevelt Apartments',
    rooms:15,
    booked:10,
    checkAvailability: function(){
        return this.rooms-this.booked;
    }
};

var elName=document.getElementById('apartmentName');
elName.textContent=apartment.name;

var elApartment=document.getElementById('apartments');
elApartment.textContent=apartment.checkAvailability();