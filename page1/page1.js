angular.module("myApp.page1",['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/page1', {
			templateUrl: "page1/page1.html",
			controller: "page1Ctrl"
		})
}])
.controller('page1Ctrl', function($scope,$http,SNhttpFactory){
	$scope.params = {
		sysparm_display_value: "false"
	};
	$scope.send = function(e){
		e.preventDefault();
		SNhttpFactory[this.type](this.table,this.params,this.sys_id,this.data)
		.then(function(response){
			console.log(response.data.result);
			$scope.response = JSON.stringify(response.data.result);
		});
	};

});