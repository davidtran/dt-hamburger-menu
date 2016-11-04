angular
  .module('dt-hamburger-menu', [])
  .directive('dtHamburgerMenu', dtHmburgerMenu);

function dtHmburgerMenu() {
  return {
    restrict: 'E',
    templateUrl: 'dt-hamburger-menu.html',
    controller: dtHmburgerMenuCtrl,
    controller: 'dtHmburgerMenu',
    transclude: true
  };
}

function dtHmburgerMenuCtrl() {
  var vm = this;

  vm.isShowingMenu = false;

  function showMenu() {
    vm.isShowingMenu = true;
  }

  function hideMenu() {
    vm.isShowingMenu = false;
  }
}

angular
  .module('dt-hamburger-menu')
  .run(['$templateCache', function($templateCache) {
    $templateCache.put("dt-hamburger-menu.html", [
      '<a class="hamburger-menu-button" ng-click="hamburger.openMenu()"></a>',
      '<div class="hamburger-menu-content" ng-class="{active: hamburger.isShowingMenu}">',
        '<div class="hamburger-menu-close-wrapper">',
          '<a class="hamburger-menu-close" ng-click="hamburger.closeMenu()"></a>',
        '</div>',
        '<ng-transclude></ng-transclude>',
      '</div>',
      '<div class="hamburger-menu-backdrop" ng-if="hamburger.isShowingMenu" ng-click="hamburger.closeMenu()"></div>'
    ].join(''))
  }]);