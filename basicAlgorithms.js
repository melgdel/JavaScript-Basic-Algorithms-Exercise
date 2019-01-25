//Names and Input//

var hacker1 = "Jesus";
console.log("The driver's name is: " + hacker1);
var hacker2 = "Mel"
console.log ("The navigator's name is:" + hacker2);

//Comnditionals//

if (hacker1.length > hacker2.length){
  console.log ("The driver has the longest name, it has " + hacker1.lenght + "characters");
} else if (hacker1.length < hacker2.lenght){
  console.log ("The navigator has the longest name, it has " + hacker2.length + "characters");
 }else {
   console.log ("Wow!!! you both got equally long names, " + hacker1.length + "characters");
 }

 //Loops//

//UPPERCASE
 var hacker1Cap="";
for (var i=0; i<hacker1.length; i++) {
  hacker1Cap += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Cap);

//REVERSE
var hacker2Cap="";
for (var i=hacker2.length-1; i>=0; i--){
  hacker2Cap += hacker2[i];
}
console.log(hacker2Cap);

//LEXICOGRAPHIC
var hacker1Length = 0;
for (var i=0; i<hacker1.length; i++) {
  if (hacker1[i] === hacker2[i]) {
    hacker1Length++ ;
    if (hacker1Length==hacker1.length){
      console.log ("what? you both got the same name")
    }
  } else if (hacker1[i] < hacker2[i]){
    console.log("The driver's name goes first");
    break;
  } else if (hacker1[i] > hacker2[i]){
    console.log("No, The navigator's goes first, definitely");
    break;
  }
}