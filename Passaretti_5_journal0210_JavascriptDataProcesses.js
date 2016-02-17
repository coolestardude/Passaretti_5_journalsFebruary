document.getElementById("p2").style.color = "red";
document.getElementById("body").style.color = "#0000FF";


document.write("This is how we math in javascript: \n <br><br>")

var k = prompt("Pick a Number");
var r = prompt("Pick a Number");
var d = k + r;
var num1 = parseInt(k);
var num2 = parseInt(r);
/*we parseInt'ed so the variables would be treated as integers and not strings*/
var num3 = num1 + num2;

document.write("k is " + k + ", r is " + r + ", and d is r + k is " + d + ". |<br><br> " );
document.write("<br>");
document.write("multiplication:");
document.write(k * r);
document.write(" |  <br>");
document.write("division:");
document.write(k / r);
document.write(" |  <br>");
document.write("addition:");
document.write(num1 + num2);
document.write(" |  <br>");
document.write("subtraction:");
document.write(k - r);
document.write(" |  <br><br>");

num1++;
document.write("this is num1: " + ++num1 + "<br>");
document.write("this is num2: " + ++num2 + "<br>");

num2++;
document.write("this is num1: " + ++num1 + "<br>");
document.write("this is num2: " + ++num2 + "<br>");

num1 = 2;

num1 *= 5;
document.write(num1 + "<br>");
num1 /= 5;
document.write(num1 + "<br>");
num1 += 5;
document.write(num1 + "<br>");
num1 -= 5;
document.write(num1 + "<br>");

/* L337 h@x0r5 use conditionals*/

if (k == r ) {
 document.write("k & r are the same. <br>");
} else if (k < r) {
 document.write("k is smaller than r <br>");
}
 else {
 
}
