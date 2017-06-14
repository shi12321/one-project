require(['config'],function(){
	require(['jquery'],function($){
		$('.btn2').on('click',function(){
			$.ajax({
				url:'../api/denglu.php',

				data:{
					username:$('#username').val(),
					
					password:$('#password').val()
				},
				success:function(res){
					
					if(res == '1'){

						var str1 = 'username=' + $('#username').val();
						
						var now = new Date();
						now.setDate(now.getDate() + 7);


						str1 += ';expires=' + now.toUTCString();
						
						// 把用户名存入cookie
						document.cookie = str1;
				
						location.href = 'index.html';

					}else{
						alert ('您还没有注册或者密码不正确');
					}
				}
			})
			event.preventDefault();
		})
	});
});


