/*
Tamil Character translation 
Unicode to Different fonts support Characters.
This code written by jaigansa.
Permission liciense CC BY-NC-SA
*/

/*
 _____   _     __  __  ___  _               _____  ____      _     _   _ 
|_   _| / \   |  \/  ||_ _|| |             |_   _||  _ \    / \   | \ | |
  | |  / _ \  | |\/| | | | | |      _____    | |  | |_) |  / _ \  |  \| |
  | | / ___ \ | |  | | | | | |___  |_____|   | |  |  _ <  / ___ \ | |\  |
  |_|/_/   \_\|_|  |_||___||_____|           |_|  |_| \_\/_/   \_\|_| \_|

*/
console.log("TAMIL - TRAN");

// bamini converter ...

function getbamini() {
    var usrdata = document.getElementById("sourceText").value;
    var clear = '';
    document.getElementById("targetText").innerHTML = clear;
    var prodata = bamini(usrdata);
};


// clear data ...

function cleardata() {
    var clear = '';
    document.getElementById("targetText").innerHTML = clear;
}

// copy data ...

function copydata() {
    var copyText = document.getElementById("targetText");
    copyText.select();
    //copyText.setSelectionRange(0, 99999) //for mobile
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}