var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name) {
  var new_array = kittens.concat(name);
  return new_array;
}

function prependKitten(name) {
  var new_array = kittens.slice().unshift(name);
  return new_array;
}