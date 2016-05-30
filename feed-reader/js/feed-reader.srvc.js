(function() {

    'use strict';
 
    angular.module('feed-reader.services',[])

    	.constant('GoogleFeedAPI', "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=")

		.factory('FeedReaderSrvc', feedReaderFunctions);

		function feedReaderFunctions($http, $q, GoogleFeedAPI){
			return {
				read: function(url){
					var defered = $q.defer();
        			var promise = defered.promise;
					$http.jsonp(GoogleFeedAPI+ encodeURIComponent(url))
            			.success(function(data) {
            				console.log(data);
               				defered.resolve(data);
            			})
            			.error(function(err) {
             				console.log(err);
               				defered.reject(err);
            			});
        				return promise;
					}				
				}
			}
		}
)();

