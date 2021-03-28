function tipcalculator() {
    var amount = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var people = document.getElementById("people").value;

    var totaltip = (amount * service) / people;

    document.getElementById("total").style.display="block";
    document.getElementById("tip-amt").innerHTML = totaltip;
}

     document.getElementById("total").style.display="none";
    document.getElementById("calculate").onclick = function() {
        tipcalculator();
    }