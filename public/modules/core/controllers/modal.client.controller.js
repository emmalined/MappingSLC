/**
 * Created by steve on 1/14/15.
 */
'use strict';

angular.module('core').controller('ModalController', ['$scope', 'Authentication','$modal','$location','$http',
    function($scope, Authentication,$modal,$location,$http) {
        $scope.authentication = Authentication;



    }
]);