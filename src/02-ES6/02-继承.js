// parent class
function Animal(name) {
  this.name = name
}
Animal.prototype.showName = function() {
  console.log("this animal name: " + name)
}

// children class
function Dog(name, color) {
  Animal.call(this, name)
  this.color = color
}