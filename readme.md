# AngularJS Hamburger Menu
Minimal AngularJS hamburger menu for your mobile website

Demo:

## Usage
**Bower:**
```
bower install dt-hamburger-menu
```
or

**NPM**
```
npm install dt-hamburger-menu
```

**Imports**
```html
<link rel="stylesheet" type="text/css" href="/path/to/dt-hamburger-menu/src/hamburger-menu.css"/>
<script src="/path/to/angularjs/angular.min.js"></script>
<script src="/path/to/dt-hamburger-menu/src/hamburger-menu/hamburger-menu.min.js"></script>
```
**Load hamburger menu on startup**
```javascript
angular
  .module('app', ['dt-hamburger-menu']);
```

**Embed menu to your website**

```html
<hamburger>
  <ul class="menu-list">
    <li class="menu-item" ng-click="vm.export()">Export</li>
    <li class="menu-item" ng-click="vm.import()">Import</li>
  </ul>
<hamburger>
```
Remember to define *export()* and *import()* function somewhere in your controller or directive