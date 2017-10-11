// prototype property
function printStuff(myDocuments)
{
    this.documents = myDocuments;
}

// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
printStuff.prototype.print = function()
{
    console.log(this.documents);
}

/*Create a new object with the PrintStuff () constructor, thus allowing this new object 
to inherit PrintStuff's properties and methods.​ */
var newObj = new printStuff("I am a new object");

/* newObj inherited all the properties and methods, including the print method, from the PrintStuff function.  
Now newObj can call print directly, even though we never created a print () method on it.​ */
newObj.print()  //I am a new object

//prototype attribute
function Account()
{

}

var userAccount = new Account();

/* userAccount initialized with the Account() constructor 
and as such its prototype attribute (or prototype object) is Account.prototype.*/


