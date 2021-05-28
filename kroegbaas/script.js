const age = 18;
const isFemale = true;
const driverStatus = "bob"

if (age >= 18) {
    if (isFemale == true){
        console.log("Ok, je bent een vrouw en oud genoeg, loop maar door");
    } 
    else {
        console.log("Sorry, je bent oud genoeg, maar je bent een man, vanavond niet");
    }
}
else {
    console.log("Je bent te jong, ga naar huis");
}

if (driverStatus == "bob"){
    console.log ("Je bent de bob, rij veilig")
}
else{
    console.log ("Je bent geen bob, je mag niet meer rijden")
}
