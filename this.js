const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
  console.log(test.func());
  // expected output: 42
  

  // In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
