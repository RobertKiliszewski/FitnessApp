angular.module('starter.services', [])

// Factory called FOOD
.factory('Food', function() {
    
    var data = {
        foods: [{ mytitle: "Beans", calories: 200}],
        totalCal : 0
       
    }

    
    function calculateCal(){
        data.totalCal = 0;
        //console.log("Running");
        for (var i = 0; i < data.foods.length; i++)
            {
                data.totalCal += data.foods[i].calories;
            }
        //console.log(data.totalCal);
        
        return data.totalCal;    
        
    }
    
    function addEntry(m, n){
        data.foods.push({mytitle: m, calories: n});
    }
    
    
    return {
        data: data,
        addEntry : addEntry,
        deleteFood: function (del){
          data.foods.splice(data.foods.indexOf(del), 1);
      },
        totalCal : calculateCal
    }
});
