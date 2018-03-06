$(document).ready(function() {
	customScrollbar();
	ordersScrollbar();
	chartTableScrollbar();
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
	reasonReprint();
	selectCheckboxes();
	profitHintModal();
	preferencesHintModal();
	mobileMenu();
	mobileFilters();
});

// Scrollbar (edit product 2)
function customScrollbar(){
	if ($('.imageModelsList').length) {
		$('.imageModelsList').mCustomScrollbar();
	};
};
function ordersScrollbar() {
	if ($('.mobileBoard').length) {
		$('.mobileBoard').mCustomScrollbar({
			axis:"x",
		});
	};
};
function chartTableScrollbar() {
	if ($('.js-chartTableScroll').length) {
		$('.js-chartTableScroll').mCustomScrollbar({
			axis:"x",
		});
	};
};
// End Scrollbar (edit product 2)

/*Show days in dashboard*/
function selectedDays() {
	var firstDay = $('.js-selectedDay > li:nth-child(1) > a').text();
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
	var firstDay = $('.js-selectedStyle > li:nth-child(1) > a').text();
	$('.js-selectedCurrentStyle').text(firstDay);
	jQuery('body').on('click', '.js-selectedStyle a', function(e) {
		e.preventDefault();
		$('.js-selectedCurrentStyle').text($(this).text());
	});
};
/*END Show style of product*/

/*Reason reprint select*/
function reasonReprint() {
	var firstDay = $('.js-reasonReprint > li:nth-child(1) > a').text();
	$('.js-selectedReasonReprint').text(firstDay);
	jQuery('body').on('click', '.js-reasonReprint > li > a', function(e) {
		e.preventDefault();
	    $('.js-selectedReasonReprint').text($(this).text());
		if ($(e.target).parent().hasClass('js-otherReason')) {
			$('.style-custom_reason_row').addClass('-style-active_custom_reason');
		} else {
			$('.style-custom_reason_row').removeClass('-style-active_custom_reason');
		};
	});
};
/*END Reason reprint select*/

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
	if ($(window).width() <= 450) {
		$('.products_items_wrapper').addClass('-style_products_items_columns').removeClass('-style_products_items_horisontal');
	};
}
$(window).resize(function() {
	styleProductsList();
});
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

/*Reprint order checkboxes select all*/
function selectCheckboxes() {
	var mainCheckbox = $(".js-reprintMainCheckbox");

	if (mainCheckbox.prop('checked')) {
		$('.js-reprintCheckbox').prop('checked', true);
	} else {
		$('.js-reprintCheckbox').removeAttr('checked');
	};

	$('body').on('click', '.js-reprintMainCheckbox', function(e) {
		if ($(e.target).prop('checked') == true) {
			$('.js-reprintCheckbox').prop('checked', true);
		} else {
			$('.js-reprintCheckbox').removeAttr('checked');
		};
	});
	$('body').on('click', '.js-reprintCheckbox', function(e) {
		if ($(e.target).prop('checked') == false) {
			$('.js-reprintMainCheckbox').removeAttr('checked');
		}
	});
};
/*END Reprint order checkboxes select all*/

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

	if ($( "#confirmation_modal" ).length) {
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

	if ($("#price_variants").length) {
		$( "#price_variants" ).dialog({
				autoOpen: false,
				maxWidth: 800,
				modal: true,
				draggable: false,
				resizable: false,
				width: 800,
				height: 600,
			});
			$('body').on('click', '.js-priceVariants', function(e) {
				e.preventDefault();
			$( "#price_variants" ).dialog( "open" );
		});
		$('body').on('click', '.ui-widget.confirmation_modal .ui-dialog-content input', function(e) {
			$('#price_variants').dialog( "close" );
		});
		$( '#price_variants' ).parents('.ui-dialog').addClass( 'collection_modal -style_priceVariantsModal' );
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
	    	height: 478
	    });
	    $('body').on('click', '.js-collectionModalImageBig', function(e) {
	    	e.preventDefault();
		  $( "#image_modal" ).dialog( "open" );
		});
		$( '#image_modal' ).parents('.ui-dialog').addClass( 'collection_modal' );
		$( '.ui-dialog-titlebar-close' ).html('');
	};

	if ($( "#profitHintModal" ).length) {
			$( "#profitHintModal" ).dialog({
	    	autoOpen: false,
	    	maxWidth: 300,
	    	modal: true,
	    	draggable: false,
	    	resizable: false,
	    	width: 300,
	    	height: 478
	    });
	    $('body').on('click', '.js-profitHint', function(e) {
	    	e.preventDefault();
		  $( "#profitHintModal" ).dialog( "open" );
		});
		$( '#profitHintModal' ).parents('.ui-dialog').addClass( 'collection_modal' );
		$( '.ui-dialog-titlebar-close' ).html('');
	};

	if ($( "#preferencesHintModal" ).length) {
			$( "#preferencesHintModal" ).dialog({
	    	autoOpen: false,
	    	maxWidth: 300,
	    	modal: true,
	    	draggable: false,
	    	resizable: false,
	    	width: 300,
	    	height: 478
	    });
	    $('body').on('click', '.js-preferencesHint', function(e) {
	    	e.preventDefault();
		  $( "#preferencesHintModal" ).dialog( "open" );
		});
		$( '#preferencesHintModal' ).parents('.ui-dialog').addClass( 'collection_modal' );
		$( '.ui-dialog-titlebar-close' ).html('');
	};

	if ($( "#preferences_modal" ).length) {
			$( "#preferences_modal" ).dialog({
	    	autoOpen: false,
	    	maxWidth: 572,
	    	modal: true,
	    	draggable: false,
	    	resizable: false,
	    	width: 520,
	    	height: 478
	    });
	    $('body').on('click', '.js-preferencesModal', function(e) {
	    	e.preventDefault();
		  $( "#preferences_modal" ).dialog( "open" );
		});
		$('body').on('click', '.ui-widget.collection_modal .js-closeModalButtons button', function(e) {
			$( '#preferences_modal' ).dialog( "close" );
		});
		$( '#preferences_modal' ).parents('.ui-dialog').addClass( 'collection_modal -style-noCloseButton' );
		$( '.ui-dialog-titlebar-close' ).html('');
	};

	if ($( "#reprint_order_modal" ).length) {
			$( "#reprint_order_modal" ).dialog({
	    	autoOpen: false,
	    	modal: true,
	    	draggable: false,
	    	resizable: false,
	    	height: 478
	    });
	    $('body').on('click', '.js-reprintModal', function(e) {
	    	e.preventDefault();
		  $( "#reprint_order_modal" ).dialog( "open" );
		});
		$( '#reprint_order_modal' ).parents('.ui-dialog').addClass( 'collection_modal -style-reprint-modal' );
		$( '.ui-dialog-titlebar-close' ).html('');
	};
};
/*END Modal generation*/

