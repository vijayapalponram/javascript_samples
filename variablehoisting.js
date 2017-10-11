function showName()
{
    console.log("First Name : " + name);
    var name = 'Ford';
    console.log("First Name : " + name);
}

showName();
//First Name : undefined
//First Name : Ford

// The reason undefined prints first is because the local variable name was hoisted to the top of the function​
// Which means it is this local variable that get calls the first time.​
// This is how the code is actually processed by the JavaScript engine:​

function showName1()
{
    var name;               // name is hoisted (note that is undefined at this point, since the assignment happens below)​
    console.log("First Name : " + name);
    name = 'Ford';
    console.log("First Name : " + name);
}

showName1();
//First Name : undefined
//First Name : Ford


//Function Declaration Overrides Variable Declaration When Hoisted
//Both the variable and the function are named myName​

var myName;
function myName()
{
    console.log('This is my name');
}

console.log(typeof myName);     //function

//But in this example, the variable assignment overrides the function declaration​
//This is the variable assignment (initialization) that overrides the function declaration.​
var myName1 = "Richard";

function myName1()
{
    console.log('This is my name');
}

console.log(typeof myName1);    //string

//It is important to note that function expressions, such as the example below, are not hoisted.
var myName2 = "Richard";

var myName2 = function()
{
    console.log('This is my name');
}

console.log(typeof myName2);    //function

/* In strict mode, an error will occur if you assign a variable a value without first declaring the variable. Always declare your variables. */

