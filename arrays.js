var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var addElementToBeginningOfArray = function(array, element){
  array = [element, ...array]
}
var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
}
var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element)
}
var addElementToEndOfArray = function(array, element){
  array = [...array, element]
}
