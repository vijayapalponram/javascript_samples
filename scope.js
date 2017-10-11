//********Demonstration of Function-Level Scope*********//
var name = "Richard";
​
​function showName () {
	var name = "Jack"; // local variable; only accessible in this showName function​
	console.log (name); // Jack​
}
console.log (name); // Richard: the global variable

//-----------------------------------------------------------------------------------------------------//

//No Block-Level Scope
var name = "Richard";
​// the blocks in this if statement do not create a local context for the name variable​
​if (name) {
	name = "Jack"; // this name is the global name variable and it is being changed to "Jack" here​
	console.log (name); // Jack: still the global variable​
}
​
​// Here, the name variable is the same global name variable, but it was changed in the if statement​
console.log (name); // Jack

//-----------------------------------------------------------------------------------------------------//

//If You Don’t Declare Your Local Variables, Trouble is Nigh
// If you don't declare your local variables with the var keyword, they are part of the global scope​
​var name = "Michael Jackson";
​
​function showCelebrityName () {
	console.log (name);
}
​
​function showOrdinaryPersonName () {	
	name = "Johnny Evers";
	console.log (name);
}
showCelebrityName (); // Michael Jackson​
​
​// name is not a local variable, it simply changes the global name variable​
showOrdinaryPersonName (); // Johnny Evers​
​
​// The global variable is now Johnny Evers, not the celebrity name anymore​
showCelebrityName (); // Johnny Evers​
​
​// The solution is to declare your local variable with the var keyword​
​function showOrdinaryPersonName () {	
	var name = "Johnny Evers"; // Now name is always a local variable and it will not overwrite the global variable​
	console.log (name);
}

//-----------------------------------------------------------------------------------------------------//

//Local Variables Have Priority Over Global Variables in Functions
var name = "Paul";
​
​function users () {
	// Here, the name variable is local and it takes precedence over the same name variable in the global scope​
​var name = "Jack";
​
​// The search for name starts right here inside the function before it attempts to look outside the function in the global scope​
console.log (name); 
}
​
users (); // Jack

//-----------------------------------------------------------------------------------------------------//


//setTimeout Variables are Executed in the Global Scope
// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj​
​
​var highValue = 200;
​var constantVal = 2;
​var myObj = {
	highValue: 20,
	constantVal: 5,
	calculateIt: function () {
 setTimeout (function  () {
	console.log(this.constantVal * this.highValue);
}, 2000);
	}
}
​
​// The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.​
​
myObj.calculateIt(); // 400​
​// This is an important point to remember.