/**
 *  Feed Reader controllers module. Feed Reader services required as dependency. 
 *  @author DabitNG 
 */

(function() {

	'use strict';

	/**
	* Feed Reader Module Controller
	*/
	angular.module('feed-reader.controllers',['feed-reader.services'])
	/**
	* URL of your feed
	*/
	.constant('FEED_URL','https://github.com/DabitNG.atom')
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
		$scope.posts = [];
	// Get Feed object from FeedReaderSrvc.read(url);
		FeedReaderSrvc.read(FEED_URL).then(function(data){
			if(data.responseData != null){
				$scope.posts =  data.responseData.feed.entries;
			}  
		});	
	} 

})();

