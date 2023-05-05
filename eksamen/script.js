var navn = document.getElementById("navn");
var adresse = document.getElementById("adresse");
var epost = document.getElementById("epost");
var telefonnumer = document.getElementById("telefonnumer");
var antallPersoner = document.querySelector("#antallPersoner");
var typebillet = 0;
var totalpris = 0;
var personerbillet = 0;
var typebil = document.getElementById("typebil");
var bilpp = document.getElementById("bilpp");
var bilpris = document.getElementById("bilpris");
var totalprisdisplay = document.getElementById("totalpris");
var barnbillet = document.getElementById("barnbillet");
var voksenbillet = document.getElementById("voksenbillet");
var eldrebillet = document.getElementById("eldrebillet");
var barn = document.getElementById("barn");
var voksen = document.getElementById("voksen");
var eldre = document.getElementById("eldre");


function clicking(number) {
    if (number == 1) {
        window.location = "omKong.html";
    } else if (number == 2) {
        window.location = "safarijeep.html";
    } else if (number == 3) {
        window.open("https://ut.no/turforslag/116294");
    }
};


function checkout() {
    if (navn.value === "" || adresse.value === "" || epost.value === "" || telefonnumer.value === "" || document.getElementById("dyreaparken").checked === false && document.getElementById("badeland").checked === false && document.getElementById("begge").checked === false) {
        alert("Fyll alle feltene.")
    } else {
        window.location = "bookingthankyou.html";
    }
};




function addinput(billet) {
    if (billet == "barnbillet") {
        if (barn.checked) {
            console.log("Checkbox is checked..");
            var inputchild = document.createElement("select");
            inputchild.style = "margin-top: 1em";
            for (var i = 0; i < 5; i++) {
                var options = document.createElement("option");
                options.innerHTML = i;
                options.value = i;
                inputchild.appendChild(options);
                barnbillet.appendChild(inputchild);
            }
        } else {
            console.log("Checkbox is not checked..");
            barnbillet.removeChild(barnbillet.lastElementChild);
        }
    }
    if (billet == "voksenbillet") {
        if (voksen.checked) {
            console.log("Checkbox is checked..");
            var inputvoksen = document.createElement("select");
            inputvoksen.style = "margin-top: 1em";
            for (var i = 0; i < 5; i++) {
                var options = document.createElement("option");
                options.innerHTML = i;
                options.value = i;
                inputvoksen.appendChild(options);
                voksenbillet.appendChild(inputvoksen);
            }
        } else {
            console.log("Checkbox is not checked..");
            voksenbillet.removeChild(voksenbillet.lastElementChild);
        }
    }
    if (billet == "eldrebillet") {
        if (eldre.checked) {
            console.log("Checkbox is checked..");
            var inputeldre = document.createElement("select");
            inputeldre.style = "margin-top: 1em";
            for (var i = 0; i < 5; i++) {
                var options = document.createElement("option");
                options.innerHTML = i;
                options.value = i;
                inputeldre.appendChild(options);
                eldrebillet.appendChild(inputeldre);
            }
        } else {
            console.log("Checkbox is not checked..");
            eldrebillet.removeChild(eldrebillet.lastElementChild);
        }
    }
};

function beregn1() {

};

function beregn() {
    if (document.getElementById("barn").checked === true) {
        typebillet = 199;
        typebil.textContent = inputbarn.value + "x barn safari jeep billet";
    } else if (document.getElementById("voksen").checked === true) {
        typebillet = 369;
        typebil.textContent = inputvoksen.value + "x voksen safari jeep billet";
    } else if (document.getElementById("eldre").checked === true) {
        typebillet = 249;
        typebil.textContent = inputeldre.value + "x eldre safari jeep billet";
    }
    totalpris = personerbillet;
    bilpp.textContent = typebillet + "kr per person";
    bilpris.textContent = personerbillet + "kr";
    totalprisdisplay.textContent = "Total:" + totalpris + "kr";
};