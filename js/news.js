function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}


(function getNews() {
    var url = 'http://www.animenewsnetwork.com/all/rss.xml';
    getJSON(url).then(function(data){
        console.log(data);
        
        var results = data;
        
    });
}());