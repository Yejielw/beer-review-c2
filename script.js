var beers = []
var addBeer = function () {
	var name = $('.beer-input').val();
	console.log(name)
	var category = $('.category-input').val();
	var rating = $('.rating-input').val();
	var beer = {
		name: name,
		category: category,
		rating: rating
	};
	beers.push(beer)
}
var addBeersLi = function () {
 	$('.beers-list').append( "<li></li>");
 }

var removeBeerLi = function () {
  	$('.beers-list').find('li').remove();
};
var addBeersToLi = function () {
	for (var i = 0; i <= beers.length -1 ; i++) {
	 	addBeersLi();
	  	$('.beers-list :last-child').append(beers[i].name)
	  	$('.beers-list :last-child').append(". Category: ")
	  	$('.beers-list :last-child').append(beers[i].category)
	  	$('.beers-list :last-child').append(". Rating: ")
	  	$('.beers-list :last-child').append(beers[i].rating)
	 }
};
var updateBeers = function () {
	removeBeerLi();
	addBeersToLi();
}

var sortBeersA= function () {
	
	beers.sort(function(a, b) {
    return parseFloat(a.rating) - parseFloat(b.rating);
	});
};
var sortBeersB= function () {
	
	beers.sort(function(a, b) {
    return parseFloat(a.rating) + parseFloat(b.rating);
	});
};
var orberByRatingA = function () {

	removeBeerLi();
	sortBeersA();
	for (var i = 0; i <= beers.length -1 ; i++){
		addBeersLi();
	$('.beers-list :last-child').append(beers[i].name)
	$('.beers-list :last-child').append(". Category: ")
	$('.beers-list :last-child').append(beers[i].category)
	$('.beers-list :last-child').append(". Rating: ")
	$('.beers-list :last-child').append(beers[i].rating)
	};
};

var orberByRatingD = function () {

	removeBeerLi();
	sortBeersB();
	for (var i = 0; i <= beers.length -1 ; i++){
		addBeersLi();
	$('.beers-list :last-child').append(beers[i].name)
	$('.beers-list :last-child').append(". Category: ")
	$('.beers-list :last-child').append(beers[i].category)
	$('.beers-list :last-child').append(". Rating: ")
	$('.beers-list :last-child').append(beers[i].rating)
	};
};

$('#myBtn').click(addBeer);
//$('#myBtn').click(updateBeers);
$('.post-beer').on('click', updateBeers);

$('.btnOrderA').on('click', orberByRatingA);

$('.btnOrderD').on('click', orberByRatingD);

