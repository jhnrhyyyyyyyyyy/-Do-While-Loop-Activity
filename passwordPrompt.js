function passPrompt(){
    let password  = "Qwerty1234";
    let userAttemp;
    
    do {
    userAttemp = prompt("Enter your password:");
    if (userAttemp !== password){
        alert("Incorrect, try again!\n");
    }

    }while (userAttemp !== password);
        alert("Access granted!");
}