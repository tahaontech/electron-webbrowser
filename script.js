function goHome() {
    document.getElementById("mywebview").loadURL("https://google.com");
}

function goBack() {
    document.getElementById("mywebview").goBack();
}

function goForward() {
    document.getElementById("mywebview").goForward();
}

function go() {
    document.getElementById("mywebview").loadURL(document.getElementById("url").value);
}