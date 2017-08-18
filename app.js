//******** Insurance **********//

function total() {
    "use strict";
    let rte1 = parseFloat(document.getElementById('val$').value);
    let rte2 = parseFloat(document.getElementById('valRate').value);
    let surCharge = rte1 * rte2;
    let ept = surCharge * .036;
    let totalCharge = surCharge + ept;

     //*** Calculates all fields ***//
    document.getElementById('price').value = "$" + totalCharge.toFixed(2);
};

// Grey background to input
$(document).ready(function() {
    $('input').css('background-color', '#ccc');
});

// Clear input field
function clearit() {
    document.getElementById("val$").value = "";
    document.getElementById("valRate").value = "";
    document.getElementById("price").value ="";
}

//********** Exports *********//

//function total() {
//    "use strict";
//    let collnyc = parseFloat(document.getElementById('collection').value);
//    let whhand = parseFloat(document.getElementById('handling').value);
//    let pcrate = parseFloat(document.getElementById('packcrate').value);
//    let expdocs = parseFloat(document.getElementById('exportdocs').value);
//    let aa = parseFloat(document.getElementById('agency').value);
//    let apdel = parseFloat(document.getElementById('airportdel').value);
//    let af = parseFloat(document.getElementById('afreight').value);
//    let scrn = parseFloat(document.getElementById('screening').value);
//
//    //*** Calculates all fields ***//
//    let totalCharges = collnyc +
//                       whhand +
//                       pcrate +
//                       expdocs +
//                       aa +
//                       apdel +
//                       af +
//                       scrn;
//
//    document.getElementById('proposal').value = "$" + totalCharges;
//};


//********** Imports *********//

//prompt('Trade or Private client?');
//
//if ('Trade') {
//    let dimsl = prompt('Enter the crate length.');
//    let dimsw = prompt('Enter the crate width.');
//    let dimsh = prompt('enter the crate height.');
//
//    let add = l*w*h;
//    let kilo = add / 366;
//
//    let totalImport = 255 + 75 + kilo + 75 + 150;
//    alert('Your total charges are ' + $ + totalImport);
//
//} else {
//    let dimsl = prompt('Enter the crate length.');
//    let dimsw = prompt('Enter the crate width.');
//    let dimsh = prompt('enter the crate height.');
//
//    let add = l*w*h;
//    let kilo = add / 366;
//
//    let totalImport = 285 + 85 + kilo + 85 + 175;
//    alert('Your total charges are ' + $ + totalImport);
//
//}
