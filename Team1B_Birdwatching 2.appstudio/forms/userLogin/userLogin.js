let userList = ""


userLogin.onshow=function(){
  query = "SELECT * FROM user"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
  
  if (req.status == 200){
    userList = JSON.parse(req.responseText)
  }else{
    lblError = `Error: ${req.status}`
  }
}

btnLogin.onclick=function(){
  let username = inptAccount.value
  let password  = inptPassword.value
  let found = ""
  for (i = 0; i <= userList.length - 1; i++) {
    if (username === userList[i][1] && password === userList[i][2]){
      found = true
      break
    }else{
      found = false
   } 
}
  if (found == false)
  NSB.MsgBox(`Your username or password is incorrect.`)
else if (found == True) {
  ChangeForm(parkLocationHome)
    }
}

btnCreateAccount.onclick=function(){
  ChangeForm(userCreateAccount)
}
