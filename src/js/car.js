require(['config'],function(){
	require(['jquery'],function($){
		
		var biao = $('.car_z_02');

		var goodslist = getCookie('goodslist');

		goodslist = goodslist ? JSON.parse(goodslist) : [];
		
		 biao.html(goodslist.map(function(goods){
			return `<table>
				<tr id="${goods.id}" class="car_m">
					<td class="inp">
						<input type="checkbox" class="inp_x" checked />
					</td>
					<td class="tus clearfix">
						<div class="img">
							<a href="xiangqing.html?+${goods.id}"><img src="../${goods.imgurl}" alt="" /></a>
						</div>
						<a href="xiangqing.html?+${goods.id}"><div class="name">${goods.name}</div><a/>
					</td>
					<td class="num">${goods.num}</td>
					<td class="dan_price">
						<span class="dan_price_x">￥${goods.price}</span>
					</td>
					<td class="cun">有库存</td>
					<td class="shi">是</td>
					<td class="liang">
						<a href="#" class="jian_a"><span class="jian">-</span></a>
						<input type="text" value="${goods.val}" />
						<a href="#" class="jia_a"><span class="jia">+</span></a>
					</td>
					<td class="duo_price"><strong>￥${goods.price * goods.val}</strong></td>
					<td class="cao">
						<p class="shou">收藏<p/>
						<p class="shan">删除<p/>
					</td>
				</tr>
			</table>`
		}))

		 // 删除单个商品
		biao.on('click','.shan',function(){
			
			var tr = $(this).parent().parent();

			var id = tr.attr('id');

			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].id === id){

					// 删除数组中对应的商品
					goodslist.splice(i,1);

					// 重新写入cookie
					setCookie('goodslist',JSON.stringify(goodslist));

					break;
				}
			}

			// 删除DOM节点
			// removeChild
			tr.remove();
			// console.log(tr.parent())
			// render();
				// }
			// }
		})
	})
})