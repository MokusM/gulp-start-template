//Custom JS code

$(window).on('load', function () {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) {
		$('body').addClass('android');
	} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	}
});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] };
}
/* viewport width */

$(function () {
	/* placeholder*/
	$('input, textarea').each(function () {
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function () {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function () {
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/
	/* components */

	// Options for plugins

	/* components */
});
