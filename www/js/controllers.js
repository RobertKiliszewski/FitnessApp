angular.module('starter.controllers', [])

.controller('oneCtrl', function ($scope, Food, $interval) {
        
        $scope.data = Food.data;
    
        //delete function
        $scope.deleteFood = function (del) {
            Food.deleteFood(del);
        }
        
        function totalCalories(){
            $scope.totalCalories = Food.totalCal(); 
            console.log("TotalCal = " + $scope.totalCalories)
        }
    
        $scope.totalCalories = 0;
        $scope.foods = Food.data.foods;
        $scope.totalCal = Food.data.totalCal;
    
        $interval(totalCalories, 1000);   
})

//twoCtrl
.controller('twoCtrl', function($scope, Food, $interval){
    
    var data = {
        mytitle: "",
        calories: null
        
  }
    
    
    function add(m, n){
        Food.addEntry(m, n);
        $scope.data.mytitle = "";
        $scope.data.calories = null;
    }
    
    function totalCalories(){
        $scope.totalCalories = Food.totalCal(); 
        //console.log("TotalCal = " + $scope.totalCalories)
    }
    
    
  //Scopes  
  $scope.totalCalories = 0;
  $scope.data = data;
  $scope.add = add;
  $scope.totalCal = Food.data.totalCal;
    
  $interval(totalCalories, 1000);   
});


