$(document).ready(function(){

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function Fruit(name,price,amountPurchased){
	this.name = name;
	this.price = price;
	this.amountPurchased = amountPurchased;
	this.totalSpent = [];
	this.priceCalculator= function () {
		if(this.price>0.50 && this.price<9.99){
			this.price += randomNumber(-50, 50)/100;
			this.totalSpent.push(this.price);
		} else {
			this.price = this.price;
			this.totalSpent.push(this.price);
		}
		console.log(this.price);

	};

	this.buttonClicked= function () {
		$('#button').on('click',this, function(){
			this.amountPurchased +=1;
			console.log('total items in inventory', this.amountPurchased);

		});
	};

this.display = function(){
	this.priceCalculator();

	console.log( this.name + this.amountPurchased + this.totalSpent + this.price);
}
	}
	// this.priceUpdate = function(){
	// 	setInterval(this.priceCalculator(),1500);
	// 	this.price = this.price;
	// }
	// this.averagePrice = function(){
	//
	// }

var apples= new Fruit("Apple", 2, 0 );
var oranges= new Fruit("Orange", 2, 0);
var bananas = new Fruit("Banana", 2,0);
var grapes = new Fruit("Grape", 2, 0);
var fruitArray =[apples,oranges,bananas,grapes];



});

// Button clicked functionThe information displayed for each of the fruit should have a button-like functionality where the user can interact with each of the fruit displays.

// Available to the user is a total cash and an inventory display that shows how much of each of the fruits they have purchased. Also in the user display, should be an average purchased price, which shows, on average, how much money they have spent on a given fruit in their inventory.
//
// Meaning that by clicking on the display for each of the fruits, allows the user to buy one of the fruits, at market price, which will be deducted from the total cash. The user is not allowed to spend more than they have.
//
// The user will start with $100.

// $('#button').on('click',this, function(){
// 	this.amountPurchased+=1;
// 	this.averagePrice();
// 	$('#cash-left').append(this.remaininingCash());
//
//
// })
// // function priceUpdate(fruitArray){
// for (var i=0; i<fruitArray.length; i++){
// 	priceCalculator();
// 	fruitArray[i].price = price;
// }
// }
// priceCalculator()

//});
