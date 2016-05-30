(function() {
	
    'use strict';
 
    angular.module('feed-reader.controllers',['feed-reader.services'])

		.controller('FeedReaderCtrl', feedReader)

		function feedReader($scope, FeedReaderSrvc){
			// Uncomment below if you need
			// $scope.posts = [];
			FeedReaderSrvc.read("http://www.feedforall.com/feed-7.gif").then(function(data){
				if(data.responseData != null){
					// Place your code here. Uncomment below if you need
					// $scope.posts =  data.responseData.feed.entries;
				}  
			});	

		} 

})();

