angular
  .module('dt-hamburger-menu', [])
  .directive('dtHamburgerMenu', dtHmburgerMenu);

function dtHmburgerMenu() {
  return {
    restrict: 'E',
    templateUrl: 'dt-hamburger-menu.html',
    controller: dtHmburgerMenuCtrl,
    controllerAs: 'dtHamburgerMenu',
    transclude: true
  };
}

function dtHmburgerMenuCtrl() {
  var vm = this;

  vm.isShowingMenu = false;
  vm.openMenu = openMenu;
  vm.closeMenu = closeMenu;

  function openMenu() {

    vm.isShowingMenu = true;
  }

  function closeMenu() {
    vm.isShowingMenu = false;
  }
}

angular
  .module('dt-hamburger-menu')
  .run(['$templateCache', function($templateCache) {
    $templateCache.put("dt-hamburger-menu.html", [
      '<a class="hamburger-menu-button" ng-click="dtHamburgerMenu.openMenu()"></a>',
      '<div class="hamburger-menu-content" ng-class="{active: dtHamburgerMenu.isShowingMenu}">',
        '<div class="hamburger-menu-close-wrapper">',
          '<a class="hamburger-menu-close" ng-click="dtHamburgerMenu.closeMenu()"></a>',
        '</div>',
        '<ng-transclude></ng-transclude>',
      '</div>',
      '<div class="hamburger-backdrop" ng-class="{active: dtHamburgerMenu.isShowingMenu}" ng-click="dtHamburgerMenu.closeMenu()"></div>'
    ].join(''))
  }]);