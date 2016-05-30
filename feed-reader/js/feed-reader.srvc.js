/**
 *  Feed Reader services module. 
 *  @author DabitNG 
 */

(function() {

  'use strict';

  /**
  * Feed Reader Module Service
  */
  angular.module('feed-reader.services',[])
  /**
  * Google Feed API URL
  */
  .constant('GoogleFeedAPI', "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=")

  /**
  * Feed Reader Factory
  */
  .factory('FeedReaderSrvc', feedReaderFunctions);

  /**
  * @param  {$http}
  * @param  {$q}
  * @param  {GoogleFeedAPI}
  * @return {function}
  */
  function feedReaderFunctions($http, $q, GoogleFeedAPI){
    return {
      read: function(url){
        var defered = $q.defer();
        $http.jsonp(GoogleFeedAPI+ encodeURIComponent(url))
        .success(function(data) {
          console.log(data);
          defered.resolve(data);
        });
        return defered.promise;
      }				
    }
  }
})();

