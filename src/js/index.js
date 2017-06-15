require(['config'],function(){
	require(['jquery'],function($){
		var quan = $('#quan');
		quan.on('click','div>img',function(){
			location.href = '../html/xiangqing.html?' + $(this).closest('div').attr('id');
		});

		
	});
});