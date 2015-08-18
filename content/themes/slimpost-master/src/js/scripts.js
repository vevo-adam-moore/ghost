$(document).ready(function() {
	// FitVids
	$('.post-excerpt').fitVids();	

	// Darkbox
	$('.post-content img').each(function() {
		var imageSrc = $(this).attr('src');
		$(this).wrap('<a href="' + imageSrc + '" rel="darkbox"></a>');
	});

	$('a[rel=darkbox]').darkbox();

	// Highlight.js
	hljs.initHighlightingOnLoad();

	// NProgress
	NProgress.start();
});

$(window).load(function() {
	// NProgress
	NProgress.done();
});