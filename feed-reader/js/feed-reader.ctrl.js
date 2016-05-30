(function() {
	
    'use strict';
 	
 	/**
 	 * Feed Reader Module Controller
 	 */
    angular.module('feed-reader.controllers',['feed-reader.services'])
    	/**
    	 * URL of your feed
    	 */
    	.constant('FEED_URL','http://www.feedforall.com/feed-7.gif')
    	/**
    	 * Feed Reader Controller
    	 */
		.controller('FeedReaderCtrl', feedReader);

		/**
		 * @param  {$scope}
		 * @param  {FeedReaderSrvc}
		 * @param  {FEED_URL}
		 * @return 
		 */
		function feedReader($scope, FeedReaderSrvc, FEED_URL){
			// Uncomment below if you need
			// $scope.posts = [];
			// Get Feed object from FeedReaderSrvc.read(url);
			FeedReaderSrvc.read(FEED_URL).then(function(data){
				if(data.responseData != null){
					// Place your code here. Uncomment below if you need
					// $scope.posts =  data.responseData.feed.entries;
				}  
			});	
		} 

})();

