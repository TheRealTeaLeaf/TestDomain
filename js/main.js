$(document).ready(function(){
	var panel = $('.panel').css('width');
	alert(panel);
	var width = panel.replace('px','');
	var i = 0;
	$('ul li').each(function(){
		i++;
	});
});