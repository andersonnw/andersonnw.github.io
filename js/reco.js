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
        var choice = document.getElementById('media');
      
        
        results.anime.forEach(function(airing){
            if(airing.air == false){
            //filter the list to only those that are currently airing
            
        
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
            
                box.setAttribute('class', 'anime');
           
            box.appendChild(title);
            box.appendChild(img);
            box.appendChild(syn);
            nowList.appendChild(box);
            }
        });
        
         results.movie.forEach(function(airing){
            //filter the list to only those that are currently airing
            
        
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
           
             box.setAttribute('class', 'movie');
             
            box.appendChild(title);
            box.appendChild(img);
            box.appendChild(syn);
            nowList.appendChild(box);
            
        });
        
         results.manga.forEach(function(airing){
            //filter the list to only those that are currently airing
            
        
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
            
             box.setAttribute('class', 'manga');
            
            box.appendChild(title);
            box.appendChild(img);
            box.appendChild(syn);
            nowList.appendChild(box);
            
        });
           
    
        });
    }());
function display(){

    var media = document.getElementById('media');
    var anime = document.getElementById('anime');
    var movie = document.getElementById('movie');
    var manga = document.getElementById('manga');
    
    var anime1 = document.getElementsByClassName('anime');
    var movie1 = document.getElementsByClassName('movie');
    
    var manga1 = document.getElementsByClassName('manga');
    
    console.log(anime1);
    if(media[media.selectedIndex].value == 'anime'){
        anime.style.display = 'initial';
        manga.style.display = 'none';
        movie.style.display = 'none';
        
        for(var i = 0; i <= anime1.length - 1; i++){
            anime1[i].style.display = 'initial';
        }
        for(var i = 0; i <= manga1.length - 1; i++){
            manga1[i].style.display = 'none';
        }
        for(var i = 0; i <= movie1.length - 1; i++){
            movie1[i].style.display = 'none';
        }
       
    }
    else if(media[media.selectedIndex].value == 'movie') {
        anime.style.display = 'none';
        manga.style.display = 'none';
        movie.style.display = 'initial';
        
        for(var i = 0; i <= anime1.length - 1; i++){
            anime1[i].style.display = 'none';
        }
        
        for(var i = 0; i <= movie1.length - 1; i++){
            movie1[i].style.display = 'initial';
        }
        for(var i = 0; i <= manga1.length - 1; i++){
            manga1[i].style.display = 'none';
        }
       
    }
    else if(media[media.selectedIndex].value == 'manga'){
        anime.style.display = 'none';
        manga.style.display = 'initial';
        movie.style.display = 'none';
        
        for(var i = 0; i <= anime1.length - 1; i++){
            anime1[i].style.display = 'none';
        }
        
        for(var i = 0; i <= manga1.length - 1; i++){
            manga1[i].style.display = 'initial';
        }
        for(var i = 0; i <= movie1.length - 1; i++){
            movie1[i].style.display = 'none';
        }
    }
}
display();

    
