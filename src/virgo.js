const infText = document.getElementById('infoText');
function infoSlideOpen() {
    document.getElementById('infoText').style.height = "95%";
    document.getElementById('infoText').style.width = "95%";
    document.getElementById('infoText').style.zIndex = "1";
    document.getElementById('infoText').style.margin = "0px 0px";
    document.getElementById('infoText').style.border = "2px";
};
function infoSlideClose() {
    document.getElementById('infoText').style.height = "0%";
    document.getElementById('infoText').style.width = "0%";
    document.getElementById('infoText').style.zIndex = "-1";
    document.getElementById('infoText').style.margin = "0px 10px";
    document.getElementById('infoText').style.border = "0px";
};
document.getElementById('infoText').onscroll = (event) => {
    document.getElementById('scrollArrow').className = 'fadedArrow';
}