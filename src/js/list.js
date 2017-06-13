require(['config'],function(){
	require(['jquery'],function($){
		let $hotl = $('.hot-l');
		let $chan1 = $('.chan1');
		let $chan2 = $('.chan2');
		let $chan3 = $('.chan3');
		let $chan4 = $('.chan4');
		let $chan5 = $('.chan5');
		let $chan6 = $('.chan6');
		

		// 请求数据
		$.ajax({
			url:'../api/list.php',
			dataType:'json',
			

			success:function(data){
				// showList(data);
				
				var html = data.map(function(item){
					if(item.category == 'hot'){
						return `<div class="${item.category}${item.id}" id="${item.id}">
							<img src="../${item.imgurl}" alt="">
							<div class="yi-01">
								<h4><a href="">${item.name}</a></h4>
								<p class="price">￥${item.price}</p>
							</div>
						</div>`
					}
				}).join('');
				$hotl.html(html);

				var html2 = data.map(function(item){
					if(item.category == 'jiaju'){
						return `<div class="${item.category}${item.id}" id="${item.id}">
							<img src="../${item.imgurl}" alt="">
							<div class="yi-01">
								<h4><a href="">${item.name}</a></h4>
								<p class="price">￥${item.price}</p>
							</div>
						</div>`
					}
				}).join('');
				$chan1.html(html2);

				var html3 = data.map(function(item){
					if(item.category == 'fu'){
						return `<div class="${item.category}${item.id}" id="${item.id}">
							<img src="../${item.imgurl}" alt="">
							<div class="yi-01">
								<h4><a href="">${item.name}</a></h4>
								<p class="price">￥${item.price}</p>
							</div>
						</div>`
					}
				}).join('');
				$chan2.html(html3);

				var html4 = data.map(function(item){
					if(item.category == 'shi'){
						return `<div class="${item.category}${item.id}" id="${item.id}">
							<img src="../${item.imgurl}" alt="">
							<div class="yi-01">
								<h4><a href="">${item.name}</a></h4>
								<p class="price">￥${item.price}</p>
							</div>
						</div>`
					}
				}).join('');
				$chan3.html(html4);

				var html5 = data.map(function(item){
					if(item.category == 'zhu'){
						return `<div class="${item.category}${item.id}" id="${item.id}">
							<img src="../${item.imgurl}" alt="">
							<div class="yi-01">
								<h4><a href="">${item.name}</a></h4>
								<p class="price">￥${item.price}</p>
							</div>
						</div>`
					}
				}).join('');
				$chan4.html(html5);

				var html6 = data.map(function(item){
					if(item.category == 'mei'){
						return `<div class="${item.category}${item.id}" id="${item.id}">
							<img src="../${item.imgurl}" alt="">
							<div class="yi-01">
								<h4><a href="">${item.name}</a></h4>
								<p class="price">￥${item.price}</p>
							</div>
						</div>`
					}
				}).join('');
				$chan5.html(html6);

				var html7 = data.map(function(item){
					if(item.category == 'bao'){
						return `<div class="${item.category}${item.id}" id="${item.id}">
							<img src="../${item.imgurl}" alt="">
							<div class="yi-01">
								<h4><a href="">${item.name}</a></h4>
								<p class="price">￥${item.price}</p>
							</div>
						</div>`
					}
				}).join('');
				$chan6.html(html7);
			}
		});
		var quan = $('#quan');
		quan.on('click','div>img',function(){
			location.href = '../html/xiangqing.html?' + $(this).closest('div').attr('id');
		});
	});
});