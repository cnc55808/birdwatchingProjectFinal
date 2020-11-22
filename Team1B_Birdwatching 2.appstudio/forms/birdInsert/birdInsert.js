
btnSubmit3.onclick=function(){
    let name = inptName.value
    let birdType = inptType.value
    let color = inptColor.value
    let description = inptDescription.value
    let query = "INSERT INTO bird (name, type, color, description) VALUES ('" + name + "', '" + birdType + "', '" + color + "', '" + description + "')"

    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // for our server - this means the insert succeeded
            lblMessage3.textContent = `You have successfully submitted your bird information! Please click Next to proceed.`
       } else
            lblMessage3.textContent = `There was a problem submitting your information.`
    } else {
        // transit error
        lblMessage3.textContent = "Error: " + req.status
  }
}












btnGoBack2.onclick=function(){
  ChangeForm(otherFeatures)
}


btnNext3.onclick=function(){
  ChangeForm(birdInsertToForm)
}
