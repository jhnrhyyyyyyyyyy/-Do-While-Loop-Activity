let password  = "Qwerty1234";
let userAttemp;
do {
    userAttemp = prompt("Enter your password:");
    if (userAttemp !== password){
        console.log("Incorrect, try again!\n");
    }

} while (userAttemp !== password);
    console.log("Access granted!");