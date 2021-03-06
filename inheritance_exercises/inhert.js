// Function.prototype.inherits = function (parentClass){
//   function Surrogate(){}
//   Surrogate.prototype = parentClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };


Function.prototype.inherits = function (parentClass){
  this.prototype = Object.create(parentClass);
  this.prototype.constructor = this;
};