$(document).ready(function() {
	$('.my_work_article').hide();
	$('.content__my__work').hover(function() {
		$('.my_work_article', this).fadeIn(700);
	}, function() {
		$('.my_work_article, this').fadeOut(500);
	});

	$('.nav__list__mobile').hide();

}); //end ready