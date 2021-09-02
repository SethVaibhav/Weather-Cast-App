const express=require("express");
const https = require("https");
const bodyParser= require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
res.sendFile(__dirname+ "/index.htm");    

    
    
    
    /*const query="delhi";
    const id="c4e02d3fb61986db36f25fde7007e82d";
    const unit="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q=" + query + " &appid=" + id + "&units=" + unit;
https.get(url,function(response){
console.log(response.statusCode);
response.on("data",function(data){
    console.log(data);
    const WeatherData=JSON.parse(data);
    console.log(WeatherData);
    const icon=WeatherData.weather[0].icon;
    const iconurl="http://openweathermap.org/img/wn/"+ icon + "@2x.png";
    const dd=WeatherData.weather[0].description;
    res.write("<h1> Temp is" +  " " + dd + "</h1>");
    res.write("<img src=" + iconurl  + " >");
    res.send();
    
})
});*/
});
app.post("/",function(req,res){
console.log(req.body.cityName);
const query=req.body.cityName;
    const id="c4e02d3fb61986db36f25fde7007e82d";
    const unit="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q=" + query + " &appid=" + id + "&units=" + unit;
https.get(url,function(response){
console.log(response.statusCode);
response.on("data",function(data){
    console.log(data);
    const WeatherData=JSON.parse(data);
    console.log(WeatherData);
    const icon=WeatherData.weather[0].icon;
    const iconurl="http://openweathermap.org/img/wn/"+ icon + "@2x.png";
    const dd=WeatherData.weather[0].description;
    res.write("<h1> Temp is" +  " " + dd + "</h1>");
    res.write("<img src=" + iconurl  + " >");
    res.send();
    
})
});
});

app.listen(3000,function(){
    console.log("server is running");
    
});