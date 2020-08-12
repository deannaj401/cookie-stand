/* eslint-disable eol-last */
/* eslint-disable no-redeclare */
/* eslint-disable indent */
'use strict';

var dailyHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ];
var table = document.getElementById('stores');

function Stores(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookieHoursArray = [];
    this.dailyTotal = 0;

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
    var tdElement = document.createElement('td');
    tdElement.textContent = this.name;
    trElement.appendChild(tdElement);

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

// create the header output
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
    var tdEndTotal = document.createElement('td');
    tdEndTotal.textContent = 'TOTAL';
    trHeader.appendChild(tdEndTotal);

    table.appendChild(trHeader);

}
makeHeader();

seattle.calcCookieHours();
tokyo.calcCookieHours();
dubai.calcCookieHours();
paris.calcCookieHours();
lima.calcCookieHours();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// build the footer
function getTotal() {
    var trTotal = document.createElement('tr');
    var tdSpace = document.createElement('td');
    tdSpace.textContent = 'TOTAL';
    trTotal.appendChild(tdSpace);


    for (var i = 0; i < dailyHours.length; i++) {
        var bottomTotal = 0;
        console.log(cities);
        //make the for loop go through and grab daily hours and add up hourly totals
        for (var j = 0; j < cities.length; j++) {
            bottomTotal += cities[j].cookieHoursArray[i];
            console.log('high');
        }

        var tdTotal = document.createElement('td');
        tdTotal.textContent = bottomTotal;
        trTotal.appendChild(tdTotal);
    }
    table.appendChild(trTotal);

}
getTotal();