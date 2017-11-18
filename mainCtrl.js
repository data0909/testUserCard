

angular.module('mainApp',[]).controller('mainCtrl',function($scope,Myservice){
    $scope.contents = null;
     Myservice.getdata().success(function (data){
                   alert('Success');
               $scope.contents=data; // as per  emilySmitley Answer which is Working Good

             });
});
