// $(document).ready(function(){
//   var city = "Chicago";
//   var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
//   //change city variable dynamically as required
//   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
//   console.log(data);
//   $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
//   });
// });
var ywpath;
var temp;

 var yahooSearchEndpoint =  `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

var cloudGate ={
    title: "The Cloud Gate",
    picture: "https://www.cityofchicago.org/content/dam/city/depts/dca/Millennium%20Park/cloudgate800.jpg",
    description:"hey",
    link:"https://www.google.com/maps/place/Cloud+Gate/@41.8826572,-87.6254926,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2ca687332bf5:0x64d3fefce3a4a51!8m2!3d41.8826572!4d-87.6233039"
}

var beach={
    title: "Lake Michigan Beach",
    picture: "https://etvluee.cloudimg.io/s/cdn/x/http://www.bing.com/cr?IG=DCD02F45B46C4429BA86E80F39C8A2A9&CID=27DD86B1242461E022158F5B25156057&rd=1&h=A5INnXczJbT4bQ8YtTDroP7DCUR17YgHCOcYTCaqoxw&v=1&r=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb6%2FChicago_Beaches_-_Ohio_Street_Beach_1.jpg&p=DevEx,5008.1",
    description:"lol" ,
    link:"https://www.google.com/maps/place/12th+Street+Beach/@41.8635952,-87.6250773,14z/data=!4m8!1m2!2m1!1sbeach+in+chicago+description!3m4!1s0x880e2b703f96443d:0xa6d4f882cb4b021f!8m2!3d41.8635952!4d-87.6075678" 
}

var riverWalk={
    title: "River Walk",
    picture: "https://www.trbimg.com/img-55fc4412/turbine/ct-edit-riverwalk-pollution-edit-0919-20150918",
    description:"restaurants along the river",
    link: "https://www.google.com/maps/place/Chicago+Riverwalk/@41.8882291,-87.6234265,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2ca90653e45f:0xff7fdb29e3d01f46!8m2!3d41.8882251!4d-87.6212378"
}

var boatTour={
    title:"Architecure Boat Day",
    picture: "https://s3.amazonaws.com/architecture-org/files/modules/chicago-architecture-foundation-river-cruise-chica-3.jpg",
    description:"enjoy the scenery",
    link: "https://www.google.com/maps/place/Chicago+Line+Cruises/@41.890609,-87.6236167,15z/data=!4m8!1m2!2m1!1sboat+tour+in+chicago!3m4!1s0x880e2b542d59c1bb:0xeff6af969d4310a2!8m2!3d41.890609!4d-87.614862" 
}

var artInstitute={
    title: "Art Institue of Chicago",
    picture: "https://www.trbimg.com/img-541b7f59/turbine/ct-art-institute-museum-edit-0919-20140919",
    description: "enjoy the pieces of van gogh and claude monet etc",
    link:"https://www.google.com/maps?q=art+institute+of+chicago&biw=800&bih=526&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi2qvGIuKzVAhWkxYMKHcJmDkYQ_AUICigB"
}

var skydeck={
    title: "Willis Tower Skydeck",
    picture: "https://www.albomadventures.com/wp-content/uploads/2016/04/Skydeck-Chicago_4185860-800x600.jpg",
    description: "see the skyline of Chicago from a trilion feet up",
    link: "https://www.google.com/maps/place/Skydeck+Chicago/@41.8787455,-87.6381314,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2cbee269fbbb:0xcf09307f0945d4fd!8m2!3d41.8787415!4d-87.6359427"
}

var waterTowerPlace={
     title: "Water Tower Place Shops",
     picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chicago_Water_Tower_by_night.JPG/1200px-Chicago_Water_Tower_by_night.JPG",
    description: "shopping spree",
    link:"https://www.google.com/maps?q=water+tower+chicago&biw=800&bih=526&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiW2PmtuKzVAhVk0oMKHVZrCOIQ_AUICygC" 
}

var chicagoSymphony={
    title: "Chicago Symphony",
    picture: "https://cso.org/globalassets/images-event-bio-banners-1200x300/cso-class-photo-2015.jpg",
    description: "visit the Chicago symphony Orchestra",
    link: "https://www.google.com/maps/place/Chicago+Symphony+Orchestra/@41.8789731,-87.6272282,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2ca3c25b7cd3:0x5f8397ddbd21cd9f!8m2!3d41.8789691!4d-87.6250395"
}

function sendApiRequest() {
    
//var userInput = document.getElementById("body").value
//console.log("INPUT",userInput)

var yahooSearchEndpoint =  `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

    fetch(yahooSearchEndpoint)
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
        //path below
        ywpath = json.query.results.channel.item.forecast["0"].text
        temp = document.createElement('weather')
        document.getElementById("weather").appendChild(temp)
        temp.innerHTML=ywpath //adds  breezy to the screen
        findActivity(ywpath)
        console.log(ywpath)//ywpath
        //return temp;
        
    })
    
}

function changeDate()
{
   

    fetch(yahooSearchEndpoint)
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
        //path below
        ywpath = json.query.results.channel.item.forecast["0"].text
        temp = document.createElement('weather')
        document.getElementById("weather").appendChild(temp)
        temp.innerHTML=ywpath //adds  breezy to the screen
        findActivity(ywpath)
        console.log(ywpath)//ywpath
        //return temp;
        
    })
}

function findActivity(path){
    if(path == "Breezy"){
        var breezy1 = document.createElement('img')
        var breezy1link= document.createElement('a')
        breezy1.setAttribute('src',cloudGate.picture)
        breezy1.setAttribute('id','breezy1')
        breezy1link.setAttribute('href',cloudGate.link)
        breezy1link.setAttribute('id',"breezy1link")
        console.log(breezy1)
        document.getElementById("image").appendChild(breezy1link)
        document.getElementById("breezy1link").appendChild(breezy1)
        
        var breezy2 = document.createElement('img')
        var breezy2link= document.createElement('a')
        breezy2.setAttribute('src',beach.picture)
        breezy2.setAttribute('id','breezy2')
        breezy2link.setAttribute('href',beach.link)
        breezy2link.setAttribute('id',"breezy2link")
        console.log(breezy2)
        document.getElementById("image").appendChild(breezy2link)
        document.getElementById("breezy2link").appendChild(breezy2)
        
        var breezy3 = document.createElement('img')
        var breezy3link= document.createElement('a')
        breezy3.setAttribute('src',riverWalk.picture)
        breezy3.setAttribute('id','breezy3')
        breezy3link.setAttribute('href',riverWalk.link)
        breezy3link.setAttribute('id',"breezy3link")
        console.log(breezy3)
        document.getElementById("image").appendChild(breezy3link)
        document.getElementById("breezy3link").appendChild(breezy3)
        
        var breezy4 = document.createElement('img')
        var breezy4link= document.createElement('a')
        breezy4.setAttribute('src',boatTour.picture)
        breezy4.setAttribute('id','breezy4')
        breezy4link.setAttribute('href',boatTour.link)
        breezy4link.setAttribute('id',"breezy4link")
        console.log(breezy4)
        document.getElementById("image").appendChild(breezy4link)
        document.getElementById("breezy4link").appendChild(breezy4)
        
        document.getElementById("suggestion").innerHTML="We suggest you wear a cardigan!"
        
    }
    
}

