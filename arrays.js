var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var addElementToBeginningOfArray = function(array, element){
  return array = [element, ...array]
}
var destructivelyAddElementToEndOfArray = function(array, element){
  return array.push(element);
}
var destructivelyAddElementToBeginningOfArray = function(array, element){
  return array.shift(element)
}
var addElementToEndOfArray = function(array, element){
  return array = [...array, element]
}
