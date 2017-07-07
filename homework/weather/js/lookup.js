// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/265e9d7d7383d1d8//hourly/geolookup/conditions/q/" + lat + ',' + long + '.json'; //change this to the correct URL for wunderground
        
        getJSON(url).then(function (data) {
            console.log(data);
            var local = data.location;
            var weather = data.current_observation;
            var forecast = data.hourly_forecast;
            //add the code necessary here to update the page with all of the correct data points.
            document.getElementById('cityDisplay').innerHTML = local.city + ', ' + local.state; 
            
            document.getElementById('currentTemp').innerHTML = Math.round(weather.temp_f) + '&deg;';
            
            
            document.getElementById('add2').innerHTML= 'Speed: ' + weather.wind_mph + 'MPH';
            
            document.getElementById('add3').innerHTML= 'Direction: ' + weather.wind_dir;

            var icon = document.getElementById('wthr-icon').setAttribute('src', weather.icon_url);
            
            document.getElementById('precip').innerHTML = weather.precip_today_string;
            
            
            //loop that creates the forecast list
            var hours = document.getElementById('hourly');
            
            hours.innerHTML = '';
            
            for(var i = 0; i <= 11; i++){
                var time = forecast[i];
                
                var list = document.createElement('li');
                
                var hrTemp = document.createElement('span');
                
                var hrImg = document.createElement('img');
                
                var hrTime = document.createElement('span');
                
                hrTemp.innerHTML = time.temp.english + '&deg;';
                hrImg.setAttribute('src', time.icon_url);
                hrTime.innerHTML = time.FCTTIME.civil;
                
                list.appendChild(hrTemp);
                list.appendChild(hrImg);
                list.appendChild(hrTime);
                hours.appendChild(list);
                
            }
           

        });


    }
    
   
           

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());
