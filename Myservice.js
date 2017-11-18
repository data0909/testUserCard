angular.module('mainApp').factory('Myservice', function($http){
    return {
        getdata: function(){
              return $http.get('http://jsonplaceholder.typicode.com/users'); // You Have to give Correct Url either Local path or api etc 

        }
    };
});