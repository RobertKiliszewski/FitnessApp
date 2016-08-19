angular.module('starter.controllers', [])

.controller('oneCtrl', function ($scope, Food) {
        
        $scope.data = Food.data;
    
        //delete function
        $scope.deleteFood = function (del) {
            Food.deleteFood(del);
        }
        
        $scope.foods = Food.data.foods;
        $scope.show;
})

//twoCtrl
.controller('twoCtrl', function($scope, Food){
    
    var data = {
        mytitle: "",
        calories: 0
        
  }

    function add(m, n){
        Food.addEntry(m, n);
    }
  //Scopes  
  $scope.data = data;
  $scope.add = add;
});


