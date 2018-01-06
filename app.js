angular.module("myApp",['ngRoute','myApp.page1','myApp.page2'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.otherwise({
				redirectTo: "/page1"
		});
}])
.factory('SNhttpFactory', function($http){
	return{
		get: function(table, params){
			return $http({
				url: 'https://dev41098.service-now.com/api/now/table/' + table,
				method: 'get',
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/json',
					'Authorization':'Basic ' + btoa('admin'+':'+'49Banimu!'),
				},
				params: params
			});
		},
		update: function(table,params,sys_id,data){
			return $http({
				url: 'https://dev41098.service-now.com/api/now/table/' + table + '/' + sys_id,
				method: 'patch',
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/json',
					'Authorization':'Basic ' + btoa('admin'+':'+'49Banimu!'),
				},
				params: params,
				data: data
			});
		},
		delete: function(table,params,sys_id){
			return $http({
				url: 'https://dev41098.service-now.com/api/now/table/' + table + '/' + sys_id,
				method: 'delete',
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/json',
					'Authorization':'Basic ' + btoa('admin'+':'+'49Banimu!'),
				}
			});
		},
	};
})