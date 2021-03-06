/// <reference path="_reference.ts" />
(function() {
    "use strict";

    var mainApplicationModuleName = "app";
    var app = angular.module(mainApplicationModuleName, ['ngRoute', 'ngResource', 'todoRoutes', 'todoServices', 'todoControllers']);
    // wait for web page to load then manually bootstrap angular
    angular.element(document).ready(() => {
        angular.bootstrap(document, [mainApplicationModuleName]);
    });


    /*
    // Manual Bootstrap
    var mainApplicationModuleName = "app";
    var app = angular.module(mainApplicationModuleName, ['ngRoute', 'ngResource']);
    angular.element(document).ready(() => {
        angular.bootstrap(document, [mainApplicationModuleName]);
    });

    // Services ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    app.factory('Todos', ['$resource', ($resource) => {
        return $resource('/todos/:id', null, {
            'update': { method: 'PUT' }
        });
    }]);

    // Controllers +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // start TodoController
    app.controller('TodoController', ['$scope', 'Todos', ($scope, Todos) => {
        $scope.editing = [];
        $scope.username = '';
        $scope.userTodos = [];

        $scope.setUserName = (userName) => {
            $scope.username = userName; //get the username
            $scope.todos = Todos.query(function() {
                $scope.userTodos = []; // reset the userTodos array
                $scope.todos.forEach(function(todo) {
                    if (todo.username == $scope.username) {
                        $scope.userTodos.push(todo);
                    }
                });
                $scope.todos = $scope.userTodos;
            });
        };

        $scope.save = () => {
            if (!$scope.newTodo || $scope.newTodo.length < 1) {
                return;
            }
            var todo = new Todos({ name: $scope.newTodo, username: $scope.username, completed: false });

            todo.$save(() => {
                $scope.todos.push(todo);
                $scope.newTodo = ''; // clear textbox
            });
        };

        $scope.update = (index) => {
            var todo = $scope.todos[index];
            Todos.update({ id: todo._id }, todo);
            $scope.editing[index] = false;
        };

        $scope.edit = (index) => {
            $scope.editing[index] = angular.copy($scope.todos[index]);
        };

        $scope.cancel = (index) => {
            $scope.todos[index] = angular.copy($scope.editing[index]);
            $scope.editing[index] = false;
        };

        $scope.remove = (index) => {
            var todo = $scope.todos[index];
            Todos.remove({ id: todo._id }, () => {
                $scope.todos.splice(index, 1);
            });
            $scope.editing[index] = false;
        };

        $scope.remainingTodos = () => {
            var count = 0;
            angular.forEach($scope.todos, (todo) => {
                if ($scope.username == todo.username) {
                    count += todo.completed ? 0 : 1;
                }
            });
            return count;
        };

        $scope.totalTodos = () => {
            var count = 0;
            angular.forEach($scope.todos, (todo) => {
                if ($scope.username == todo.username) {
                    count++;
                }
            });
            return count;
        }
    }]); // end TodoController

    // start TodoDetailController
    app.controller('TodoDetailController', ['$scope', '$routeParams', 'Todos', '$location',

        function($scope, $routeParams, Todos, $location) {
            $scope.todo = Todos.get({ id: $routeParams.id });

            $scope.update = () => {
                Todos.update({ id: $scope.todo._id }, $scope.todo, () => {
                    $location.url('/');
                });
            }

            $scope.remove = () => {
                Todos.remove({ id: $scope.todo._id }, () => {
                    $location.url('/');
                });
            }

            $scope.cancel = () => {
                $location.url('/');
            }
        }]); // end TodoDetailController

    // Routes ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: '/todos.html',
                controller: 'TodoController'
            })
            .when('/:id', {
                templateUrl: '/todoDetails.html',
                controller: 'TodoDetailController'
            });
    }]); // end Routes
*/

})();