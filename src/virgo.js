const infText = document.getElementById('infoText');
function infoSlideOpen() {
    document.getElementById('infoText').style.height = "95%";
    document.getElementById('infoText').style.width = "95%";
    document.getElementById('infoText').style.zIndex = "1";
    document.getElementById('infoText').style.bottom = "3vw";
    document.getElementById('infoText').style.left = "3vw";
};
function infoSlideClose() {
    document.getElementById('infoText').style.height = "0%";
    document.getElementById('infoText').style.width = "0%";
    document.getElementById('infoText').style.zIndex = "-1";
    document.getElementById('infoText').style.bottom = "6vw";
    document.getElementById('infoText').style.left = "3vw";
};