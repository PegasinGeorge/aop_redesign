$(document).ready(function() {
	selectedDays();
	showStyleOfProduct();
	openSubMenu();
	styleProductsList();
	disableProductItem();
	currentImage();
	activationModal();
	disableSocialFields();
	selectLocation();
	countLetters();
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
		var menuHeight = $(e.target).next().children().length;
		var finalHeight = (36 * menuHeight) + 14;
		$(e.target).toggleClass('-style_naw_menu_open');
		$(e.target).next().toggleClass('-style_open_sub_menu');
		$(e.target).siblings('.sub_menu.-style_open_sub_menu').height(finalHeight);
		$(".sub_menu").not('.-style_open_sub_menu').height(0);
	});
}
/*Open sub menu*/

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
	if ($("#collection_modal").length) {
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
		$('#collection_modal').parents('.ui-dialog').addClass('collection_modal');
		$('.ui-dialog-titlebar-close').html('');
	};

	if ($( "#collection_modal" ).length) {
		$( "#confirmation_modal" ).dialog({
	    	autoOpen: false,
	    	maxWidth: 640,
	    	modal: true,
	    	draggable: false,
	    	resizable: false,
	    	width: 640,
	    	height: 135,
	    });
	    $('body').on('click', '.js-removeCollection', function(e) { 	
	    	e.preventDefault();
		  $( "#confirmation_modal" ).dialog( "open" );
		});
		$('body').on('click', '.ui-widget.confirmation_modal .ui-dialog-content input', function(e) {
			$('#confirmation_modal').dialog( "close" );
		});
		$( '#confirmation_modal' ).parents('.ui-dialog').addClass('confirmation_modal');
	};

	if ($("#tableOfSizes_modal").length) {
		$( "#tableOfSizes_modal" ).dialog({
				autoOpen: false,
				maxWidth: 800,
				modal: true,
				draggable: false,
				resizable: false,
				width: 800,
				height: 600,
			});
			$('body').on('click', '.js-tableOfSizes', function(e) {
				e.preventDefault();
			$( "#tableOfSizes_modal" ).dialog( "open" );
		});
		$('body').on('click', '.ui-widget.confirmation_modal .ui-dialog-content input', function(e) {
			$('#tableOfSizes_modal').dialog( "close" );
		});
		$('.ui-dialog').eq(1).addClass('confirmation_modal');
		$('.ui-dialog').addClass('collection_modal');
	};

	if ($( "#edit_collection_modal" ).length) {
			$( "#edit_collection_modal" ).dialog({
	    	autoOpen: false,
	    	maxWidth: 640,
	    	modal: true,
	    	draggable: false,
	    	resizable: false,
	    	width: 640,
	    	height: 250,
	    });
	    $('body').on('click', '.js-editCollectionModal', function(e) {	
	    	e.preventDefault();
		  $( "#edit_collection_modal" ).dialog( "open" );
		});
		$( '#edit_collection_modal' ).parents('.ui-dialog').addClass( 'collection_modal' );
		$( '.ui-dialog-titlebar-close' ).html('');
	};

	if ($( "#edit_collection_modal" ).length) {
			$( "#image_modal" ).dialog({
	    	autoOpen: false,
	    	maxWidth: 572,
	    	modal: true,
	    	draggable: false,
	    	resizable: false,
	    	width: 572,
	    	height: 478,
	    });
	    $('body').on('click', '.js-collectionModalImageBig', function(e) {	
	    	e.preventDefault();
		  $( "#image_modal" ).dialog( "open" );
		});
		$( '#image_modal' ).parents('.ui-dialog').addClass( 'collection_modal' );
		$( '.ui-dialog-titlebar-close' ).html('');
	};
};
/*END Modal generation*/

/*Disable social fields*/
function disableSocialFields() {
    var checkbox = $('input.js-socialCheckbox:checkbox:not(:checked)');

  	if (checkbox.prop('checked')){
    	checkbox.parents('.style-social_field').removeClass('-is-disbled_social_field');
	} else {
	    checkbox.parents('.style-social_field').addClass('-is-disbled_social_field');
	};
	$('body').on('click', '.js-socialCheckbox', function(e) {
		if ($(e.target).prop('checked') == true) {
			$(e.target).parents('.style-social_field').removeClass('-is-disbled_social_field');
		} else {
			$(e.target).parents('.style-social_field').addClass('-is-disbled_social_field');
		};
	});
};
/*END Disable social fields*/

/*Select location dropdown*/
function selectLocation() {
	var firstCountry = $('.js-firstCountry > li:nth-child(1) > a').text(),
		firstCity = $('.js-firstCity > li:nth-child(1) > a').text();
	$('.js-selectedCountry').text(firstCountry);
	$('.js-selectedCity').text(firstCity);
	jQuery('body').on('click', '.js-choiceLocation a', function(e) {
		e.preventDefault();
		$(e.target).parents(".js-choiceLocation").siblings(".js-selectedLocation").text($(this).text());
	});
};
/*End Select location dropdown*/

/*Count letters*/
function countLetters() {
	$('body').on('keydown', '.js-countLettersField', function(e) {
		var lettersLength = $('.js-countLettersField').val().length;
		$('.js-countLettersValue').text(lettersLength);
		if (lettersLength == 0) {
			$('.js-countLettersValue').text(0);
		}
	});
	$('body').on('keydown', '.js-countLettersField2', function(e) {
		var lettersLength = $('.js-countLettersField2').val().length;
		$('.js-countLettersValue2').text(lettersLength);
		if (lettersLength == 0) {
			$('.js-countLettersValue2').text(0);
		}
	});
};
/*End Count letters*/