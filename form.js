

document.addEventListener("DOMContentLoaded", load);

function load(){
    const submitButton = document.getElementById("submitButton");
    const resetButton = document.getElementById("resetButton");

    submitButton.addEventListener("click",validate);
    resetButton.addEventListener("click",resetForm);

	let visitedRooms = [];
        
	for (let i = 0; i < 36; i++) {
		visitedRooms[i] = 1;
		
	}

	localStorage.setItem("Name", "name");
	localStorage.setItem("Email", "email");
	localStorage.setItem("cName", "cName");
	localStorage.setItem("Age", 0);
	localStorage.setItem("Occupation", 0);
	localStorage.setItem("Mark", 0 );
	localStorage.setItem("Steps", 0);
	localStorage.setItem("visitedRooms", visitedRooms);
	localStorage.setItem("npc1State", 0);
	localStorage.setItem("npc2State", 0);
	localStorage.setItem("npc3State", 0);
	localStorage.setItem("npc4State", 0);
	localStorage.setItem("npc5State", 0);


    hideErrors();

}


function submitCharacter(){
	const name = document.getElementById("playerName").value;
    const email = document.getElementById("playerEmail").value;
    const cName = document.getElementById("characterName").value;
    const age = document.getElementById("characterAge").value;
    const occupation = document.getElementById("characterOccupation").value;
    const markRadio = document.getElementsByClassName("radMark");

	const mark = 0;

	for (let i = 0; i < markRadio.length; i++) {
		if(markRadio.checked){
			mark = i;
		}
	}

	localStorage.setItem("Name", name);
	localStorage.setItem("Email", email);
	localStorage.setItem("cName", cName);
	localStorage.setItem("Age", age);
	localStorage.setItem("Occupation", occupation);
	localStorage.setItem("Mark", mark );
}

function formHasErrors() {
    const name = document.getElementById("playerName").value;
    const email = document.getElementById("playerEmail").value;
    const cName = document.getElementById("characterName").value;
    const age = document.getElementById("characterAge").value;
    const occupation = document.getElementById("characterOccupation").value;
    const markRadio = document.getElementsByClassName("radMark");

    
    if(name == "" || name == " " || name == null){
		document.getElementById("playerName").focus();
		document.getElementById("pNameError").style.display = "block";
		return true;
	} 

 
    if(email == "" || email == " " || email == null){
		document.getElementById("playerEmail").focus();
		document.getElementById("emailError").style.display = "block";
		return true;
	} 
    else {
		const regEm = new RegExp(/^\S{1,}[@]\S{1,}[.]\D{2,}$/);
		//console.log(regEm.test(email));
		if(!regEm.test(email)){
			document.getElementById("playerEmail").focus();
			document.getElementById("emailErrorFormat").style.display = "block";
			return true;
		}
	}

    if(cName == "" || cName == " " || cName == null){
		document.getElementById("characterName").focus();
		document.getElementById("cNameError").style.display = "block";
		return true;
	} 

    if(age == "" || age == " " || age == null){
		document.getElementById("characterAge").focus();
		document.getElementById("ageError").style.display = "block";
		return true;
	} 


    if(occupation == "selectOccupation"){
        document.getElementById("characterOccupation").focus();
		document.getElementById("occupationError").style.display = "block";
		return true;
    }

    if(!markRadio[0].checked && !markRadio[1].checked && !markRadio[2].checked){
		document.getElementById("markingType").focus();
		document.getElementById("radioError").style.display = "block";
		return true;
	}
}

function validate(e){

	console.log("button pressed");

    // Hides all error elements on the page
    hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	submitCharacter();
	window.location.href = "adventure.html";
	return true;
}


function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("formError");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Reset Character?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
        document.getElementsByTagName("input")[0].focus();
		document.getElementsByTagName("input")[0].select();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}
}

