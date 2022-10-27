$(document).ready(function() {
	$('#btn-next').click(function(event) {
		var slide_sau = $('.active').next();
		console.log(slide_sau.length);
		console.log(slide_sau);
		if(slide_sau.length==2){
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active').addClass('hidden').addClass('a');
			});
			slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai').removeClass('hidden').addClass('active').removeClass('a');
			});
		}
		
	});
	$('#btn-prev').click(function (event) {
		var slide_truoc = $('.active').prev();
		console.log(slide_truoc);
		if(slide_truoc.length==2){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active').addClass('hidden');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai').removeClass('hidden').addClass('active');
			});
		}
	});
});