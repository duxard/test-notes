var newApp = angular.module("newApp", []);

newApp.controller("MainController", ["$scope", function($scope){
    var startingIndex = 0,
        title = document.getElementById("title"),
        text = document.getElementById("text");
    
    $scope.removeNote = function(item){
        var removedIndex = $scope.notes.indexOf(item);
        $scope.notes.splice(removedIndex, 1);
        startingIndex--;
        for(var i=removedIndex; i<$scope.notes.length; i++){
            $scope.notes[i].index--;
        }
        console.log($scope.notes);
    }
    
    $scope.addNote = function(newNote){
        if(text.value && title.value && !/\s+$/.test(title.value)){
            $scope.notes.push({
                index: ++startingIndex,
                title: newNote.title,
                text: newNote.text
            });
            title.value = "";
            text.value = "";
            $scope.form.$setPristine();
            console.log($scope.notes);
        }else{
            alert("Fill all the fields");
            $scope.form.$setPristine();
            return;
        }
    }
    
    $scope.notes  = [];
    
}]);