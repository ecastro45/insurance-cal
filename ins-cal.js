alert("Welcome to Insurance Buddy");

const insValue = prompt("What the insurance value?");
const insRate = prompt("What is the insurance rate? (Enter as decimal number)");

const surCharge = insValue * insRate;
const ept = surCharge * .036;
const totalCharge = surCharge + ept;

alert("Your total insuracne value is " + totalCharge);
