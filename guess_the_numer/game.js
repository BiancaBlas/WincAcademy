const naam = prompt("Welkom! Wat is je naam?");
alert("Hey " + naam);
alert("Je gaat een spel raad het nummer spelen, er wordt je zo gevraagd tussen welke nummers je een getal wilt raden");

const lowest = prompt("Voer het laagste getal in waartussen je wilt raden");
const highest = prompt("Voer het hoogste getal in waartussen je wilt raden");
const low = parseInt(lowest);
const high = parseInt(highest);
const range = high - low;
const number = Math.floor(Math.random() * range) + low;

let guess = prompt("Voer een nummer in van " + low + " tot en met " + high + " om te beginnen met raden...");

let i = 1;

while (number != guess && i < 5) {
  alert("Dit is niet corrent, je hebt nog " + (5 - i) + " pogingen over");
  guess = prompt("geef een nieuw nummer in:");
  i++;
}
if (number != guess) {
  alert("Dag " + naam + ". Je hebt helaas niet gewonnen. Tot de volgende keer");
  alert("Het juiste nummer was: " + number);
}
if (guess == number) {
  alert("gefeliciteerd " + naam + " je hebt gewonnen. ");
}

/*Introductie


de computer neemt een (semi)willekeurig nummer. De gebruiker probeert het nummer te raden.
Lees de requirements eerst rustig helemaal door. Schrijf voor jezelf op welke functies je denkt nodig te hebben. 
Oftewel: welke taken moet je programma uitvoeren om de game te spelen?

Dit spel kun je op 2 manieren maken: kies de manier die voor jou logisch is.

In de browser. Als je al weet hoe je JavaScript aan een website toevoegt doe deze opdracht dan in de browser. 
Gebruik prompt om input te vragen van de gebruiker en alert om de gebruiker iets te melden.
In REPL.it. Als je vooral ervaring hebt met REPL.it kies dit dan. 
Gebruik prompt om input te vragen van de gebruiker en console.log om de gebruiker iets te melden.


Requirements 
Aan deze eisen moet jouw project voldoen:

Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam. "Welkom! Wat is je naam?"

Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.

Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]"

Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer. e.g:
"Voer een nummer in van 0 tot 25 om te beginnen met raden..."

Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen. Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()

Als gebruiker wil ik een nummer in kunnen voeren en vervolgens op enter klikken.

Als gebruiker wil ik een bericht zien als ik het nummer verkeerd heb geraden e.g. "Dat is niet correct" . 
Daarna wil ik gevraagd worden om opnieuw te raden.

Als gebruiker wil ik een bericht ontvangen als ik het nummer goed heb geraden. e.g: "Gefeliciteerd je hebt gewonnen". 
Het spel is nu af.

Als gebruiker wil ik een bericht zien als het spel af is. "e.g: Dag [naam]. Tot de volgende keer"

Bonus 
Een gebruiker krijgt maximaal 5 pogingen om het getal te raden.
Als gebruiker wil ik na elke poging een nieuw bericht zien die mij verteld hoeveel pogingen ik nog over heb.
Als gebruiker wil ik een bericht zien als ik helemaal geen pogingen meer over heb. Het spel is nu af.
Zelf de range bepalen waaruit de gebruiker gaat raden.
Als gebruiker wil ik bij de start van het spel gevraagd worden wat het kleinste en het grootste nummer is dat ik wil raden.
Als gebruiker speel ik nu het spel met de nummer-range die ik heb aangegeven bij de start van het spel.
Design 
Er is geen design beschikbaar voor deze opdracht.

Tips & Tricks 
Begin met het maken van een lijst met todo's voor jezelf. Welke functionaliteiten ga je maken? Staan die in een losse functie? 
Welke stappen ga je nemen? Schrijf ze uit.
Maak je je opdracht in de browser? Gebruik de prompt() en alert() functies van JavaScript. 
Bedenk je bij elk bericht, wil ik hier iets aan de gebruiker vertellen of wil ik hier iets van de gebruiker ontvangen? Input van de gebruiker in de browser
*/

/*
for (i = 0; i < 5; i++) {
  if (number != guess) {
    guess = prompt("Dit is niet corrent, geef een nieuw nummer in:");
  } else if (guess === number) {
    console.log("gefeliciteerd je hebt gewonnen. ");
  }
}
*/
