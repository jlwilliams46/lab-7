'use strict';

var bizHrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function headerCreator() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  for (var i = 0; i < bizHrs.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = bizHrs[i];
    trEl.appendChild(thEl);
    dataTable.appendChild(trEl);
  }
}

function rowCreator() {
  for(var j in AllStores){
    AllStores[j].render();
  }
}

//New contructer function//
var AllStores = [];
var dataTable = document.getElementById('locations');
function Stats(name, custMin, custMax, hrlyCookies){
  this.name = name;
  this.custMin = custMin;
  this.custMax = custMax;
  this.hrlyCookies = hrlyCookies;
  this.hrlyCust = function(){
    return Math.floor((Math.random() * this.custMax - this.custMin + 1) + this.custMin);
  };
  this.hourlySales = function(){
    return Math.floor((this.hrlyCust(this.custMin,this.custMax)) * this.hrlyCookies);
  };
  AllStores.push(this);
}

Stats.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < bizHrs.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales();
    trEl.appendChild(tdEl);
    dataTable.appendChild(trEl);
  }
};

// the "new operator"
new Stats('1st and Pike', 23, 65, 6.3);
new Stats('Seatac Airport', 3, 24, 1.2);
new Stats('Seattle Center', 11, 38, 3.7);
new Stats('Capitol Hill', 20, 38, 2.3);
new Stats('Alki', 2, 16, 4.6);
console.table(AllStores);

headerCreator(); // calling function
rowCreator(); // calling function