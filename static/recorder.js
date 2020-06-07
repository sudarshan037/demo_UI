var buttonRecord = document.getElementById("record");
var buttonStop = document.getElementById("stop");
var buttonSnap = document.getElementById("snap");

buttonStop.disabled = true;

buttonRecord.onclick = function() {
    // var url = window.location.href + "record_status";
    buttonRecord.disabled = true;
    buttonStop.disabled = false;
    
    // disable download link
    var downloadLink = document.getElementById("download");
    downloadLink.text = "";
    downloadLink.href = "";

    // XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // alert(xhr.responseText);
        }
    }
    xhr.open("POST", "/record_status");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ status: "true" }));
};

buttonStop.onclick = function() {
    buttonRecord.disabled = false;
    buttonStop.disabled = true;    

    // XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // alert(xhr.responseText);

            // enable download link
            var downloadLink = document.getElementById("download");
            downloadLink.text = "";
            // downloadLink.href = "/static/video.avi";
            downloadLink.href = "http://127.0.0.1:5001/";
        }
    }
    xhr.open("POST", "/record_status");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ status: "false" }));
};

buttonSnap.onclick = function() {
    buttonRecord.disabled = true;
    buttonStop.disabled = true;

    // disable download link
    var downloadLink = document.getElementById("download");
    downloadLink.text = "";
    downloadLink.href = ""; 

    // XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // alert(xhr.responseText);

            // enable download link
            var downloadLink = document.getElementById("download");
            downloadLink.text = "Login";
            // downloadLink.href = "/static/video.avi";
            downloadLink.href = "http://127.0.0.1:5001/";
        }
    }
    var uname = new String(document.getElementById("username").value);
    xhr.open("POST", "/record_status");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ status: uname}));
};

