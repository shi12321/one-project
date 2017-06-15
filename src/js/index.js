require(['config'],function(){
	require(['jquery','banner'],function($,banner){
		var quan = $('#quan');
		quan.on('click','div>img',function(){
			location.href = '../html/xiangqing.html?' + $(this).closest('div').attr('id');
		});

		// 头部登录系统
		var list = $('.list-l');

		var cookies = document.cookie;
		
		if(cookies){
			var arr = cookies.split('; ');

			arr.forEach(function(item){
				var temp = item.split('=');
				if(temp[0] === 'username'){
					list.html (temp[1] + '，欢迎登录国家安全系统 <button class="tuichu">退出</button>');
				}
				
			});
		}else{
			list.html(`<li class="a">欢迎来到风尚购物</li>
			<li class="deng"><a href="denglu.html">登录</a></li>
			<li class="zhu"><a href="zhuce.html">注册</a></li>`);	
		}

		// 删除cookie
		// 利用设置有效时间来达到删除的效果
		list.on('click','.tuichu',function(){

			var now = new Date('2017-5-9');

			document.cookie = 'username=null;expires=' + now.toUTCString();

			location.href = 'denglu.html';
		})

	});
});