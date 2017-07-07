function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}




function display(locationToGrab) {
   var url = '/weather.json';
    
    getJSON("../js/weather.json").then(function(data){
        console.log(data);
        var location = data[locationToGrab]["City"];
        var state = data[locationToGrab]["State"];
        var temp_f = data[locationToGrab]["High"];
        
        
        
        
        
    });
        
}

