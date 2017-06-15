require(['config'],function(){
	require(['jquery','common'],function($,common){
		var xiang = $('#xiang');
		var zuo = $('.zuo');
		var zhong = $('.zhong');
		var you = $('.you');
		var floor3 = $('.floor3');
		var res = location.search.slice(1);
		$.ajax({
			url:'../api/list.php',
			dataType:'json',
			success:function(data){
				var html;
				$.each(data,function(idx,item){
					if(idx == res - 1){
						zuo.html(`<div class="che_l">
										<img src = "../${item.imgurl}"></div>
										<div class="da" id="fangdajing">
											<div class="con-fangDaIMg"><!-- 正常现实的图片 -->  
												<img src = "../${item.imgurl}" class="da_Img" id='img1'>
												<div class="magnifyingBegin"> <!-- 滑块 -->

	       										</div>
	       										<div class="magnifyingShow"><!-- 放大镜显示的图片 -->
													<img src="../${item.imgurl}" />
       											</div>
											</div>
											
       										
       										<p class="xia">
       											<img src="../img/xiang_x.png">
       										</p>`);

						zhong.html(`<p class="p1">${item.name}</p>
							<p class="p2">商品货号:${item.num}</p>
							<div class="jiage">风尚价:<strong class="qian">￥${item.price}</strong>
								<p calss="chu">促销信息:买赠 首饰盒</p>
							</div>
							<form action="" class="bao">
								<label for="">送至:</label>
								<input type="text" value=" 江西省 南昌市 东湖区" class="di" /><br/>
								<span class="jian">-</span>
								<input type="text" value="1" class="shu_f">
								<span class="jia">+</span> 
								<span class="ku">库存状况:有库存</span><br/>
								<span class="btn1"><strong>立即购买</strong></span>
								<span class="btn2"><strong>加入购物车</strong></span>
							</form>`);
						you.html(`<img src="../img/xianger.png" alt="">`);

						

						// 加入购物车效果
						// var btn2 = $('.btn2');
						var jia = $('.jia');
						var jian = $('.jian');
						var shu = $('.shu_f')[0];
						var copyImg = $('.da_Img');
						var che = $('.che');
						var car_r = che.find('ul').find('.one');
						// var car_r_s = car_r.find('span');

						
						var cloneImgs;
						var body = $('body');

						zhong.on('click','.jia',function(){
							++shu.value;
						})

						zhong.on('click','.jian',function(){
							--shu.value;
							
							if(shu.value <= 1){
								shu.value = 1;
							}		
						})
						
						

						var goodslist = getCookie('goodslist');

						goodslist = goodslist ? JSON.parse(goodslist) : [];

						// 点击加入购物车按钮

						zhong.on('click','.btn2',function(){

							var fus = $(this).parent().parent().prev();
							
							var imgs = fus.children().eq(1).find('img');

							cloneImgs02 = copyImg.clone();

							cloneImgs02.css({
			                    position:'absolute',
			                    left:imgs.offset().left,
                    			top:imgs.offset().top ,
			                    width:380,
			                    height:380,
			                }).appendTo('body');

							cloneImgs02.animate({
			                    left:car_r.offset().left,
			                    top:car_r.offset().top,
			                    width:10,	
			                    height:10
			                },function(){
			                   // 删除动画图片
			                   cloneImgs02.remove();
			                });   

							// 把数据利用cookie传到购物车页面
							
							var now = new Date();
							
							now.setDate(now.getDate() + 7);

							var val = shu.value;

							for(var i=0;i<goodslist.length;i++){
								if(goodslist[i].id === res){
									goodslist[i].val = goodslist[i].val*1 + val*1;
									break;
								}
							}
							
							if(i===goodslist.length){
								var goods = {
									imgurl:item.imgurl,
									name:item.name,
									price:item.price,
									num:item.num,
									val:val,
									id:item.id,
								};

								goodslist.push(goods);
							}
						
							// 设置cookie
							setCookie('goodslist',JSON.stringify(goodslist),now.toUTCString());
						})
						

						//  放大镜效果
						$(function(){
						    $.fn.magnifying = function(){  
						        var that = $(this),  
						         $imgCon = that.find('.con-fangDaIMg'),//正常图片容器  
						            $Img = $imgCon.find('img'),//正常图片，还有放大图片集合  
						           $Drag = that.find('.magnifyingBegin'),//拖动滑动容器  
						           $show = that.find('.magnifyingShow'),//放大镜显示区域  
						        $showIMg = $show.find('img'),//放大镜图片  
						        $ImgList = that.find('.con-FangDa-ImgList > li >img'),  
						        multiple = $show.width()/$Drag.width();//倍数  
						  
						        $imgCon.mousemove(function(e){
						            $Drag.css('display','block');  
						            $show.css('display','block');  
						            //获取坐标的方法  
						            var iX = e.pageX - $(this).offset().left - $Drag.width()/2,  
						                iY = e.pageY - $(this).offset().top - $Drag.height()/2,   
						                MaxX = $imgCon.width()-$Drag.width(),  
						                MaxY = $imgCon.height()-$Drag.height();  
						            /*判断最大最小值 */
						            iX = iX > 0 ? iX : 0;  
						            iX = iX < MaxX ? iX : MaxX;  
						            iY = iY > 0 ? iY : 0;  
						            iY = iY < MaxY ? iY : MaxY;    
						            $Drag.css({left:iX+'px',top:iY+'px'});            
						            $showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});  
						        });  
						        $imgCon.mouseout(function(){ 
						            $Drag.css('display','none');  
						            $show.css('display','none');  
						        });  
						        $ImgList.click(function(){  
						            var NowSrc = $(this).attr('src');  
						            $Img.attr('src',NowSrc);  
						            $(this).parent().addClass('active').siblings().removeClass('active');  
						        });   
						    }  
						    $("#fangdajing").magnifying();  
						}); 
					}
				})
			}
		})

		// 头部登录系统
		var list = $('.list-l');

		var cookies = document.cookie;
		
		if(cookies){
			var arr = cookies.split('; ');

			arr.forEach(function(item){
				var temp = item.split('=');console.log(temp[0])
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