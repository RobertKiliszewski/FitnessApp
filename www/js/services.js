angular.module('starter.services', [])

// Factory called Food
.factory('Food', function() {
    
    //A variable called data that stores Food name and its calorie amount
    var data = {
        foods: [{date:new Date(), mytitle: "Beans", calories: 200}],
        totalCal : 0
       
    }

    //This function is for calculating calories
    function calculateCal(){
        data.totalCal = 0;
        
        //For loop for the actual calculation
        for (var i = 0; i < data.foods.length; i++)
            {
                data.totalCal += data.foods[i].calories;
            }
        //This returns the total calorie number 
        return data.totalCal;    
    }
    
    //This function adds Entries to the first tab
    function addEntry(m, n){
        data.foods.push({date: new Date(), mytitle: m, calories: n});
    }
    
    //This Returns everything thats used on screen
    return {
        data: data,
        addEntry : addEntry,
        //Delete function using splice from http://stackoverflow.com/questions/36687245/how-to-use-arrays-splice-method-in-ion-list
        deleteFood: function (del){
          data.foods.splice(data.foods.indexOf(del), 1);
      },
        totalCal : calculateCal
    }
});
