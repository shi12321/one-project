require(['config'],function(){
	require(['jquery'],function($){
		
		var biao = $('.car_z_02');
		
		var jinE = $('.jinE');

		var jinE_x = $('.san_jinE');

		var goodslist = getCookie('goodslist');

		goodslist = goodslist ? JSON.parse(goodslist) : [];

		
		var totalPrice = 0;
		biao.html(goodslist.map(function(goods){

	 		totalPrice += goods.price*goods.val;

			return `<table>
				<tr id="${goods.id}" class="car_m">
					<td class="inp">
						<input type="checkbox" class="inp_x" checked  style = "display:none;" />
					</td>
					<td class="tus clearfix">
						<div class="img">
							<a href="xiangqing.html?${goods.id}"><img src="../${goods.imgurl}" alt="" /></a>
						</div>
						<a href="xiangqing.html?${goods.id}"><div class="name">${goods.name}</div><a/>
					</td>
					<td class="num">${goods.num}</td>
					<td class="dan_price">
						<span class="dan_price_x">${goods.price}</span>
					</td>
					<td class="cun">有库存</td>
					<td class="shi">是</td>
					<td class="liang">
						<span class="jian">-</span>
						<input type="text" value="${goods.val}" class="t" />
						<span class="jia">+</span>
					</td>
					<td class="duo_price"><strong>${(goods.price * goods.val).toFixed(2)}</strong></td>
					<td class="cao">
						<p class="shou">收藏<p/>
						<p class="shan">删除<p/>
					</td>
				</tr>
			</table>`

		}))

		// 统计商品种类
		function time(){
			var shuL = $('.shuL');
			var car_m = $('.car_m');
			shuL.html(car_m.length);
		}
		time();
		
		jinE.html(`商品总金额总计:<strong class="zong">${totalPrice.toFixed(2)}<strong/>`);

		jinE_x.html(`商品总金额总计:<strong class="zong">${totalPrice.toFixed(2)}<strong/>`);
		
		// 点击加减事件
		biao.on('click','.jia',function(){
			var inp = $(this).prev();
			var a = inp.val();
			var arr = inp.val(a*1+1*1);
			var shu = a*1+1*1;
			var fu = $(this).parent().parent();

			var id = fu.attr('id');

			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].id === id){
					goodslist[i].val = shu;
					setCookie('goodslist',JSON.stringify(goodslist));
					break;
				}
			}

			var tr = $(this).parent().parent();

			var qian = $(this).parent().prev().find('strong');

			var xj = $(this).parent().next().find('strong');

			var dan_j = $(this).parent().prev().prev().prev().find('span').html();
			
			xj.html((dan_j*shu).toFixed(2));

			var totalPrice = 0; 
            biao.children().each(function(){
                var t = $(this).find('.t').val();
                var p = $(this).find('.dan_price_x').text();
                
                if(parseInt(t)==""||undefined||null || isNaN(t) || isNaN(parseInt(t))){  
                    t=0;  
                }  

                totalPrice += parseInt(t) * parseFloat(p);  
            });  
            jinE.html(`商品总金额共计:<strong class="zong">${totalPrice.toFixed(2)}<strong/>`);
            jinE_x.html(`商品总金额共计:<strong class="zong">${totalPrice.toFixed(2)}<strong/>`);  
		})



		// 商品减事件
		biao.on('click','.jian',function(){

			var inp = $(this).next();

			if(inp.val()<=1){console.log(inp.val())
				inp.val() = 1;
			}

			var a = inp.val();
			var arr = inp.val(a-1);
			var shu = a-1;
			
			var fu = $(this).parent().parent();

			var id = fu.attr('id');

			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].id === id){
					goodslist[i].val = shu;
					setCookie('goodslist',JSON.stringify(goodslist));
					break;
				}
			}

			var tr = $(this).parent().parent();

			var qian = $(this).parent().prev().find('strong');

			var xj = $(this).parent().next().find('strong');

			var dan_j = $(this).parent().prev().prev().prev().find('span').html();
			
			xj.html((dan_j*shu).toFixed(2));

			var totalPrice = 0; 

			biao.children().each(function(){
                var t = $(this).find('.t').val();
                var p = $(this).find('.dan_price_x').text();
                if(parseInt(t)==""||undefined||null || isNaN(t) || isNaN(parseInt(t))){  
                    t=0;  
                }  

                totalPrice += parseInt(t) * parseFloat(p); 
            });  
            jinE.html(`商品总金额共计:<strong class="zong">${totalPrice.toFixed(2)}<strong/>`);
            jinE_x.html(`商品总金额共计:<strong class="zong">${totalPrice.toFixed(2)}<strong/>`);  
		})
         

		// 删除单个商品
		biao.on('click','.shan',function(){

			var tr = $(this).parent().parent();

			var qian = $(this).parent().prev().find('strong');

			var tr = $(this).parent().parent();

			var id = tr.attr('id');

			var zong = $(this).closest('div').next().find('.zong').html();

			var zongjia = parseInt(zong);

			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].id === id){

					// 删除数组中对应的商品
					goodslist.splice(i,1);

					// 重新写入cookie
					setCookie('goodslist',JSON.stringify(goodslist));

					break;
				}
			}
			
			time();

			biao.children().each(function(){
                
                var p = $(this).find('.duo_price').find('strong').text();
               
                totalPrice = zongjia - p;  
                
            });  
            jinE.html(`商品总金额共计:<strong>${totalPrice.toFixed(2)}<strong/>`);
            jinE_x.html(`商品总金额共计:<strong>${totalPrice.toFixed(2)}<strong/>`);

			// 删除DOM节点
			$(this).parent().parent().parent().parent().remove();

		})

		// 利用cookie登录
		var list = $('.list-l');

		var cookies = document.cookie;
		var res = cookies.split('=');

		if(cookies && res[0] == 'username'){
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
			// setCookie('user','',now.toUTCString());

			location.href = 'denglu.html';
		})
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
	})
})