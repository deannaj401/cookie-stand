/* eslint-disable indent */
'use strict';

var dailyHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// cookieHours for Seattle
// [24, 54,23,54,23,]


var seattle = {
    min: 23,
    max: 65,
    average: 6.3,
    cookieHours: [],
    customers: function() {
        var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; //The maximum is inclusive and the minimum is inclusive
        return randomNumber;
    },
    avDailyCust: function() {

        // average cookies sold * the number of customers that hour
        for (var i = 0; i < dailyHours.length; i++) {
            var averCookies = Math.floor(this.average * this.customers());
            // instead of console logging , we want to fill up the array
            this.cookieHours.push(averCookies);
        }

    },

};

// creates and populates the array for the hours of the day
seattle.avDailyCust();

// find the target of seattle
var seattleUL = document.getElementById('seattle');

// the ind. li tag.

for (var i = 0; i < dailyHours.length; i++) {
    var divli = document.createElement('li');
    // 6am: ##
    divli.textContent = `${dailyHours[i]}: ${seattle.cookieHours[i]} cookies`;
    // append the new li to the existing ul
    seattleUL.append(divli);


}
// how many of those do we need? the length of the array.
// how can we  guarnatee that we make the same number as the array legnth? for

// for every single hour in the dailyhours array, we need to make an LI tag to show the hour of the day





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