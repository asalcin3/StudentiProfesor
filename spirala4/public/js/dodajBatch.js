window.onload=function(){
    
  document.getElementById("dodaj").onclick = function () {
    
    var studenti = document.querySelector('#batch').value;
   if(studenti=="")
    {
       var greska=document.getElementById("ajaxstatus");
       const para = document.createElement("p");
      para.innerText = "Niste ništa unijelii,textarea ne smije biti prazan!";
     greska.appendChild(para);

    }
    else
    { 
        StudentAjax.dodajBatch(studenti,function(){});
   }
    
};
}