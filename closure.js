function init() {

    var name = 'Mozilla'; // name is a local variable created by init


    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();

}

  init();

  function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();

  //In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. 
  //The instance of displayName maintains a reference to its lexical environment, within which the variable name exists.


  function makeAdder(x) {

    var innerfunctin = function(y) {
      return x + y;
    };

    return innerfunctin;
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12

// Emulating private methods with closures
