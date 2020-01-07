function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1){ return value; } // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr))
  })(0, initial) 
}

module.exports = reduce;

function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
  return Object.prototype.hasOwnProperty.call(obj,'quack')
}).length
}

module.exports = duckCount;
//var slice = Array.prototype.slice
/*
function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger

module.exports = function(namespace) {
  return console.log.bind(console, namespace)
}

function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}
module.exports = arrayMap;

function Spy(target, method) {
	var test = target[method];
	let result = {
  count: 0
}	
	 target[method] = function() {
   		result.count++;
   		 return test.apply(this, arguments);
  }

  return result;
}
    
module.exports = Spy
*//*
function repeat(operation, num) {
	if (num <= 0) return
	operation()

 	 if (num % 2  === 0) {
	    setTimeout(function() {
	      repeat(operation, --num)
   	     })
         } 
     return repeat(operation, --num)
}
    
module.exports = repeat
*/
