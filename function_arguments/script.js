const wallPainter = function(orientation, paint){
console.log("The", orientation, "wall has been painted", paint)
}
const color = "green";
const side = "north";
wallPainter(side, color);
wallPainter("south", "purple");
wallPainter();

