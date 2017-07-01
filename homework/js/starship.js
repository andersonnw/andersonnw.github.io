//helper function to fetch the data from an external source
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

//lets get some ships
function fetchShips() {
    var url = "//swapi.co/api/starships/";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);
        
        var results = data.results;
        
        var shipListElement = document.getElementById('shiplist');
        
        shipListElement.innerHTML = "";
        
        results.forEach(function(ship) {
            
            var listItem = document.createElement('li');
            
            var link = document.createElement('a');
            
            link.setAttribute('href', ship.url);
            
            link.innerHTML = ship.name;
            
            
             listItem.appendChild(link);
            shipListElement.appendChild(listItem);
            
            link.addEventListener('click', function(event) {
                                  
            event.preventDefault();
            getShipDetails(ship.url);
                                  
            
                                  
                                  });
            
            
        });
    
        
    });
    
}

fetchShips();


function getShipDetails(url) {
    
    
    getJSON(url).then(function(data) {
        var results = data;
        var display = document.getElementById('data');
        console.log(results);
     
        
        document.getElementById('name').innerHTML = results.name ;
        document.getElementById('model').innerHTML = results.model ;
        document.getElementById('manu').innerHTML = results.manufacturer ;
        document.getElementById('cost').innerHTML = results.cost_in_credits ;
        document.getElementById('length').innerHTML = results.length ;
        document.getElementById('maxat').innerHTML = results.max_atmosphereing_speed ;
        document.getElementById('crew').innerHTML = results.crew;
        document.getElementById('pass').innerHTML = results.passengers;
        document.getElementById('cargo').innerHTML = results.cargo_capacity;
        document.getElementById('consu').innerHTML = results.consumables;
        document.getElementById('hyper').innerHTML = results.hyperdrive_rating;
        document.getElementById('mglt').innerHTML = results.MGLT;
        document.getElementById('stars').innerHTML = results.starship_class;
        document.getElementById('pilots').innerHTML = results.pilots;
        document.getElementById('films').innerHTML = results.films;

        
    });
}




//Andrew 