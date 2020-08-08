/* eslint-disable indent */
'use strict';

var dailyHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];




var seattle = {
    min: 23,
    max: 65,
    average: 6.3,
    cookieHours: [],
    customers: function() {
        var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        return randomNumber;
    },
    avDailyCust: function() {


        for (var i = 0; i < dailyHours.length; i++) {
            var averCookies = Math.floor(this.average * this.customers());

            this.cookieHours.push(averCookies);
        }

    },

};


seattle.avDailyCust();


var seattleUL = document.getElementById('seattle');



for (var i = 0; i < dailyHours.length; i++) {
    var divli = document.createElement('li');

    divli.textContent = `${dailyHours[i]}: ${seattle.cookieHours[i]} cookies`;

    seattleUL.append(divli);


}





// var tokyo = {
//     min: 3,
//     max: 24,
//     average: 1.2
// };


// var dubai = {
//     min: 11,
//     max: 38,
//     average: 3.7
// };


// var paris = {
//     min: 20,
//     max: 38,
//     average: 2.3
// };


// var lima = {
//     min: 2,
//     max: 16,
//     average: 4.6
// };