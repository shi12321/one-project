require(['config'],function(){
	require(['jquery'],function($){
		let $goodslist = $('.goodslist');

		let pageNo = 1;
		let qty = 16;

		// 请求数据
		$.ajax({
			url:'../api/liebiao.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(res){
				showList(res);

				// 显示分页
				var pageQty = Math.ceil(res.total/res.qty);

				var page_str = '';
				for(var i=1;i<=pageQty;i++){
					page_str += `<li ${res.pageNo==i?'class="active"':''}><a href="#">${i}</a></li>`
				}

				$('.pagination').html(page_str);
			}
		});

		// 点击分页切换
		$('.pagination').on('click','a',function(){
			$(this).parent().addClass('active').siblings().removeClass();
			pageNo = $(this).text();

			$.ajax({
				url:'../api/liebiao.php',
				dataType:'json',
				data:{
					page:pageNo,
					qty:qty
				},
				success:function(res){
					showList(res);
				}
			});

			return false;
		});

		function showList(res){
			let html = res.data.map(item=>{
				return `
					<div class="col-sm-4 col-md-3">
						<div class="thumbnail"  id="${item.id}">
							<img src="../${item.imgurl}" alt="...">
							<div class="caption">
								<h3>${item.name}</h3>
								<p class="price">价格：${item.price}</p>
							
							</div>
						</div>
					</div>
					`
			}).join('');
			$goodslist.html(html);

			// 传递数据
			var lie_r = $('.lie_r');
			lie_r.on('click','div>img',function(){console.log($(this).closest('div').attr('id'))
				location.href = '../html/xiangqing.html?' + $(this).closest('div').attr('id');
			})
		}

		// 头部登录系统
		var list = $('.list-l');

		var cookies = document.cookie;
		
		if(cookies){
			var arr = cookies.split('; ');

			arr.forEach(function(item){
				var temp = item.split('=');
				if(temp[0] === 'username'){
					list.html (temp[1] + '，欢迎登录国家安全系统 <span class="tuichu">退出</span>');
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