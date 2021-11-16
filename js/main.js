$(function(){
    $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
    $('.gallery__slider').slick({
	prevArrow: '<button type="button" class=" slick-btn slick-prev"><img src="images/arr-left.svg"></button>',
	nextArrow: '<button type="button" class=" slick-btn slick-prev slick-re"><img src="images/arr-right.svg"></button>'
    });


	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active')
	});
});