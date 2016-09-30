function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function Fruit (name, price, inventory, avgPrice, totalSpent) {
	this.name = name;
	this.price = price;
	this.inventory = inventory;
	this.avePrice = avgPrice;
	this.totalSpent = totalSpent;
	this.priceCalculator = function() {
		var tempPrice = (this.price + randomNumber(-50, 50)/100);
		console.log(tempPrice);
		if (tempPrice >= 0.5 && tempPrice <= 9.99) {
			this.price = tempPrice;
		} else if (this.price < 0.5) {
			this.price = 0.5;
		} else if (this.price > 9.99) {
			this.price = 9.99;
		}
	}
}
var $wallet = 100;
var apple = new Fruit ('Apple', 2, 0, 0, 0);
var banana = new Fruit ('Banana', 2, 0, 0, 0);
var grape = new Fruit ('Grape', 2, 0, 0, 0);
var orange = new Fruit ('Orange', 2, 0, 0, 0);
var fruitArray = [apple, banana, grape, orange];
var $pricePara = $('<p class="price"></p>');

$(document).ready(function(){
var checkWallet;
	$('#buyApple').on('click', function(){
		checkWallet = $wallet - apple.price;
		if(checkWallet>=0){
		apple.inventory += 1;
		apple.totalSpent += apple.price;
		apple.avePrice = apple.totalSpent / apple.inventory;
		$wallet = $wallet - apple.price;
		$('.apple').find('#inventory').find('span').remove();
		$('.apple').find('#inventory').append('<span>' + apple.inventory + '</span>');
		console.log(apple);
	}
	})

	$('#sellApple').on('click', function(){
		if (apple.inventory>0){
		apple.inventory -= 1;
		apple.totalSpent -= apple.price;
		apple.avePrice = apple.totalSpent / apple.inventory;
		$wallet = $wallet + apple.price;
		$('.apple').find('#inventory').find('span').remove();
		$('.apple').find('#inventory').append('<span>' + apple.inventory + '</span>');
		console.log(apple);
	}
	})

	$('#buyBanana').on('click', function(){
		checkWallet = $wallet - banana.price;
		if(checkWallet>=0){
		banana.inventory += 1;
		banana.totalSpent += banana.price;
		banana.avePrice = banana.totalSpent / banana.inventory;
		$wallet = $wallet - banana.price;
		$('.banana').find('#inventory').find('span').remove();
		$('.banana').find('#inventory').append('<span>' + banana.inventory + '</span>');
		console.log(banana);
	}
		})

		$('#sellBanana').on('click', function(){
			if (banana.inventory>0){
			banana.inventory -= 1;
			banana.totalSpent -= banana.price;
			banana.avePrice = banana.totalSpent / banana.inventory;
			$wallet = $wallet + banana.price;
			$('.banana').find('#inventory').find('span').remove();
			$('.banana').find('#inventory').append('<span>' + banana.inventory + '</span>');
			console.log(banana);
		  }
			})

	$('#buyGrape').on('click', function(){
			checkWallet = $wallet - grape.price;
			if(checkWallet>=0){
			grape.inventory += 1;
			grape.totalSpent += grape.price;
			grape.avePrice = grape.totalSpent / grape.inventory;
			$wallet = $wallet - grape.price;
			$('.grape').find('#inventory').find('span').remove();
			$('.grape').find('#inventory').append('<span>' + grape.inventory + '</span>');
			console.log(grape);
			}
			})

			$('#sellGrape').on('click', function(){
				if (grape.inventory>0){
				grape.inventory -= 1;
				grape.totalSpent -= grape.price;
				grape.avePrice = grape.totalSpent / grape.inventory;
				$wallet = $wallet + grape.price;
				$('.grape').find('#inventory').find('span').remove();
				$('.grape').find('#inventory').append('<span>' + grape.inventory + '</span>');
				console.log(grape);
			  }
				})

			$('#buyOrange').on('click', function(){
				checkWallet = $wallet - orange.price;
				if(checkWallet>=0){
				orange.inventory += 1;
				orange.totalSpent += orange.price;
				orange.avePrice = orange.totalSpent / orange.inventory;
				$wallet = $wallet - orange.price;
				$('.orange').find('#inventory').find('span').remove();
				$('.orange').find('#inventory').append('<span>' + orange.inventory + '</span>');
				console.log(orange);
				}
				})

				$('#sellOrange').on('click', function(){
				if (orange.inventory>0){
				orange.inventory -= 1;
				orange.totalSpent -= orange.price;
				orange.avePrice = orange.totalSpent / orange.inventory;
				$wallet = $wallet + orange.price;
				$('.orange').find('#inventory').find('span').remove();
				$('.orange').find('#inventory').append('<span>' + orange.inventory + '</span>');
				console.log(orange);
				}
				})


$('button').on('click', function (){
	var $para = $('<span id="totalCash"></span>');
	$para.append('$' + $wallet.toFixed(2));
	$('header').find('#totalCash').find('span').remove();
	$('header').find('#totalCash').append($para);
	});

	var interval = setInterval(priceUpdate, 500);

	function priceUpdate () {
		apple.priceCalculator();
		$('.apple').find('.price').find('span').remove();
		$('.apple').find('.price').append('<span> Price: $' + apple.price.toFixed(2) +'</span>');
		banana.priceCalculator();
		$('.banana').find('.price').find('span').remove();
		$('.banana').find('.price').append('<span> Price: $' + banana.price.toFixed(2) +'</span>');
		grape.priceCalculator();
		$('.grape').find('.price').find('span').remove();
		$('.grape').find('.price').append('<span> Price: $' + grape.price.toFixed(2) +'</span>');
		orange.priceCalculator();
		$('.orange').find('.price').find('span').remove();
		$('.orange').find('.price').append('<span> Price: $' + orange.price.toFixed(2) +'</span>');
	}

	function endGame(){
		var $finalAppleSales =apple.inventory * apple.price;
		var $finalBananaSales=banana.inventory * banana.price;
		var $finalGrapeSales=grape.inventory * grape.price;
		var $finalOrangeSales = orange.inventory * orange.price;
		var $finalWallet = $wallet + $finalAppleSales + $finalBananaSales + $finalGrapeSales + $finalOrangeSales;
		console.log($finalWallet);
		var $profit = ($finalWallet - 100;
			$profit=$profit.toFixed(2);
		$('#endGameMessage').find('span').remove();
		$('#endGameMessage').append('<span>Your time is up! You made $' + $profit +'</span');
		$('#inventory').find('span').remove();
		clearInterval(interval);
	}

	setTimeout(endGame,300000);
});
