var thing = true;
function clickOff() {

	if (thing === true){
   'use strict';
  var = change1 = document.getElementById("Title"),
        change2 = document.getElementById("Bkgrnd"),
        change3 = document.getElementById("Menu");

  change1.style.backgroundColor = '#F00';
     change1.innerHTML = "NIGHT";
  change1.style.color = '#333';
  change2.style.backgroundColor = '#000';
  change3.style.backgroundColor = '#00FF1D';
     thing = false;
     } else {

  var change1 = document.getElementById("Title"),
      change2 = document.getElementById("Bkgrnd"),
      change3 = document.getElementById("Menu");
  change1.style.backgroundColor = '#535353';
  change1.style.color = '#FFF';
     change1.innerHTML = "DAY";
  change2.style.backgroundColor = '#EFEFEF';
  change3.style.backgroundColor = '#F5F';
     thing = true;
     }
}
function over() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#F3F3F3';
}
function off() {
   'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#6D8C8E';
}

