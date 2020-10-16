// Слик слайдер
$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true 
	})
 });


// Хедер бургер
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.question__cont,.about,.move-main').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// Прокрутка страницы вниз
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	e.preventDefault();
	
  var target = this.hash,
	$target = $(target);
	
  $('html, body').stop().animate({
	'scrollTop': $target.offset().top
	}, 1000, 'swing', function () {
	window.location.hash = target;
	});
	});

 