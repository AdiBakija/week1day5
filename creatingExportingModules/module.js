/*
1. Create a module that exports a function that takes a number
   as a parameter and stores it in a list. The list should not be
   accessible from outside the module.


2. Export another function that returns a version of the data list that is
   sorted in ascending order. The function you use to sort the data correctly
   should not be accessible from outside the module.
   (Think back to the Custom Sorting Exercise when handling sorting)

3. Implement a Node.js script that imports the functionality of your module,
   adds at least 5 different data points to the module's data list, and outputs
   the sorted list.
*/
var list = [];/*Empty array that receives pushed values everytime a function
is executed*/

function sortList (a,b){ //Array now becomes sorted ascendingly
    return a - b;
}

//Module exports
module.exports = {
  addNumber: function (num) {//Updates list with num each time it is called
    list.push(num);
  },
  returnList: function () {//Returns sorted list ascendingly
    console.log(list.sort(sortList));//Be careful there is a callback "sortList"
    //being called
  }
}