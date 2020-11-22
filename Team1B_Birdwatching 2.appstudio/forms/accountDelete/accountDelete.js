let emailList = ""


btnDel.onclick=function(){
let userDelPassword = inptDelPassword.value
 query = "DELETE FROM user WHERE password = " + '"' + userDelPassword + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
      
        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully deleted your account.`)
      
                // reset controls to original state
                inptDelPassword.value = ""
                ChangeForm(userCreateAccount)
              } else
                NSB.MsgBox(`There was a problem deleting your account.`)
        } else 
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
} 

btnGoBack1.onclick=function(){
  ChangeForm(accountInformation)
}

