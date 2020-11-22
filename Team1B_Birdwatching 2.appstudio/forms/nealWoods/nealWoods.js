let req = ""
let query = ""
let results = ""
/*let resultDescription = "" */
let pw = "Sufoei#94"


/*
SELECT name, park_name
FROM bird b 
INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id
INNER JOIN nature_parks n ON n.park_id = bp.park_id
WHERE park_name = "Neal Woods"
*/





//on show to populate dropdown
nealWoods.onshow=function(){
  query = "SELECT name, description FROM bird b INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id INNER JOIN nature_parks n ON n.park_id = bp.park_id WHERE park_name = 'Neal Woods'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
        
            // names now in results array - load names into the dropdown
            selBirdName.clear()
            for (i = 0; i <= results.length - 1; i++)
                selBirdName.addItem(results[i][0])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  
}

btnSeeInfo.onclick=function(){
       let selectBird = selBirdName.value
        query = "SELECT description, picture_link FROM picture p INNER JOIN bird b ON b.bird_id = p.bird_id INNER JOIN bird_species_to_park bp ON b.bird_id = bp.bird_id INNER JOIN nature_parks n ON n.park_id = bp.park_id WHERE park_name = 'Neal Woods' AND name = " + '"' + selectBird + '"'
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kxa57381&pass=" + pw + "&database=375groupb1&query=" + query)
        console.log(req)
    if (req.status == 200) { //transit worked.
            resultsDescription = JSON.parse(req.responseText)
            console.log(resultsDescription)
            console.log(query)
            txtBirdInfo.value = resultsDescription[0][0]
            temp = resultsDescription[0][1]
            temp = temp.replace(/\s/gi, '+') 
        // then split out the picture
        let pic1Array = temp.split(".")
            imgBird.src = pic1Array
  }
}



btnGoToLocations.onclick=function(){
  ChangeForm(parkLocationHome)
}


