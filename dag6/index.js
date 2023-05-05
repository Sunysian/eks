/*

let informasjonsteknologi1 = {
    spraak: ["HTML", "CSS"],
    likerFaget: false,
    timetall: 5,
    klasserom: "C14",
    antallElever: 24
};

var films = [
    {tittle: "over the moon", seen: true},
    {tittle: "how to train your dragon", seen: true},
    {tittle: "jojo rabbit", seen: true},
    {tittle: "puss in boots: the last wish", seen: true},
    {tittle: "shrek 1", seen: true},
    {tittle: "bird box", seen: false},
    {tittle: "parasite", seen: false},
    {tittle: "us", seen: false},
    {tittle: "it follows", seen: false},
    {tittle: "life", seen: false},
];

informasjonsteknologi1.spraak.push("Javascript");

console.log(informasjonsteknologi1.spraak);

informasjonsteknologi1.antallElever = 15;

console.log(informasjonsteknologi1.antallElever)


delete informasjonsteknologi1.timetall;


for (var i = 0; i < informasjonsteknologi1.spraak.length; i++) {
    console.log(informasjonsteknologi1.spraak[i]);
}

for (var ekstra in informasjonsteknologi1) {
    console.log(ekstra + ": " + informasjonsteknologi1[ekstra])
}

for (var ekstra in informasjonsteknologi1) {
    console.log(informasjonsteknologi1[ekstra]);
}

for (ekstra in films) {
    console.log(films[ekstra]);
}

console.log(films.sort());


for (i = 0; i < films.length; i++) {
    if (films[i].seen = true) {
        films[i].tittle += " seen this";
    }
}
console.log(films);




var figur1 = {
    form: "rektangel",
    lengde: 4,
    bredde: 6,
    areal: 24,
    omkrets: 20,
    methodss : function (){
        for (ekstra in figur1) {
            console.log(ekstra + figur1[ekstra]);
        }
    },
    countvalue : function (){
        var counti = 0;
        for (ekstra in figur1) {
            counti++;
            console.log(counti);
        }
    }
    }
;

figur1.methodss();

figur1.countvalue();

*/

var selectElement = document.getElementById("0");
var ppp = document.getElementById("ppp");
var bodyOfSite = document.getElementById("bodyOfSite");

var hytter = {
    Gjendesheim: {
        Glitterheim : 22,
        Memurubu : 14,
    },
    Glitterheim: {
        Gjendesheim : 22,
        Memurubu : 18,
    },
    Memurubu: {
        Gjendesheim : 14,
        Glitterheim : 18,
        Gjendebu : 10,
    },
    Gjendebu: {
        Memurubu : 10,
        Leirvassbu : 19,
        Spiterstulen : 24,
        Olavsbu : 16,
    },
    Leirvassbu: {
        Gjendebu : 29,
        Spiterstulen : 15,
        Olavsbu : 11,
    },
    Spiterstulen: {
        Glitterheim : 27,
        Gjendebu : 24,
        Leirvassbu : 15,
    },
    Olavsbu: {
        Gjendebu : 16,
        Leirvassbu : 11,
    },
}


function firstlist() {
    selectElement.innerHTML += `<option value="" selected disabled hidden>choose</option>`;
    for (j in hytter) {
        var options = document.createElement("option");
        options.innerHTML = j;
        options.value = j;
        selectElement.appendChild(options);
    }
}


var listthing = document.getElementById("0");

function listmaking(e) {
    console.log(e.target.value);
    for (j in hytter) {
        if (j === e.target.value) {
            var newList = document.createElement("select");
            document.body.appendChild(newList);
            document.body.appendChild(document.createElement("br"))
            document.body.appendChild(document.createElement("br"))
            newList.innerHTML += `<option value="" selected disabled hidden>choose</option>`;
            for (h in hytter[j]) {
                var option = document.createElement("option");
                option.innerHTML = h;
                newList.appendChild(option);
                console.log(h.value);
                newList.addEventListener("change", listmaking);
            }
        }
    }
}


/*
// function addtext(){
//     ppp.innerHTML = selectElement.value;
// }
var iID = 1;
var iIDList = 1;

function listmaking(listID, orderOfList) {
    var existingList = document.getElementById("existinglistID")
    if (existingList != null) {
        bodyOfSite.removeChild(existingList);
    }

    var newlistArea = document.createElement("div");
    newlistArea.id = "existingAreaID" + [iID++]; //okay, so what we gotta do here is assign a different ID to each div/select, and then let a function be triggered when a change happens (the function will pass the peramiter of which list was changed) and what the function will do is first erase everything after said select, and remake the one after it. for checking which value the list has, we will look st the last character of a string
    bodyOfSite.appendChild(newlistArea);


    var newList = document.createElement("select");
    bodyOfSite.appendChild(newList);
    newList.innerHTML += `<option value="" selected disabled hidden>choose</option>`;
    newlistArea.appendChild(newList);
    newList.id = iIDList++;
    for (i in hytter) {
        if (i === listID.value) {
            console.log(i);
            for (h in hytter[i]) {
                console.log(i);
                var options = document.createElement("option");
                options.innerHTML = h;
                options.value = h;
                newList.appendChild(options);
            }
        }
    }
    newList.addEventListener("change", function() {
        listmaking(iIDList);
    })
}
*/