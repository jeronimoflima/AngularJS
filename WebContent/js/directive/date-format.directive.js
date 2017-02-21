(function(){
	'use strict';
	
	angular.module("tarefas").directive("dateFormat", Directive);
	
	Directive.$inject = [];
	
	function Directive(){
		return{
			restrict : "A",
			require : 'ngModel',
			link: function(scope, element, attrs, ngModel){
				var dateViewFormat = /(\d{2})\/(\d{2})\/(\d{4})/;
				var dateModelFormat = /(\d{4})-(\d{2})-(\d{2})/;
				
				ngModel.$formatters.push(formatter); // model -> view
				ngModel.$parsers.push(parser); // view -> model
				
				function formatter(value){
					if(dateModelFormat.test(value)){
						return value.replace(dateModelFormat,"$3/$2/$1");
					}return value;
				}
				
				function parser(value){
					if(dateViewFormat.test(value)){
						return value.replace(dateViewFormat,"$3-$2-$1");
					}
					return null;
				}
				
				element.on('keyup', function(e){
					if(e.which >= 48 && e.which <= 57){
						var value = e.target.value;
						value = value.replace(/\D/g,"");
						value = value.replace(/(\d{2})(\d+)/,"$1/$2");
						value = value.replace(/(\d{2})\/(\d{2})(\d+)/,"$1/$2/$3");
						value = value.replace(/(\d{2})\/(\d{2})\/(\d{4}).*/,"$1/$2/$3");
						e.target.value = value;
						ngModel.$setViewValue(value);
					}
			});
		}
	};
}
	
}) ();