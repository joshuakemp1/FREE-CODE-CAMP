// Make a function that looks through a list (first argument) and returns an array of all objects that have equivalent property values (second argument).

function where(collection, source) {
  var arr = [];
  // console.log(source);
  // lets loop over them first
  // lets try to grab the values only
  for (var i = 0; i < collection.length; i++){
  //   // loops over 3 objects
  //   // console.log(i);
  //   console.log(collection[i].first);
    if (collection[i].last === source.last){
      arr.push(collection[i]);
    }
  }
  console.log(arr);
  return arr;
}

// (where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 }));
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });