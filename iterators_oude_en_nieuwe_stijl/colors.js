/*
While loop:

Maak en nieuwe map en nieuwe javascript file.
Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
*/

let colors = ["yellow", "blue", "red", "orange"];
let color = 0;
while (color < colors.length) {
  console.log(colors[color]);
  color++;
}
/*
For loop:

Gebruik dezelfde array als startpunt.
Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
Gebruik de lengte van de array in je for loop: array.length
*/

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/*
Gebruik dezelfde kleuren-array als startpunt
Gebruik de forEach array method, om alle items in je array te loggen naar de console.
*/
colors.forEach((colour) => console.log(colour));

/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
while 4 regels, for 2 regels.
Hoeveel regels neemt mijn forEach method in beslag?
1 regel
Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
minder kans op spelfouten, zelf vind ik de array method ook beter leesbaar, er staat letterlijk: voor elke kleur in de lijst, print te kleur naar het scherm.
Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
Ja op een bepaalde manier wel.
*/
const kleuren = { a: "yellow", b: "green", c: "blue", d: "orange", e: "pink" };

for (const kleur in kleuren) {
  console.log(`${kleur}: ${kleuren[kleur]}`);
}
const object = { a: 1, b: 2, c: 3 };
