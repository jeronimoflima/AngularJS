(function(){
	'use strict';
	
	angular.module("tarefas").filter("capitalize", Filter);
	
	Filter.$inject = ["uppercaseFilter", "lowercaseFilter"];
	
		function Filter(uc, lc){
			return function(input){
				return uc(input);
			};
		}
}) ();

