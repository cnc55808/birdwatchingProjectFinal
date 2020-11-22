
btnSubmit2.onclick=function(){
let street = inptStreet.value
let city = inptCity.value
let state = inptState.value
let email = inptEmail.value 
    let query = "INSERT INTO user (username, password, street, city, state, email, first_name, last_name) VALUES ('" + username + "', '" + password + "', '" + street + "', '" + city + "', '" + state + "', '" + email + "', '" + firstname + "', '" + lastname + "')"
  console.log(query)
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // for our server - this means the insert succeeded
            lblMessageCreateAccount.value = `You information was successfully submitted!`
            ChangeForm(userLogin)
       } else
            lblMessageCreateAccount.value = `There was a problem adding your information to the database.`
    } else {
        // transit error
        lblMessageCreateAccount.value = "Error: " + req.status
        
  }
}


