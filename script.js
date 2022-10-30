function poids(){
   
    var t=parseInt(document.getElementById('t').value) ;
    var radio=document.querySelector('input[name="gender"]:checked')
    var gender=radio && radio.value  ;
    if(t){
      if (gender=="Femme") {
        bmi=t-100-((t-150)/2.5)+'kg'
      }else if(gender=="Homme"){bmi=t-100-((t-150)/4)+'kg';}
      else{bmi="Selectionner votre sexe"}}
      else{ bmi="Entrer votre taille"}
    
   document.getElementById("result").innerText=bmi;
}


