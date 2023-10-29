/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function validateForm() {
    var a = document.getElementById("first-name").value;
    var b = document.getElementById("last-name").value;
    var c = document.getElementById("email").value;

    var front = document.getElementById("frontend-checkbox").checked;
    var back = document.getElementById("backend-checkbox").checked;
    var mobile = document.getElementById("mobile-checkbox").checked;
    var graphics = document.getElementById("graphics-checkbox").checked;

    if ((b == null || b == "") || (a == null || a == "") || (c == null || c == "") || ((front == false) && (back == false) && (mobile == false) && (graphics == false)))
    {
      alert("Uzupełnij wszystkie pola formularza");
      return false;
    }
  }
  