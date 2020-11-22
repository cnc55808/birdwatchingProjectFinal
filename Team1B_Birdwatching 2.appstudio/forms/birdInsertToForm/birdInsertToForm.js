selNaturePark.onclick=function(){
   query = "SELECT park_id, park_name FROM nature_parks"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)
            // names now in results array - load names into the dropdown
            selNaturePark.clear()
            for (i = 0; i <= results.length - 1; i++)
                selNaturePark.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}


selBirdNameInsert.onclick=function(){
   query = "SELECT bird_id, name FROM bird"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)
            // names now in results array - load names into the dropdown
            selBirdNameInsert.clear()
            for (i = 0; i <= results.length - 1; i++)
                selBirdNameInsert.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}




btnSubmitToForms.onclick=function(){
    let birdID = selBirdNameInsert.value
    let parkID = selNaturePark.value
    let query = "INSERT INTO bird_species_to_park (bird_id, park_id) VALUES ('" + birdID.split(',')[0] + "', '" + parkID.split(',')[0] + "')"

    console.log(birdID)
    console.log(parkID)
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // for our server - this means the insert succeeded
            lblMessageSuccess.textContent = `You have successfully added the bird to the databse!`
       } else
            lblMessageSuccess.textContent = `There was a problem adding the bird to the database.`
    } else {
        // transit error
        lblMessage3.textContent = "Error: " + req.status
  }
}

btnHome.onclick=function(){
  ChangeForm(parkLocationHome)
}

btnBack.onclick=function(){
  ChangeForm(birdInsert)
}
