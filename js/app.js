console.log("działa!")

//Liczby i stringi
var myNumber = 2.2;
var myNumber2 = 8;
"agata"

var myString1 = "34";

var myText1 = "lalala";
console.log(myText1)
console.log( myString1 + "lalala");

// Wartosci logiczne
var prawda = true;
var falsz = false;

console.log (prawda)

//Tablice
var tablica = [1,2,3]; //ile jest tutaj elementów? 3
//Na jakiej pozycji jest liczba 2? 1 (bo liczymy od zera)
console.log( tablica [1] ) //wypisuje liczbe na daje pozycji

//Pobrac dlugosc tablicy 
console.log ( tablica.length ); 

var tablica2 = ["jablko", "gruszka"];
console.log (tablica2);
console.log (tablica2 [1] )

//funkcja
function wypisywanie( owoc ) { // var owoc = "marchewka"
   var sok = "miksowanie" + owoc;
    return sok;
   
}
var otrzymanySok = wypisywanie ( "marchewka" ); //uruchamianie funkcji albo wywolywanie;
console.log (otrzymanySok)
wypisywanie ( "banan" );
 // console.log (owoc);

//"miksowanie" + owoc ====== sok ====== wypisywanie ("marchewka") ======otrzymanySok



// instrukcje warunkowe
if ( 1 > 2) {
    console.log ("wez parasol")
        } else {
            console.log ("wez okulary")
        }

if ( 128 == 128) {
    console.log ("wez parasol")
        } else {
            console.log ("wez okulary")
        }

var czyPada = true
if ( czyPada) {
    console.log ("wez parasol")
        } else {
            console.log ("wez okulary")
        }


function isRain () {
    console.log ("Sprawdzam pogode");
    // algorytmu
    return true;
}
var czyPada = isRain ();
if ( czyPada) {
    console.log ("wez parasol")
        } else {
            console.log ("wez okulary")
        }

//Petle
for (var i = 0; i < 100; i++) {
    console.log ("czesc", i);
    
}

for (var i = 0; i < 100; i++) {
   isRain ();
    
}

//moje cwiczenia

var myName = "Kasia"
console.log (myName);

var tablica3 = ["Gosia","Kasia", "Ania", "Marta"];
console.log (tablica3);

console.log( tablica3 [1] )

var myAge = 31
var myYear = 1986

if (myAge>myYear) {console.log ("hurra")} 
else {console.log ("niehurra")}

// DOM Api
var ppp = document.querySelector (".jumbotron");
ppp.style.border = "3px solid red";

var divs = document.querySelectorAll("div")
console.log (divs.length );
divs[0].style.display = "none"

