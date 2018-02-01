$(document).ready(function() {
	selectedDays();
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