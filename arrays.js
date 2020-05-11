var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var addElementToBeginningOfArray = function(array, element){
  array = [element, ...array]
}
var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
}
