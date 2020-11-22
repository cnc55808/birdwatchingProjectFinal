let picBase64 = ""
let pic1 = ""
let userData = ''

// this sets up a variable to read the picture file
let reader = new FileReader()

inptGetPicture.onchange=function(){
     //user has selected a picture 
     // ** NOTE on phone, get the smallest size (you
     // can choose the size on the phone)
     //This function reads it in using the 
     //Javascript reader. 
     //The reader _onload function will be automatically
     // called when the reader has read in the picture chosen
     reader.readAsDataURL(inptGetPicture.files[0])
}

reader.onload = function(e) {
     //this loads the read-in picture 
     //into the image control.
     //It also converts the picture into base64
     //for storage into the database
  Image1.firstChild.src = e.target.result 
  picBase64 = e.target.result
  return
}
  
  

  
btnSave.onclick=function(){
    let bird_name = inptBirdName.value
        
    let query = "INSERT INTO picture (picture_link, bird_id) SELECT '"+picBase64+"', bird_id FROM bird WHERE name = '"+bird_name+"'"
    console.log(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
    console.log(req)
    if (req.status == 200) { //everything worked. :)
        if (req.responseText == 500)
          lblUploadConfirm.value = `Your picture was successfully uploaded.`
    } else 
        lblUploadConfirm.value = `There was an issue uploading your picture.`
}

/*
btnGetPicture.onclick=function(){
    // hard-coded netID for testing
    // this code assumes one picture per netID
    let query = "SELECT * FROM pictures WHERE netID = 'clc90595'"
    let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=BIA375&database=clc90595&query=" + query)
    if  (req.status == 200) { //trip worked. 
        userData = JSON.parse(req.responseText)  
        //userData is a 2D array, with [row][colum]
        // format:
        //              0     1     2    
        //Columns go:  netID name photo  
        
        let user = userData[0][0] + ", " + userData[0][1] + "\n"
        //console.log(user)
        // get the picture from the database. It is base64 format.
        pic1 = userData[0][2] + '.'
        
        // convert base64 database picture back to regular format picture
        // First replace all spaces with + (multiple spaces will be treated as multiple characters)        
        pic1 = pic1.replace(/\s/gi, '+') 
        // then split out the picture
        let pic1Array = pic1.split(".")
        
        //put picture into the Image control
        Image2.firstChild.src = pic1Array[0]
      } else   // bad trip 
        alert("Error: " + req.status)
}
*/

btnGoBack4.onclick=function(){
  ChangeForm(otherFeatures)
}
