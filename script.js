let weather = 
{
    "apiKey":"a8b4fa78260c43ecfe2280a85fd0b55d",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&unit=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const { name } = data;
        const { icon, description } = data.weather[0]; //First item from weather array in sapi 
        const { temp, humidity } = data.main;
        const{ speed } = data.wind;
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText= "Weather in " + name;
        document.querySelector(".icon").src=
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp-274.15+"° C";
        document.querySelector(".humidity").innerText="Humidity: " + humidity + "%"; 
        document.querySelector(".speed").innerText="Wind Speed: "+ speed + 'km/h'; 
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function()
    {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.search button').addEventListener("click",function(){
    weather.search();
})

document.querySelector('.search-bar').addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})

weather.fetchWeather("Ranchi");