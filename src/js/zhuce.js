require(['config'],function(){
	require(['jquery'],function($){
		$('.btn2').on('click',function(){
			$.ajax({
				url:'../api/zhuce.php',

				data:{
					username:$('#username').val(),
					password:$('#password').val()
				},
				success:function(res){
					if(res == 1){
						alert ('恭喜你，注册成功，前往登录！！！');
						location.href = 'denglu.html';
					}
						
					if(res != 1){
						alert ('用户名已被注册')
					}
				}
			})
			return false;
		})
	});
});