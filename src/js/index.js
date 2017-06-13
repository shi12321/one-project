require(['config'],function(){
	require(['jquery'],function($){
		var quan = $('#quan');
		quan.on('click','div>img',function(){
			location.href = '../html/xiangqing.html?' + $(this).closest('div').attr('id');
		});

		var res = location.search.slice(1);

		var list = $('.list-l');

		if(res != ''){

			var list_x = list.children().hide();
			var cha = $('<span class="deng">');
			var tui = $('<span class="tui">');

			cha.html(res + ',欢迎登陆风尚购物');
			tui.html('退出');
			list.append(cha);
			list.append(tui);

			tui.on('click',function(){
				location.href = 'index.html';
			})
		}
	});
});