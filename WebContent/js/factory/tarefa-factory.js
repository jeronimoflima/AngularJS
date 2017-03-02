(function(){
	'use strict';
	
	angular.module("tarefas").factory("TarefaFactory", Factory);
	
	Factory.$inject = ["$resource"];
	
	function Factory($resource){
		var factory = {};
		
		var resource = $resource("http://localhost:8080/tarefas-rest/api/tarefas/:id", {}, {
			"update": {method: "PUT"}
		});
		
		factory.save = function(tarefa){
			return resource.save({}, tarefa).$promise;
		}
		
		factory.search = function(text){
			var params = {};
			if(text && text.trim() != ""){
				params.search = text;
			}
			return resource.get(params).$promise;
		}
		
		factory.getById = function(id){
			return resource.get({id: id}).$promise;
		}
		
		factory.update = function(id, tarefa){
			return resource.update({ id: id}, tarefa).$promise;
		}
		
		factory.remove = function(id){
			return resource.remove({ id: id }).$promise;
		}
		
		return factory;
	}
})();