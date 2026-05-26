// script.js

// CHANGE PASSWORD HERE
const correctPassword = "12";

function checkPassword(){

  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorText");

  if(input === correctPassword){

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainSite").classList.remove("hidden");

  }else{

    error.style.display = "block";

  }

}

// OPEN POPUP
function openPopup(id){

  document.getElementById(id).style.display = "flex";

}

// CLOSE POPUP
function closePopup(id){

  document.getElementById(id).style.display = "none";

}