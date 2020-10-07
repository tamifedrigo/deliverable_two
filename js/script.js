let rain = prompt("How many inches of rain fell?")

let rainOutput = "";

for (let i = 0; i < rain; i++) {
  rainOutput += "*"
}

console.log(rainOutput);

let yield = 50;

if (rain >= 20) {
  yield = yield * .9
} else if (rain < 10) {
  yield = yield * .8
}

let fertilizer = prompt("Did you use fertilizer? (enter 'yes' or 'no')");

if (fertilizer === "yes") {
  let fertilizerType = prompt("What type of fertilizer did you use? (enter 'premium' or 'regular')")

  if (fertilizerType === "premium") {
    yield = yield * 1.15;
  } else if (fertilizerType === "regular") {
    yield = yield * 1.1;
  }  
} else if(fertilizer === "no") {
}

let result = yield + " bushels of grain were produced."
console.log(result);
