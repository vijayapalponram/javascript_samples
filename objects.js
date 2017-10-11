function Fruit(fruitName, color)
{
    this.fruitName = fruitName;
    this.color = color;

    this.showName = function()
    {
        console.log('This fruit is ' + this.fruitName);
    }
}

var MangoFruit = new Fruit('Mango', 'Yellow');
MangoFruit.showName();
console.log("fruitName in MangoFruit ==> " + ("fruitName" in MangoFruit));
console.log("toString in MangoFruit ==> " + ("toString" in MangoFruit));
console.log("MangoFruit.hasOwnProperty ('fruitName') ==> " + MangoFruit.hasOwnProperty ('fruitName'));
console.log("MangoFruit.hasOwnProperty ('toString') ==> " + MangoFruit.hasOwnProperty ('toString'));

var obj = new Object();
console.log(obj.hasOwnProperty ('toString'));


