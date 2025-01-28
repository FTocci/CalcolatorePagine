function calcolaGiorniMancanti(dataEsame) {
  var data = new Date();
  var dataEsameDate = new Date(dataEsame); 
  var differenza = dataEsameDate - data;  
  var giorniMancanti = Math.floor(differenza / (1000 * 60 * 60 * 24));
  console.log(giorniMancanti);
  
  return giorniMancanti;
}

function calcolaPagine(dataEsame, giorniMargine){
  var pagine = document.getElementById("total-pages").value;
  
  var giorniMancanti = calcolaGiorniMancanti(dataEsame);
  if(giorniMargine){
    giorniMancanti = giorniMancanti - giorniMargine;
  }
  var pagineGiornaliere = pagine / giorniMancanti;
  if(pagineGiornaliere){
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Devi fare " + pagineGiornaliere + " pagine al giorno</h2>";
  }
}


function toggleMarginInput() {
  var marginInputDiv = document.getElementById("margin-input");
  if (document.getElementById("margin-days").checked) {
    marginInputDiv.style.display = "block";
  } else {
    marginInputDiv.style.display = "none";
  }
}

document.getElementById("margin-days").addEventListener("click", toggleMarginInput);