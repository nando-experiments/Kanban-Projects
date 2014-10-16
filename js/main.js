$(function() {

	$(".kanban .sortable-list").sortable({
		connectWith: '.sortable-list',
		opacity: 0.6,
		placeholder: "placeholder",
		cancel: ".disabled",
		update: function(event, ui) {
			var list    = $(this),
				status  = list.data('status'),
				count   = list.find('li').length,
				badge   = list.parent().parent().find('.badge');

			// update badge
			badge.html(count);

			// ajax
			// $.ajax({
			// 	type: "POST",
			// 	url: ajaxurl,
			// 	data: info,
			// 	context: document.body,
			// 	success: function(){
			// 		console.log('success!');
			// 	}
			// });
	    }
	});

});