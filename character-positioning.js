function countLetters(str){
  var letters = str.split('');
  var totals = {};

  // console.log(letters);
  var create = function(property, index){
    totals[property] = index;
  }
  for (var i = 0; i < letters.length; i++){
    if (!totals[letters[i]]) {
      create(letters[i], i);
      // console.log(totals[letters[i]], 'created')
    } else {
      totals[letters[i]] += ", " + i;
      // console.log(totals[letters[i]]);
    }
  };
  return totals;
}

console.log(countLetters('Lighthouse in the house'));