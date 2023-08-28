const infoText = document.getElementById('infoText');
const infoTextClose = document.getElementById('close');
function infoSlideOpen() {
    document.getElementById('infoText').style.height = "95%";
    document.getElementById('infoText').style.width = "96%";
    document.getElementById('infoText').style.left = "20px";
    document.getElementById('infoText').style.zIndex = "1";
    document.getElementById('infoText').style.bottom = "20px";
    document.getElementById('infoText').style.left = "20px";
};
function infoSlideClose() {
    document.getElementById('infoText').style.height = "0%";
    document.getElementById('infoText').style.width = "0%";
    document.getElementById('infoText').style.left = "50%";
    document.getElementById('infoText').style.zIndex = "-1";
    document.getElementById('infoText').style.bottom = "40px";
    document.getElementById('infoText').style.left = "40px";
};