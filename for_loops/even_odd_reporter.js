/* Schrijf een loop die "iterate" van 0 tot 20. 
Voor elke loop, check of het huidige nummer even is of oneven (odd).
Console.log het nummer.
*/

for (i = 0; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i, "is oneven");
  } else {
    console.log(i, "is even");
  }
}
