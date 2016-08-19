angular.module('starter.services', [])

// Factory called FOOD
.factory('Food', function() {
    
    var data = {
        foods: [{ mytitle: "", calories: 0}]
       
    }
    
    function addEntry(m, n){
        data.foods.push({mytitle: m, calories: n});
    }
    
    return {
        data: data,
        addEntry : addEntry,
        deleteFood: function (del){
          data.foods.splice(data.foods.indexOf(del), 1);
      }
    }
});
