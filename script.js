const name = document.getElementById("name");
const inputName = document.querySelector(".name");
const surname = document.getElementById("surname");
const inputSurname = document.querySelector(".surname");
const email = document.querySelector("#email");
const inputEmail = document.querySelector(".email");
const story = document.querySelector("#story");
const inputStory = document.querySelector(".story");
const clearBtn = document.querySelector(".clearBtn");
const showBtn = document.querySelector("button");
const clear = document.querySelectorAll(".clear");
const form = document.querySelector("#myForm");
const hide = document.querySelector(".hide");
const hideEmail = document.querySelector(".hideEmail");
const hideStory = document.querySelector(".hideStory");

showBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let valName = name.value.trim();
    let valEmail = email.value.trim();
    let valStory = story.value.trim();
    const regName = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźżŻ]{3,}$/g;
    const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/g;

    if (valName) {
        valName.toLowerCase();
    }
    if (!valName.length) {
        hide.classList.add("show");
        hide.style.display = "block";
    } else if (!regName.test(valName)) {
        hide.classList.add("show");
        hide.style.display = "block";
    } else {
        hide.classList.remove("show");
        hide.style.display = "none";
    }

    if (valEmail) {
        valEmail.toLowerCase();
    }
    if (!valEmail.length) {
        hideEmail.classList.add("showEmail");
        hideEmail.style.display = "block";
    } else if (!regEmail.test(valEmail)) {
        hideEmail.classList.add("showEmail");
        hideEmail.style.display = "block";
    } else {
        hideEmail.classList.remove("showEmail");
        hideEmail.style.display = "none";
    }

    if (!valStory.length) {
        hideStory.classList.add("showStory");
        hideStory.style.display = "block";
    } else {
        hideStory.classList.remove("showStory");
        hideStory.style.display = "none";
    }

});

for (let btn in clear) {
    clearBtn.addEventListener("click", function () {
        btn.innerHTML = "";
    })
}
