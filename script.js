angular.module('MyApp', [])
  .controller('MainController', ['$scope', '$http', function($scope, $http) {
    $http.get('table.json')
      .then(function(response) {
        $scope.baseList = response.data;
      });

    $scope.testMass = [];

    $scope.getSelected = function(test) {
      if (test !== undefined) {
        $http.get(test + ".json")
          .then(function(response) {
            $scope.selected = response.data;
          });

        angular.element(document.querySelector("#details")).css("visibility", "visible");
        $scope.toggled = true;
      } else {

      }
      
      for (var i = 0; i < $scope.baseList.length; i++) {
        if (test === $scope.baseList[i]['dataName']) {
          $scope.testMass = [];

          var newTestMass = {
            simpleName: $scope.baseList[i]['simpleName'],
            pictureLink: $scope.baseList[i]['pictureLink'],
            attr1: $scope.baseList[i]['attribute1'],
            attr2: $scope.baseList[i]['attribute2'],
            attr3: $scope.baseList[i]['attribute3'],
            attr4: $scope.baseList[i]['attribute4']
          };
          $scope.testMass.push(newTestMass);

          break;
        } else {
          continue;
        }
      }

    };

    $scope.toggled = true;
    $scope.toggle = function() {
      $scope.toggled = !$scope.toggled;
    };

  }]);