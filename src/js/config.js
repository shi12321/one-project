require.config({
	// baseUrl:js
	//解决缓存问题
	urlArgs: 'v='+ Date.now(),
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'banner':'../lib/banner',
		'common':'../lib/common',
	},
	shim:{
		'banner':['jquery'],
		'common':['jquery'],
	}
})