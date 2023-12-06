


//Loading the webpage.
document.addEventListener("DOMContentLoaded", load);

function load(){
 
    if(localStorage.getItem("Name")){
        let playerName = document.getElementById("playerName");
		playerName.innerHTML = localStorage.getItem("Name");
	}
    if(localStorage.getItem("cName")){
        let playerName = document.getElementById("name");
		playerName.innerHTML = localStorage.getItem("cName");
	}
    if(localStorage.getItem("Age")){
        let playerName = document.getElementById("age");
		playerName.innerHTML = localStorage.getItem("Age");
	}
    if(localStorage.getItem("Occupation")){
        let occupation = document.getElementById("occupation");

        let occupationNum = localStorage.getItem("Occupation");

            if(occupationNum == 1){
                occupation.innerHTML = "Brute";
            }else if(occupationNum == 2){
                occupation.innerHTML = "Sage";
            }else if(occupationNum == 3){
                occupation.innerHTML = "Thief";
            }else if(occupationNum == 4){
                occupation.innerHTML = "Wanderer";
            }else if(occupationNum == 5){
                occupation.innerHTML = "Cultist";
            } 
	}

    if(localStorage.getItem("Steps")){
        let pSteps = document.getElementById("steps");
		pSteps.innerHTML = localStorage.getItem("Steps");
	}

    if(localStorage.getItem("npc1State")){
        let npc1 = document.getElementById("npc1");
            if(localStorage.getItem("npc1State") == 1){
		        npc1.innerHTML = "Hostile";
            }else if(localStorage.getItem("npc1State") == 2){
                npc1.innerHTML = "Neutral";
            }else if(localStorage.getItem("npc1State") == 3){
                npc1.innerHTML = "Friendly";
            }else{
                npc1.innerHTML = "Ignored or Not Met";
            }                
	}
    if(localStorage.getItem("npc2State")){
        let npc2 = document.getElementById("npc2");
            if(localStorage.getItem("npc2State") == 1){
		        npc2.innerHTML = "Hostile";
            }else if(localStorage.getItem("npc2State") == 2){
                npc2.innerHTML = "Neutral";
            }else if(localStorage.getItem("npc2State") == 3){
                npc2.innerHTML = "Friendly";
            }else{
                npc2.innerHTML = "Ignored or Not Met";
            }  
	}
    if(localStorage.getItem("npc3State")){
        let npc3 = document.getElementById("npc3");
            if(localStorage.getItem("npc3State") == 1){
		        npc3.innerHTML = "Hostile";
            }else if(localStorage.getItem("npc3State") == 2){
                npc3.innerHTML = "Neutral";
            }else if(localStorage.getItem("npc3State") == 3){
                npc3.innerHTML = "Friendly";
            }else{
                npc3.innerHTML = "Ignored or Not Met";
            }  
	}
    if(localStorage.getItem("npc4State")){
        let npc4 = document.getElementById("npc4");
            if(localStorage.getItem("npc4State") == 1){
		        npc4.innerHTML = "Hostile";
            }else if(localStorage.getItem("npc4State") == 2){
                npc4.innerHTML = "Neutral";
            }else if(localStorage.getItem("npc4State") == 3){
                npc4.innerHTML = "Friendly";
            }else{
                npc4.innerHTML = "Ignored or Not Met";
            }  
	}
    if(localStorage.getItem("npc5State")){
        let npc5 = document.getElementById("npc5");
            if(localStorage.getItem("npc5State") == 1){
		        npc5.innerHTML = "Hostile";
            }else if(localStorage.getItem("npc5State") == 2){
                npc5.innerHTML = "Neutral";
            }else if(localStorage.getItem("npc5State") == 3){
                npc5.innerHTML = "Friendly";
            }else{
                npc5.innerHTML = "Ignored or Not Met";
            }  
	}

    let listOfRooms = document.getElementsByClassName("visitedRoom");
    let roomsVisited = localStorage.getItem("visitedRooms");
    roomsVisited = roomsVisited.replaceAll(',', '');
    
    //console.log(roomsVisited);

    for (let i = 1; i < roomsVisited.length; i++) {
        if(roomsVisited[i] == 1){
            //console.log(`have not visisted room ${(i)}`);
            listOfRooms[i].innerHTML = "...";
        }
    }



}

