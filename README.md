# Ionic MS Feed Reader Module
###### Menu module for [Ionic module structure app](https://github.com/DabitNG/ionic-ms-starter)

### Features
This module provides a feed reader to your Ionic MS app.

### Installing module
1. Extract and place menu folder into www/modules.
2. Go to module-injector.js file under www/modules/main and add `feed-reader` dependency.
3. (If not ussing Gulp with Ionic MS) Add the following scrips after module-injector.js in your index.tml

  ```
  <script src="modules/feed-reader/module.js"></script>
  <script src="modules/feed-reader/js/feed-reader.ctrl.js"></script>
  <script src="modules/feed-reader/js/feed-reader.srvc.js"></script>
  ```
  
4. Modify `modules/feed-reader/js/feed-reader.ctrl.js`, uncomment `$scope` lines to expose to your view, or add your code for another implementations.

### Support or Contact
Having trouble with this module? Contact with [autor](https://github.com/DabitNG)
