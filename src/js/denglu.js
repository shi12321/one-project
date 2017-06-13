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
					
					if(res == '1'){console.log(66)
						
						alert ('登录成功，跳转首页');

						location.href = 'index.html';
					}else{
						alert ('您还没有注册或者密码不正确')
					}
				}
			})
			event.preventDefault();
		})
	});
});


