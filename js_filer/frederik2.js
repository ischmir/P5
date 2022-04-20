console.log("this is working");

//Region dropdown start//
function regionFunction() {
  let regionArray = new Array("Nordjylland", "Midtjylland", "Syddanmark", "Sjælland", "Hovedstaden");

  let dropdown1 = document.getElementById("region");

  for (let i = 0; i < regionArray.length; ++i) {
    dropdown1[dropdown1.length] = new Option(regionArray[i], regionArray[i]);
  }
}
  regionFunction()
//Region dropdown slut//


//Bolig dropdown start//
function boligFunction() {
  let boligArray = new Array("Villa", "Lejlighed", "Parcelhus", "Gård", "Sommerhus");

  let dropdown2 = document.getElementById("bolig");

  for (let i = 0; i < boligArray.length; ++i) {
    dropdown2[dropdown2.length] = new Option(boligArray[i], boligArray[i]);
    }
}
boligFunction()
//Bolig dropdown Slut//

//GOD DAG TEKST
function hilsenfunction() {

  const hour = new Date().getHours();
  let hilsen;

  if (hour < 18) {
    hilsen = "Tak for at henvende dig til os, hav en god dag!";
  } else {
    hilsen = "Tak for at henvende dig til os, hav en god aften";
  }

  document.getElementById("hilsen").innerHTML = hilsen;
}

hilsenfunction()
