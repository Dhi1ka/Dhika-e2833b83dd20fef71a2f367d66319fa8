var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
 
    function myTimer() {
        var d = new Date();
        document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }

    today = mm+'/'+dd+'/'+yyyy;
    document.getElementById("demonew").innerHTML = today;
    var myVar=setInterval(function(){myTimer()},1000);