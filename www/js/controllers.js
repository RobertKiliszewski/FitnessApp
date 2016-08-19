angular.module('starter.controllers', [])
//Use $interval documentation to update calories, reference: Lab timer app.
.controller('oneCtrl', function ($scope, Food, $interval) {
        
        $scope.data = Food.data;
    
        //delete function
        $scope.deleteFood = function (del) {
        Food.deleteFood(del);
        };
        
        //This function counts all the calories
        function totalCalories(){
            $scope.totalCalories = Food.totalCal(); 
            console.log("TotalCal = " + $scope.totalCalories)
        }
    
        //Scopes
        $scope.totalCalories = 0;
        $scope.foods = Food.data.foods;
        $scope.totalCal = Food.data.totalCal;
        
        //interval keeps counting every few seconds to add up the total amount of calories  
        $interval(totalCalories, 1000);   
})

//Controller for 
.controller('twoCtrl', function($scope, Food, $interval){
    
    var data = {
        mytitle: "",
        calories: null
        
  }
    
    //Function for adding food and calories into the first tab
    function add(m, n){
        Food.addEntry(m, n);
        $scope.data.mytitle = "";
        $scope.data.calories = null;
    }
    
    //This function
    function totalCalories(){
        $scope.totalCalories = Food.totalCal(); 
        
    }
    
    
    //Scopes  
    $scope.totalCalories = 0;
    $scope.data = data;
    $scope.add = add;
    $scope.totalCal = Food.data.totalCal;
    
    //This interval makes the timer for the totalCalories Loop
    $interval(totalCalories, 1000);   
});


