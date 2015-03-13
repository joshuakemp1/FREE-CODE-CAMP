// Difficulty: 
// Return a new array that transforms the element's average altitude into their orbital periods.

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);


// TEST CASES:
//expect(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).to.eqls([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);AssertionError:expected [ Array(3) ] to deeply equal [ Array(3) ]
// expect(orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}])).to.eqls([{name: "sputkin", orbitalPeriod: 86400}]);AssertionError:expected [ Array(1) ] to deeply equal [ Array(1) ]

