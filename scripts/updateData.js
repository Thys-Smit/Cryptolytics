
// (function(){
//     setInterval(getCurrentBTCValue, 2000);
// }()) 

function getUpdate(){
    var url = '/API/getUpdate'
    var xmlHttp = new XMLHttpRequest(); 
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            document.getElementById("tableContainer0").innerHTML = xmlHttp.responseText;
        }
            
    }

    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getCurrentBTCValue(){
    var url = '/API/getCurrentBTCValue'
    var xmlHttp = new XMLHttpRequest();   
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            return xmlHttp.responseText
            //document.getElementById("navBTC").innerHTML = xmlHttp.responseText;
        }
            
    }

    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}