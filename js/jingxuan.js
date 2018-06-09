//tab 切换
$(document).ready(function() {
	var $wrapper = $('.jx-products'),
		$allTabs = $wrapper.find('#jx-container > div'),
		$tabMenu = $wrapper.find('#tab_title li'),
		$line = $('<div class="line"></div>').appendTo($tabMenu);
	$allTabs.not(':first-of-type').hide();  
	$tabMenu.filter(':first-of-type').find(':first').width('100%')
	$tabMenu.each(function(i){
		$(this).attr('data-tab', 'tab'+i);
	});
	$allTabs.each(function(i){
		$(this).attr('data-tab', 'tab'+i);
	});
  
	$tabMenu.on('click', function(e) {
		e.preventdefault;
		var dataTab = $(this).data('tab'),
		$getWrapper = $(this).closest($wrapper);
	
		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');
	
		$getWrapper.find('.line').width(0);
		$(this).find($line).animate({'width':'100%'}, 'fast');
		$getWrapper.find($allTabs).hide();
		$getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
	});
});