function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}


//fetch the json file to the webpage and displays the data for the now page

(function getNow(){
    var url = "js/anime.json";
    
    getJSON(url).then(function (data){
        
        var results = data;
        console.log(results);
        
        var nowList = document.getElementById('now_list');
      
        
        results.anime.forEach(function(airing){
            //filter the list to only those that are currently airing
            console.log(airing);
           if(airing.air == true) {
             //create the elements to add to age
            var box = document.createElement('li');
            var title = document.createElement('a');
            var img = document.createElement('img');
            var syn = document.createElement('p');
            
            
            // puts the data into the new elements
            title.setAttribute('href', airing.link_url);
            title.innerHTML = airing.link;
            
            img.setAttribute('src', airing.img);
            img.setAttribute('alt', airing.link);
               
            syn.innerHTML = airing.synopsis;
               
            box.appendChild(title);
            box.appendChild(img);
            box.appendChild(syn);
            nowList.appendChild(box);
              
           }
    
        });
    });
    
}());