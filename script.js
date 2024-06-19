function changeMiniText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll untuk melihat";
    

    document.getElementById("icon-up").style.display = "none";

    document.getElementById("icon-down").style.display = "block";

    var iconUp = document.getElementsByClassName("icon-up")[0];

    iconUp.onclick = function () {
    var button = document.getElementsByClassName("icon-down");
    button.style.display = "block";
    };
}

function changeImage(element) {
    element.setAttribute("src", "assets/img-header2.png")
}

function changeImageBack(element) {
    element.setAttribute("src", "assets/img-header.png")
}

function changeText(element) {
    element.innerHTML = "Pengembangan Game dan Website"
}

function changeTextBack(element) {
    element.innerHTML = "Dapatkan Tips Progamming Disini"
}
