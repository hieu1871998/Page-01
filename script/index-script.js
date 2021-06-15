function changeAudio(a) {
    document.getElementById('audio').src = a.target;
    audio.play();
    video.pause();
    document.getElementById('videoContainer').style.display = "none";
    document.getElementById('audio').style.display = "block";
    document.getElementById('audioSection').style.width = "512px";
    document.getElementById('videoSection').style.width = "512px";
}
function changeVideo(v) {
    document.getElementById('video').src = v.target;
    video.play();
    audio.pause();
    document.getElementById('audio').style.display = "none";
    document.getElementById('videoContainer').style.display = "block";
    document.getElementById('videoSection').style.width = "70%";
    document.getElementById('audioSection').style.width = "30%";
}
function activeAudio(nA) {
    var i, e;
    e = document.getElementsByClassName("audio-list-element");
    for (i = 0; i < e.length; i++) {
        e[i].style.backgroundColor = "#ffffff"
        e[i].style.color = "#323130"
    }
    e [nA] .style.backgroundColor = "#323130";
    e [nA] .style.color = "#ffffff";
}
function activeVideo(nV) {
    var i, e;
    e = document.getElementsByClassName("container-tabs__tab");
    for (i = 0; i < e.length; i++) {
        e [i] .style.backgroundColor = "#ffffff";
        e[i].style.color = "#323130"
    }
    e [nV] .style.backgroundColor = "#323130";
    e [nV] .style.color = "#ffffff";
}
window.onload = function () {
    document.getElementById('defaultOpen').click();
}