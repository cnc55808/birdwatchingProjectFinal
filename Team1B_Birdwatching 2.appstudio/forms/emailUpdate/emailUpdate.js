/*This is populating the select dropdown with the email connected to the username the user input*/
btnEmailUpdateSubmit.onclick=function(){
let usernameInput = inptUser.value
    query = "SELECT email FROM user WHERE username =  " + '"' + usernameInput + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
      if (req.status == 200) { //transit worked.
      results = JSON.parse(req.responseText)
            console.log(results)
            // names now in results array - load names into the dropdown
            selInfo.clear()
            for (i = 0; i <= results.length - 1; i++)
                selInfo.addItem(results[i])     
        } else {
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
  }
}




/*This is actually updating the email in the database*/
btnSubmitInfo.onclick=function(){
    let newEmail = inptUpdatedInfo.value
    let oldEmail = selInfo.value
    
    query = "UPDATE user SET email = " + '"' + newEmail + '"' + " WHERE email = " + '"' + oldEmail + '"' 
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
      
        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                lblEmailUpdate.value = `You have successfully changed your email!`
      
                // reset controls to original state
                inptUpdatedInfo.value = ""
                selInfo.value = ""
                inptUser.value = ""
              } else
                lblEmailUpdate.value = `There was a problem changing your email.`
        } else 
            // transit error
            lblEmailUpdate.value = "Error: " + req.status;
    } 

btnGoBack.onclick=function(){
  ChangeForm(accountInformation)
}


