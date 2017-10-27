'use strict';

// global variable
var hours = ['6 am', '7 am', '8am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var trEl = document.createElement('tr'); // defines row in a table, table row element
var tdEl = document.createElement('td'); // defines cell in a table, tag defines element


function headerCreator() {
  trEl; tdEl;
  trEl.appendChild(thEl);
  while (i < hours.length) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    dataTable.appendChild(trEl);
  }
  i++;
}

function Stats(store, hrlyCookies, custMin, custMax) {
  this.store = store;
  this.hrlyCookies = hrlyCookies;
  this.custMin = custMin;
  this.custMax = custMax;
}
function rowCreator() {
  while(AllStores[j]) {
    AllStores[j].render();
  }
}
// using constructor function learned in class during demonstration
var AllStores = [];
var dataTable = document.getElementById('locations');

this.hrlyCust = function(){ // determining the number of customers per hour
  return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin); // source: MDN docs
  this.hrlySales = function(){ // determining the number of sales per hour
    return Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies); // source: MDN docs
  };
  AllStores.push(this);
};
// required prototype
Stats.prototype.render = function() {
  trEl; tdEl;
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);
  while (i < hours.length) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hrlySales();
    trEl.appendChild(tdEl);
    dataTable.appendChild(trEl);
  }
  i++;
};

// the "new operator"
new Stats('1st and Pike', 23, 65, 6.3);
new Stats('Seatac Airport', 3, 24, 1.2);
new Stats('Seattle Center', 11, 38, 3.7);
new Stats('Capitol Hill', 20, 38, 2.3);
new Stats('Alki', 2, 16, 4.6);

headerCreator(); // calling function
rowCreator(); // calling function
