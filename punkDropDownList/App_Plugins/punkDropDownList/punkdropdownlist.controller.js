angular.module("umbraco").controller("punkDropDownListController",
    function ($scope, $q) {
        $scope.isLoaded = false;
        var awaitme = [];

        $q
            .all(awaitme)
            .then(function () {

                if (!$scope.model.value) {
                    if ($scope.model.config.multiple === 1) {
                        $scope.model.value = [];
                    } else {
                        $scope.model.value = "";
                    }
                }
                else if (!angular.isArray($scope.model.value)) {                    
                    if ($scope.model.config.multiple === 1) {
                        var value = $scope.model.value;
                        $scope.model.value = [];
                        $scope.model.value.push(value);
                    }

                }
                else if ($scope.model.config.multiple != 1) {
                    $scope.model.value = $scope.model.value[0];
                }

                $scope.model.config.items.items = $scope.model.config.items.items.filter(function (item) {
                    return item.key !== "" && item.value !== "";
                });

                if ($scope.model.config.useChosen == 1 && $scope.model.config.multiple != 1) {
                    $scope.model.config.items.items.push({ key: '', value: '' });
                }

                $scope.items = $scope.model.config.items.items;

                if ($scope.model.config.multiple == 1) {
                    var onlyValidSelectedItems = [];
                    angular.forEach($scope.items, function (value, key) {
                        var index = $scope.model.value.indexOf(value.key);
                        if (index > -1) {
                            onlyValidSelectedItems.push(value.key);
                        }
                    });
                    $scope.model.value = onlyValidSelectedItems;
                }
                $scope.isLoaded = true;
            });
    });