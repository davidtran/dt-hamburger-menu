# AngularJS Hamburger Menu
Minimal AngularJS hamburger menu for your mobile website

![screen shot 2016-11-04 at 5 10 36 ch](https://cloud.githubusercontent.com/assets/1154740/20002277/bb912604-a2b2-11e6-81a8-1bd44441a971.png)
![screen shot 2016-11-04 at 5 10 48 ch](https://cloud.githubusercontent.com/assets/1154740/20002278/bbfdbd28-a2b2-11e6-99e6-1780af539138.png)

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