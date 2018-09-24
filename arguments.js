function sum() {
  let results = 0;
  // arguments.forEach((el) => {
  for (let i = 0; i < arguments.length; i ++) {  
    results += arguments[i];
  }
  return results;
}

function newSum(...values){
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    result += values[i];
  }
  return result;
}



// simple myBind with no args
// Function.prototype.myBind = function (ctx) {
//   let args = Array.from(arguments).slice(1);
//   let that = this;
//   return function() {
//     let new_args = args.concat(Array.from(arguments));
//     that.apply(ctx,new_args);
//   }; 
// };


// myBind with arguments
Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};
// 

function curriedSum(numArgs){
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let counter = 0;
      for (let i = 0; i < numbers.length; i++) {
        counter += numbers[i];
      }
      return counter;
    }else {
      return _curriedSum; // ???
    }
  };
}

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let that = this;
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
         return that(...numbers);
    }else {
      return _curriedSum; // ???
    }
  };

};
