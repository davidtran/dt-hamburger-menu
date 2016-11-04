# AngularJS Hamburger Menu
Minimal AngularJS hamburger menu for your mobile website

![screen shot 2016-11-04 at 5 20 09 ch](https://cloud.githubusercontent.com/assets/1154740/20003287/4523482a-a2b8-11e6-8f37-4c94c023b069.png)
![screen shot 2016-11-04 at 5 20 17 ch](https://cloud.githubusercontent.com/assets/1154740/20003288/45803f62-a2b8-11e6-8f20-f666d2107c4e.png)

# [Demo](http://davidtran.github.io/angularjs-hamburger-menu/demo/index.html)

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
or

```javascript
var hamburgerMenu = require('dt-hamburger-menu');
```

**Load hamburger menu on startup**
```javascript
angular
  .module('app', ['dt-hamburger-menu']);
```

**Embed menu to your website**

```html
<dt-hamburger-menu>
  <ul class="menu-list">
    <li class="menu-item" ng-click="vm.export()">Export</li>
    <li class="menu-item" ng-click="vm.import()">Import</li>
  </ul>
<dt-hamburger-menu>
```
Remember to define *export()* and *import()* function somewhere in your controller or directive