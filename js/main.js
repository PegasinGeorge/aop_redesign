$(document).ready(function() {
	selectedDays();
	showStyleOfProduct();
	openSubMenu();
	styleProductsList();
	disableProductItem();
	currentImage();
	activationModal();
});

/*Show days in dashboard*/
function selectedDays() {
	let firstDay = $('.js-selectedDay > li:nth-child(1) > a').text();
	$('.js-selectedLastDays').text(firstDay);
	jQuery('body').on('click', '.js-selectedDay a', function(e) {
		e.preventDefault();
		$('.js-selectedLastDays').text($(this).text());
	});
};
/*End Show days in dashboard*/

/*Current image in product*/
function currentImage() {
	var firstImage = $(".js-currentImageSelect > ul > li:nth-child(1) > a").css("background-image");
	$('.js-currentImage').css("background-image", firstImage);
	$('body').on('click', '.js-currentImageSelect > ul > li > a', function(e) {
		e.preventDefault();
		$(e.target).addClass("-is-active");
		$(e.target).parent().siblings().find('a').removeClass("-is-active");
		var currentUrl = $(e.target).css("background-image");
		$('.js-currentImage').css("background-image", currentUrl);
	});
};
/*END Current image in product*/

/*Show style of product*/
function showStyleOfProduct() {
	let firstDay = $('.js-selectedStyle > li:nth-child(1) > a').text();
	$('.js-selectedCurrentStyle').text(firstDay);
	jQuery('body').on('click', '.js-selectedStyle a', function(e) {
		e.preventDefault();
		$('.js-selectedCurrentStyle').text($(this).text());
	});
};
/*END Show style of product*/

/*Open sub menu*/
function openSubMenu() {
	$('body').on('click', '.js-nawMenu > li > a', function(e) {
		e.preventDefault();
		$(e.target).toggleClass('-style_naw_menu_open');
		$(e.target).next().toggleClass('-style_open_sub_menu');
	});
}

/*Style products list*/
function styleProductsList() {
	$('body').on('click', '.js-styleItemsColumns', function(e) {
		e.preventDefault();
		$(this).addClass('-is-active');
		$(this).parent().siblings().find('a').removeClass('-is-active');
		$('.products_items_wrapper').addClass('-style_products_items_columns').removeClass('-style_products_items_horisontal');
	});
	$('body').on('click', '.js-styleItemsHorisontal', function(e) {
		e.preventDefault();
		$(this).addClass('-is-active');
		$(this).parent().siblings().find('a').removeClass('-is-active');
		$('.products_items_wrapper').addClass('-style_products_items_horisontal').removeClass('-style_products_items_columns');
	});
}
/*END Style products list*/

/*Disable product*/
function disableProductItem() {
  var checkbox = $('input.js-productCheckbox:checkbox:not(:checked)');

  if (checkbox.prop('checked')){
    checkbox.parents('.product_item').removeClass('-style_disabled_product');
	} else {
	    checkbox.parents('.product_item').addClass('-style_disabled_product');
	};

	$('body').on('click', '.js-productCheckbox', function(e) {
		if ($(e.target).prop('checked') == true) {
			$(e.target).parents('.product_item').removeClass('-style_disabled_product');
		} else {
			$(e.target).parents('.product_item').addClass('-style_disabled_product');
		};
	});
};
/*END Disable product*/

/*Modal generation*/
function activationModal() {
    $( "#collection_modal" ).dialog({
    	autoOpen: false,
    	maxWidth: 640,
    	modal: true,
    	draggable: false,
    	resizable: false,
    	width: 640,
    	height: 250,
    });
    $('body').on('click', '.my_collection', function(e) {
    	e.preventDefault();
	  $( "#collection_modal" ).dialog( "open" );
	});
	$('.ui-dialog').addClass('collection_modal');
	$('.ui-dialog-titlebar-close').html('');

	$( "#confirmation_modal" ).dialog({
    	autoOpen: false,
    	maxWidth: 640,
    	modal: true,
    	draggable: false,
    	resizable: false,
    	width: 640,
    	height: 135,
    });
    $('body').on('click', '.remove_collection', function(e) {
    	e.preventDefault();
	  $( "#confirmation_modal" ).dialog( "open" );
	});
	$('body').on('click', '.ui-widget.confirmation_modal .ui-dialog-content input', function(e) {
		$('#confirmation_modal').dialog( "close" );
	});
	$('.ui-dialog').eq(1).addClass('confirmation_modal');
};
/*END Modal generation*/
