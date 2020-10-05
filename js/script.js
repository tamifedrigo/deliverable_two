var rain = "*";
let grain = 50;

var rainfall = window.prompt("How many inches of rain fell");
document.write(rain.repeat(rainfall));

if(rainfall===10){
  window.prompt(fertilizer("Did you use fertilizer?"));
}


if(rainfall>=20){
  window.prompt(fertilizer("did you use fertilizer?"));
}

if(rainfall<10){
  grain * 0.80; window.prompt(fertilizer("did you use fertilizer?"));
}

var fertilizer = window.prompt("Did you use fertilizer?");
if (fertilizer === yes,y,Yes){
  window.prompt(premiumRegular("did you use premium or regular fertilizer?"));
}else{

  if(fertilizer===no,n,No){
    console.log("the yield should be" + grain, "bushels per acre");
  }
}
var premiumRegular = window.prompt("did you use premium or regular fertilizer?");

if (premiumRegular===Premium,premium){
  grain * 1.15;

}else{
  
  if(premiumRegular===Regular,regular){
    grain * 1.10;

console.log("the yield should be" + grain, "bushels per acre")
  }
}