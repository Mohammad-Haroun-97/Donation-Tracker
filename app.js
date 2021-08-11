"use strict"
let form=document.getElementById('form')
let result=document.getElementById('result')
let table=document.createElement('table')
let clear=document.getElementById('clear')
result.appendChild(table)

Donation.total=[];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function Donation(name,amount,age) {

    this.name=name;
    this.amount=amount;
    this.age=age;
    Donation.total.push(this)
    
}


function header() {
    let tr=document.createElement('tr')
    table.appendChild(tr)
    let th=document.createElement('th')
    tr.appendChild(th)
    th.textContent="Donator Name"

    let th2=document.createElement('th')
    tr.appendChild(th2)
    th2.textContent="Donation Amount "

    let th3=document.createElement('th')
    tr.appendChild(th3)
    th3.textContent="Age"

    
}




form.addEventListener('submit',userDonation)

function userDonation(event) {
    console.log(event);
    event.preventDefault();

    let nameEvent=event.target.DonatorName.value
    let amountEvent=event.target.DonationAmount.value
    let ageEvent=random(20,60);

   let newDonation= new Donation(nameEvent,amountEvent,ageEvent)
   set();
   newDonation.render();



    
}


Donation.prototype.render=function () {

    let tr=document.createElement('tr')
    table.appendChild(tr)
    let th=document.createElement('th')
    tr.appendChild(th)
    th.textContent=this.name

    let th2=document.createElement('th')
    tr.appendChild(th2)
    th2.textContent=this.amount

    let th3=document.createElement('th')
    tr.appendChild(th3)
    th3.textContent=this.age
    
}



function set() {

    localStorage.setItem('info',JSON.stringify(Donation.total))
    
}


function get() {

    let call=localStorage.getItem('info')
    let parsedArray=JSON.parse(call)

    if (parsedArray!==null) {

        for (let i = 0; i < parsedArray.length; i++) {
            new Donation(parsedArray[i].name,parsedArray[i].amount,parsedArray[i].age)
            
        }
        
    }
    
}

header();
get();
for (let i = 0; i < Donation.total.length; i++) {
    Donation.total[i].render();
    
}

/////STretch Goal///
clear.addEventListener('click',remove)
function remove(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
    
}