/* eslint-disable eol-last */
/* eslint-disable no-redeclare */
/* eslint-disable indent */
'use strict';

var dailyHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ];
var table = document.getElementById('stores');


var cities = [seattle, tokyo, dubai, paris, lima];

function Stores(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookieHoursArray = [];
    this.dailyTotal = 0;
    cities.push(this);

}

Stores.prototype.getRandomCustomerCount = function() {
    var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return randomNumber;
};



Stores.prototype.calcCookieHours = function() {
    this.dailyHours = dailyHours;

    for (var i = 0; i < dailyHours.length; i++) {
        var averCookies = Math.ceil(this.avg * this.getRandomCustomerCount());
        this.cookieHoursArray.push(averCookies);
        this.dailyTotal += averCookies;
    }


};

Stores.prototype.render = function() {

    var trElement = document.createElement('tr');
    var thStoreElement = document.createElement('th');
    thStoreElement.textContent = this.name;
    trElement.appendChild(thStoreElement);
    for (var i = 0; i < this.dailyHours.length; i++) {
        var tdElement = document.createElement('td');
        tdElement.textContent = this.cookieHoursArray[i];
        trElement.appendChild(tdElement);
    }
    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.dailyTotal;
    trElement.appendChild(tdTotal);
    table.appendChild(trElement);


};



var seattle = new Stores('SEATTLE', 23, 65, 6.3);
var tokyo = new Stores('TOKYO', 3, 24, 1.2);
var dubai = new Stores('DUBAI', 11, 38, 3.7);
var paris = new Stores('PARIS', 20, 38, 2.3);
var lima = new Stores('LIMA', 2, 16, 4.6);


var cities = [seattle, tokyo, dubai, paris, lima];

var addStores = document.getElementById('addStores');

function getNewStores(event) {
    event.preventDefault();


    var name = event.target.name.value;
    var min = event.target.min.value;
    var max = event.target.max.value;
    var avg = event.target.avg.value;
    new Stores(name, min, max, avg);


    createTable();

}




function makeHeader() {
    var trHeader = document.createElement('tr');
    var tdHeader = document.createElement('td');
    tdHeader.textContent = '';

    trHeader.appendChild(tdHeader);
    for (var i = 0; i < dailyHours.length; i++) {
        var thHeader = document.createElement('th');

        thHeader.textContent = dailyHours[i];
        trHeader.appendChild(thHeader);

    }
    var thEndTotal = document.createElement('th');
    thEndTotal.textContent = 'TOTAL';
    trHeader.appendChild(thEndTotal);

    table.appendChild(trHeader);

}

function getTotal() {
    var trTotal = document.createElement('tr');
    var thSpace = document.createElement('th');
    thSpace.textContent = 'TOTAL';
    trTotal.appendChild(thSpace);
    var magicSquare = 0;
    for (var i = 0; i < dailyHours.length; i++) {
        var bottomTotal = 0;
        for (var j = 0; j < cities.length; j++) {
            bottomTotal += cities[j].cookieHoursArray[i];
            magicSquare += cities[j].cookieHoursArray[i];
        }
        var tdTotal = document.createElement('td');
        tdTotal.textContent = bottomTotal;
        trTotal.appendChild(tdTotal);
    }
    table.appendChild(trTotal);
    var tdMagicSquare = document.createElement('td');
    tdMagicSquare.textContent = magicSquare;
    trTotal.appendChild(tdMagicSquare);

}


function createTable() {
    table.innerHTML = '';
    makeHeader();


    for (var i = 0; i < cities.length; i++) {
        cities[i].calcCookieHours();
        cities[i].render();
    }

    getTotal();
}

createTable();

addStores.addEventListener('submit', getNewStores);