/*Profit hint mobile popup*/
function profitHintModal() {
	if($(window).width() < 902) {
		$('.profit_hint').addClass('js-profitHint');
	} else {
		$('.profit_hint').removeClass('js-profitHint');
	}
}
$(window).resize(function() {
	profitHintModal();
});
/*END Profit hint mobile popup*/

/*Preferences hint mobile popup*/
function preferencesHintModal() {
	if($(window).width() < 902) {
		$('.preferences_hint').addClass('js-preferencesHint');
	} else {
		$('.preferences_hint').removeClass('js-preferencesHint');
	}
}
$(window).resize(function() {
	preferencesHintModal();
});
/*END Preferences hint mobile popup*/

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
	$('body').on('keyup', '.js-countLettersField', function(e) {
		var lettersLength = $('.js-countLettersField').val().length;
		$('.js-countLettersValue').text(lettersLength);
		if (lettersLength == 0) {
			$('.js-countLettersValue').text(0);
		}
	});
	$('body').on('keyup', '.js-countLettersField2', function(e) {
		var lettersLength = $('.js-countLettersField2').val().length;
		$('.js-countLettersValue2').text(lettersLength);
		if (lettersLength == 0) {
			$('.js-countLettersValue2').text(0);
		}
	});
};
/*End Count letters*/

/*Stripe activation*/
if ( $(".billing_card").length ) {
(function() {
var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

// Create an instance of Elements
var elements = stripe.elements();

  var elementStyles = {
    base: {
	    color: '#32325d',
	    lineHeight: '18px',
	    fontSmoothing: 'antialiased',
	    '::placeholder': {
	      color: '#aab7c4'
	    }
	},
    invalid: {
      color: '#58666E',
      iconColor: '#fa755a'
    }
  };

  var elementClasses = {
    focus: 'focus',
    empty: 'empty',
    invalid: 'invalid',
  };

  var cardNumber = elements.create('cardNumber', {
    style: elementStyles,
    classes: elementClasses,
  });

  cardNumber.mount('#billing-card-number');

  var cardExpiry = elements.create('cardExpiry', {
    style: elementStyles,
    classes: elementClasses,
  });
  cardExpiry.mount('#billing-card-expiry');

  var cardCvc = elements.create('cardCvc', {
    style: elementStyles,
    classes: elementClasses,
  });
  cardCvc.mount('#billing-card-cvc');

  var form = document.getElementById('payment-form');
	form.addEventListener('submit', function(event) {
	  event.preventDefault();

	  stripe.createToken(cardNumber, cardCvc, cardExpiry).then(function(result) {
	    if (result.error) {
	      // Inform the user if there was an error
	      var errorElement = document.getElementById('card-errors');
	      //errorElement.textContent = result.error.message;
	    } else {
	      // Send the token to your server
	      stripeTokenHandler(result.token);
	    }
	  });
	});
})();
}


function mobileMenu(){
	$('body').on('click', '.mainMenu_toggle', function(){
		$(this).toggleClass('active');
		$('body').toggleClass('-style_fixed');
		$('.mainMenu_list').toggleClass('active');
		$('.js-mainContent').toggleClass('-mainMenu_active');
		$('.js-mobileMenu_expandSub').removeAttr('data-toggle aria-haspopup aria-expanded');
	});

	$('body').on('click', '.js-mobileMenu_expandSub', function(){
		$(this).parent().toggleClass('active');
	});
}

function mobileFilters(){
	$('body').on('click', '.js-filtersToggler', function(e){
		$(this).parents('.js-nawMenu').toggleClass('filtersActive');
	});

	$('body').on('click', '.js-nawMenu .sub_menu a', function(e){
		e.preventDefault();
		$(this).parent().siblings().find('a').removeClass('active');
		$(this).toggleClass('active');
	});
}
