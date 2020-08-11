/* eslint-disable no-redeclare */
/* eslint-disable indent */
'use strict';

var dailyHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ];

function Stores(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookieHoursArray = [];
    this.dailyTotal = 0;
    //cookieHours();
}
//Stores();

Stores.prototype.getRandomCustomerCount = function() {
    var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return randomNumber;
};

//Stores.prototype.getRandomCustomerCount();

Stores.prototype.calcCookieHours = function() {
    this.dailyHours = dailyHours;
    //this.customers = function() {
    //var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    //return randomNumber;
    //};
    //this.avDailyCust = function() {
    for (var i = 0; i < dailyHours.length; i++) {
        var averCookies = Math.ceil(this.avg * this.getRandomCustomerCount());
        this.cookieHoursArray.push(averCookies);
        this.dailyTotal += averCookies;
    }
    // };

};

Stores.prototype.render = function() {
    var table = document.getElementById('stores');
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.name;
    trElement.appendChild(tdElement);
    // var tdTotalName = document.createElement('td');
    // tdTotalName.textContent = ('Total');
    // trElement.appendChild(tdTotalName);
    for (var i = 0; i < this.dailyHours.length; i++) {
        var tdElement = document.createElement('td');
        tdElement.textContent = this.cookieHoursArray[i];
        trElement.appendChild(tdElement);
    }
    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.dailyTotal;
    trElement.appendChild(tdTotal);
    table.appendChild(trElement);
    // var trTotal = document.createElement('tr');
    // trElement.textContent = this.dailyTotal;
    // table.appendChild(trTotal);
};

var seattle = new Stores('SEATTLE', 23, 65, 6.3);
var tokyo = new Stores('TOKYO', 3, 24, 1.2);
var dubai = new Stores('DUBAI', 11, 38, 3.7);
var paris = new Stores('PARIS', 20, 38, 2.3);
var lima = new Stores('LIMA', 2, 16, 4.6);

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









// var seattle = {
//     min: 23,
//     max: 65,
//     average: 6.3,
//     cookieHours: [],
//     customers: function () {
//         var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//         return randomNumber;
//     },
//     avDailyCust: function () {
//         for (var i = 0; i < dailyHours.length; i++) {
//             var averCookies = Math.ceil(this.average * this.customers());
//             this.cookieHours.push(averCookies);
//         }
//     },
// };
// seattle.avDailyCust();

// var seattleUL = document.getElementById('seattle');

// for (var i = 0; i < dailyHours.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${dailyHours[i]}: ${seattle.cookieHours[i]} cookies`;
//     seattleUL.append(liEl);
// }

// var tokyo = {
//     min: 3,
//     max: 24,
//     average: 1.2,
//     cookieHours: [],


//     customers: function() {
//         var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//         return randomNumber;
//     },

//     avDailyCust: function() {


//         for (var i = 0; i < dailyHours.length; i++) {
//             var averCookies = Math.ceil(this.average * this.customers());

//             this.cookieHours.push(averCookies);
//         }
//     },

// };


// tokyo.avDailyCust();

// var tokyoUL = document.getElementById('tokyo');

// for (var i = 0; i < dailyHours.length; i++) {
//     var liEl = document.createElement('li');

//     liEl.textContent = `${dailyHours[i]}: ${tokyo.cookieHours[i]} cookies`;

//     tokyoUL.append(liEl);

// }

// var dubai = {
//     min: 11,
//     max: 38,
//     average: 3.7,
//     cookieHours: [],


//     customers: function() {
//         var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//         return randomNumber;
//     },

//     avDailyCust: function() {


//         for (var i = 0; i < dailyHours.length; i++) {
//             var averCookies = Math.ceil(this.average * this.customers());

//             this.cookieHours.push(averCookies);
//         }

//     },

// };

// dubai.avDailyCust();


// var dubaiUL = document.getElementById('dubai');



// for (var i = 0; i < dailyHours.length; i++) {
//     var liEl = document.createElement('li');

//     liEl.textContent = `${dailyHours[i]}: ${tokyo.cookieHours[i]} cookies`;

//     dubaiUL.append(liEl);

// }


// var paris = {
//     min: 20,
//     max: 38,
//     average: 2.3,
//     cookieHours: [],
//     customers: function() {
//         var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//         return randomNumber;
//     },

//     avDailyCust: function() {


//         for (var i = 0; i < dailyHours.length; i++) {
//             var averCookies = Math.ceil(this.average * this.customers());

//             this.cookieHours.push(averCookies);


//         }

//     },

// };


// paris.avDailyCust();


// var parisUL = document.getElementById('paris');


// for (var i = 0; i < dailyHours.length; i++) {
//     var liEl = document.createElement('li');

//     liEl.textContent = `${dailyHours[i]}: ${tokyo.cookieHours[i]} cookies`;

//     parisUL.append(liEl);


// }

// var lima = {
//     min: 2,
//     max: 16,
//     average: 4.6,
//     cookieHours: [],


//     customers: function() {
//         var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//         return randomNumber;
//     },

//     avDailyCust: function() {


//         for (var i = 0; i < dailyHours.length; i++) {
//             var averCookies = Math.ceil(this.average * this.customers());

//             this.cookieHours.push(averCookies);
//         }

//     },

// };


// lima.avDailyCust();


// var limaUL = document.getElementById('lima');
// for (var i = 0; i < dailyHours.length; i++) {
//     var liEl = document.createElement('li');

//     liEl.textContent = `${dailyHours[i]}: ${tokyo.cookieHours[i]} cookies`;

//     limaUL.append(liEl);
// };

// eslint-disable-next-line eol-last
//