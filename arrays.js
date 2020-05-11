var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var addElementToBeginningOfArray = function(array, element){
  return array = [element, ...array]
}
var destructivelyAddElementToEndOfArray = function(array, element){
  return array.push(element);
}
var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  return array;
}
var addElementToEndOfArray = function(array, element){
  return array = [...array, element]
}
var accessElementInArray = function(array, index){
  return array[index];
}
var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop()
}