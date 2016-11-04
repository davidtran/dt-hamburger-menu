var angular = require('angular');
var dtHamburgerMenu = require('../index.js');

angular
  .module('app', [
    'dt-hamburger-menu'
  ])
  .controller('appCtrl', function () {
    var vm = this;

    vm.testCommand = function () {
      alert('It works!');
    }

    vm.testCommand1 = function () {
      alert('Still works!');
    }

    vm.testCommand2 = function () {
      alert('Enough. Test.');
    }
  });