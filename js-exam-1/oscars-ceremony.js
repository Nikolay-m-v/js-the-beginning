"use strict";

// Филмовата академия на САЩ от 1929г. ежегодно раздава награди Оскар на грандиозна церемония.
// Организаторите искат да разберат колко са разходите по организирането на една такава церемония.
// Напишете програма, която изчислява какви разходи ще има академията по организацията на събитието,
// като знаете колко е наемът на залата, в която ще се проведе.
// • Статуетки – цената им е 30% по-малка от наема на залата
// • Кетъринг – цената му е 15% по-малка от тази на статуетките
// • Озвучаване – цената му е 1 / 2 от цената за кетъринг

function oscarsCeremony(input) {
  let rentOfScene = input;
  let statuetes = input - input * 0.3;
  let catering = statuetes - statuetes * 0.15;
  let sound = catering - catering * 0.5;

  let totalCost = rentOfScene + statuetes + catering + sound;

  console.log(totalCost.toFixed(2));
}

oscarsCeremony(3500);
oscarsCeremony(5555);
