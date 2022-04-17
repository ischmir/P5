function chatFunction() {

  //DROPDOWN KATEGORI
  let regionArray = new Array("Nordjylland", "Midtjylland", "Syddanmark", "Sjællnd", "Hovedstaden");

  let dropdown = document.getElementById("region");

  for (let i = 0; i < regionArray.length; ++i) {
    dropdown[dropdown.length] = new Option(regionArray[i], regionArray[i]);
  }
}


let boligArray = new Array1("Villa", "Lejlighed", "Parcelhus", "Gård", "Herregård", "Sommerhus");

let dropdown = document.getElementById("bolig");

for (let i = 0; i < boligArray.length; ++i) {
  dropdown[dropdown.length] = new Option(boligArray[i], boligArray[i]);
  }
}

chatFunction();
