/// <reference path="../reference.ts" />

module Controllers{
    export class TestController{
        message = "foo";
        constructor($scope){
            $scope.vm = this;
        }
    }
}