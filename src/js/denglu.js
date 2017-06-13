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
						location.href = 'index.html?'+ $('#username').val();
					}else{
						alert ('您还没有注册或者密码不正确');
					}
				}
			})
			event.preventDefault();
		})
	});
});


