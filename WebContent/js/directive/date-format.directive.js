(function(){
	'use strict';
	
	angular.module("tarefas").directive("dateFormat", Directive);
	
	Directive.$inject = [];
	
	function Directive(){
		return{
			restrict : "A",
			link: function(scope, element, attrs, controller){
				element.on('keyup', function(e){
					if(e.which >= 48 && e.which <= 57){
						var value = e.target.value;
						value = value.replace(/\D/g,"");
						value = value.replace(/(\d{2})(\d+)/,"$1/$2");
						value = value.replace(/(\d{2})\/(\d{2})(\d+)/,"$1/$2/$3");
						value = value.replace(/(\d{2})\/(\d{2})\/(\d{4}).*/,"$1/$2/$3");
						e.target.value = value;
					}
			});
		}
	};
}
	
}) ();