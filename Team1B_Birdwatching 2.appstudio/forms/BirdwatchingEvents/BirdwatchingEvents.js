// use your own url copied from Postman
let apiURL = "https://api.cronofy.com/v1/events?tzid=America/Chicago&include_managed=1"

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.events.length - 1; i++) {
        console.log(`${apiData.events[i].summary}`)
        message = message + apiData.events[i].summary + "\n"
    }
    txtEvents.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    myToken = "VQh_ON8t4SXOo-ZNsgje8dCmIxsbKtNF"
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    // if you DON'T need cors use this code
    //xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


btnSeeEvents.onclick=function(){
  // call the API calling code above
  callAPI(apiURL)
}

btnBack2.onclick=function(){
  ChangeForm(otherFeatures)
}
