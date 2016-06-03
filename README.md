# Ionic MS Feed Reader Module
###### Menu module for [Ionic module structure app](https://github.com/DabitNG/ionic-ms-starter)

### Features
This module provides a feed reader to your Ionic MS app.

### Installing module
1. `git clone https://github.com/DabitNG/ionic-ms-feed-reader-module`
2. Extract and place feed-reader folder into www/modules.
2. Go to module-injector.js file under www/modules/main and add `feed-reader` dependency.
3. (If not ussing Gulp) Add the following scrips after module-injector.js in your index.tml

  ```
  <script src="modules/feed-reader/module.js"></script>
  <script src="modules/feed-reader/js/feed-reader.ctrl.js"></script>
  <script src="modules/feed-reader/js/feed-reader.srvc.js"></script>
  ```
4. Modify gulpfile.js sass task. Replace gulp.dest() with `./www/modules/main/css/'` path. This will create a css folder with ionic.app.css and ionic.app.min.css inside main module.
5. Run `gulp sass` and `gulp index`
6. Place the following code into your template's `<ion-content>`
  
  ```
  <ion-list ng-controller="FeedReaderCtrl">
    <ion-item ng-repeat="post in posts">
      <div>
        <h2>{{post.title}}</h2>
        <p>{{post.content}}</p>
      </div>
    </ion-item>
  </ion-list>
  ```

### Support or Contact
Having trouble with this module? Contact with [autor](https://github.com/DabitNG)
