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
						// location.href = 'index.html?'+ $('#username').val();

						var str1 = 'username=' + $('#username').val();
						// var str2 = 'password=' + $('#password').val();
						
						var now = new Date();
						now.setDate(now.getDate() + 7);

						// 有效期1分钟
						// now.setMinutes(now.getMinutes()+1);

						str1 += ';expires=' + now.toUTCString();
						// str2 += ';expires=' + now.toUTCString();
				
						// 把用户名和密码存入cookie
						document.cookie = str1;
						// document.cookie = str2;

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


