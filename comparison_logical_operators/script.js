const age = 18;
const isFemale = true;
const driverStatus = "dronken"
const name = "Bianca"
const totalAmount =120

if (age >= 18) {
    console.log("Je bent oud genoeg, kom binnen")
}
else {
    console.log("Je bent te jong, ga naar huis");
}

if (age >= 18 && age<=25){
    console.log("Je krijgt 50% korting!");
}
if (name === "Bram" || name === "Sarah"){
    console.log("je krijgt een gratis biertje");
}
if (totalAmount >= 100){
    console.log("Je krijgt een gratis flesje champagne");
}
else if (totalAmount >= 50){
    console.log("Je krijgt een gratis portie nacho's");
}
else if (totalAmount >= 25){
    console.log("Je krijgt een gratis portie (vega)bitterballen")
}

if (driverStatus == "bob"){
    console.log ("Je bent de bob, rij veilig");
}
else{
    console.log ("Je bent geen bob, je mag niet meer rijden");
}
