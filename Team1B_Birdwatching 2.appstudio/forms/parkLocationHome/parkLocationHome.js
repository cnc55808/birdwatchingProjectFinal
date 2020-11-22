
btnNealWoods.onclick=function(){
  ChangeForm(nealWoods)
}

btnHeronHaven.onclick=function(){
  ChangeForm(heronHaven)
}

btnStandingBear.onclick=function(){
  ChangeForm(standingBear)
}

btnElmwoodPark.onclick=function(){
  ChangeForm(elmwoodPark)
}

btnOtherFeatures.onclick=function(){
  ChangeForm(otherFeatures)
}

btnLogout.onclick=function(){
  ChangeForm(userLogin)
}

/*
let homepageURL = "https://api.imgur.com/3/image/4xSvBo6"

let bgLink = ""
function onXHRLoad() {
    let apiData2 = JSON.parse(this.responseText)
    console.log(`${apiData2.data[0].link}`)
    parkLocationHome.backgroundImage = apiData2.data[0].link
  }
//backgroundURL = "https://i.imgur.com/4xSvBo6.png"
//parkLocationHome.backgroundImage = bgLink

function callAPI(URL) {
    var xhttp1 = new XMLHttpRequest();
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp1.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    //if you DON'T need cors use this code
    //xhttp1.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    //xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
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
    //xhttp1.addEventListener('load', onXHRLoad)
    //xhttp1.send()
 //}   

//parkLocationHome.onshow=function(){
  //callAPI(homepageURL)
//}



let requestURL = "https://api.imgur.com/3/image/4xSvBo6"
let myClientID = "aa8d70d650f4004"

function onXHRLoad() {
    let apiData2 = JSON.parse(this.responseText)    
    console.log(`${apiData2.data.link}`)
    let bgLink = apiData2.data.link
    parkLocationHome.style.backgroundImage= "url(" + bgLink + ")"
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    xhttp.setRequestHeader('Authorization', 'Client-ID ' + myClientID)
    
    //xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
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

parkLocationHome.onshow=function(){
  // call the API calling code above
  callAPI(requestURL)
}

