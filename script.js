// meetimg 9 mengganti mini text
function changeText() {
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

/* --------------------------- Meeting 11 | Button Like Dislike ------------------------- */
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");
if (btnLike) {
  btnLike.onclick = likeColor;
}
if (btnDislike) {
  btnDislike.onclick = dislikeColor;
}
function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }
  this.classList.toggle("green");
}
function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }
  this.classList.toggle("red");
}

// meetimh 12
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

// meeting 14
//add close button on each list
var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myNodeList[i].appendChild(span).setAttribute("class", "close");
}

//close list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//add new list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    // var t = document.createTextNode(inputValue);
    // console.log(t)
    if (inputValue === "" || inputValue === " ") {
      alert("Data tidak boleh kosong!");
    } else {
      document
        .getElementById("myUL")
        .appendChild(li)
        .setAttribute("class", "search-tags-item");
      li.innerHTML = inputValue;
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    span.innerHTML = "x";
    li.appendChild(span).setAttribute("class", "close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }


