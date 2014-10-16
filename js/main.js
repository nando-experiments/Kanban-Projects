/*!
 * JQUERY UI - KANBAN PROJECTS
 *
 * @author Fernando Moreira <f@nandomoreira.me>;
 * Licensed under the MIT license
 */
$(function() {
	var kanban = $(".kanban .sortable-list"),
		oldList, newList, item, newCount, oldCount,
		message = $('.message');

	message.hide();

	kanban.sortable({
		connectWith: '.sortable-list',
		opacity: 0.6,
		placeholder: "placeholder",
		forcePlaceholderSize: true,
		cancel: ".disabled",
		help: "clone",
		items: 'li',
		start : function(event, ui) {
			$(this).sortable("refresh");
			item    = ui.item;
			newList = oldList = ui.item.parent();
		},
		change : function(event, ui) {
			if (ui.sender) {
                newList = ui.placeholder.parent();
            }
		},
		stop : function() {
			newCount = newList.find('li').length;
			oldCount = oldList.find('li').length;

			// update badges to new and old list
			newList.parent().find('.badge').html( newCount );
			oldList.parent().find('.badge').html( oldCount );

			message.fadeIn(200);
			message.find('.msg').html("Moved <strong>" + item.text() + "</strong> from <strong>" + oldList.parent().attr('id') + "</strong> to <strong>" + newList.parent().attr('id') + "</strong>");
		},
		update: function(event, ui) {
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
	}).disableSelection();

});