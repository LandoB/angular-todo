controllers.controller('AuthCtrl', function ($scope) {
		$scope.message='NEWAuthenticateCtrl'
		$scope.showRegister = true;
		$scope.showLogin = false;

		$scope.showLoginBtn = function(){
			$scope.showRegister = false;
			$scope.showLogin = true;
		}

		$scope.showRegisterBtn = function(){
			$scope.showRegister = true;
			$scope.showLogin = false;
		}

	})
