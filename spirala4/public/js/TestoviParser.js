var TestoviParser=(function(){
  var dajTacnost = function(str) {
    try {
      var objekat = JSON.parse(str);
      var brojTestova = objekat.stats.tests;
       var testoviKojiSuProsli = objekat.stats.passes;
        var tacnost=(testoviKojiSuProsli/brojTestova)*100;
        var tacnostString="";
        var greske=objekat.failures;
        var niz=[];
      
        if(tacnost%1!=0)  {
         tacnostString=Number.parseFloat(tacnost).toFixed(1)+"%";
        }
        else if(tacnost%1==0) {
         tacnostString=tacnost+"%";       
        }

        for(let i=0; i<greske.length; i++){
            niz.push(greske[i].fullTitle); 
         }

        var objekat1={
          "tacnost":tacnostString ,
          "greske":niz

        }

        console.log(objekat1);
        
       return objekat1;  
    }catch(e){
      var objekat2={
       "tacnost": "0%",
       "greske": ["Testovi se ne mogu izvrsiti"]
     }

     console.log(objekat2);
     return objekat2;
    }
    
  }
      
  var porediRezultate=function(rezultat1,rezultat2){
    var rezultat1=JSON.parse(rezultat1);
    var rezultat2=JSON.parse(rezultat2);
   
    var brojac=0,brojac1=0;
    var x,x1;
    var brojacIdenticnihTestova=1;
    var niz1=[];
    var greskeu1_ne2=[];
    var greskeSamoU2=[];
    for(var i=0; i<rezultat1.tests.length; i++){
      if(!rezultat2.tests.find(x=>x.fullTitle==rezultat1.tests[i].fullTitle)){
        brojacIdenticnihTestova=0;
      }
       if(!brojacIdenticnihTestova){
         break;
       }
    }
    
  for(var i=0; i<rezultat1.failures.length; i++){
    if(!rezultat2.tests.find(x=>x.fullTitle==rezultat1.failures[i].fullTitle)){
      brojac++;
      greskeu1_ne2.push(rezultat1.failures[i].fullTitle);
    }
  }

  for(var i=0; i<rezultat2.failures.length; i++){
    if(!rezultat1.failures.find(x=>x.fullTitle==rezultat2.failures[i].fullTitle)){
       greskeSamoU2.push(rezultat2.failures[i].fullTitle);
    }
  }

  if(brojacIdenticnihTestova){
    var objekat=dajTacnost(JSON.stringify(rezultat2));
    x=objekat.tacnost;
    niz1=objekat.greske;
    niz1.sort(); 
  } else {
    x=(brojac+rezultat2.failures.length)/(brojac+rezultat2.stats.tests)*100;
    if(x%1!=0)  {
      x=Number.parseFloat(x).toFixed(1)+"%";
      
     }
     else if(x%1==0){
       x=x+"%";
     }
    
    
    greskeu1_ne2.sort();
    greskeSamoU2.sort();
    niz1=greskeu1_ne2.concat(greskeSamoU2);
    //niz1=[...greskeu1_ne2,...greskeSamoU2];
  }


     var objekat2={
      "promjene":x ,
      "greske":niz1

    }
  

    console.log(objekat2);
    return objekat2;
   
     }


  return {
      dajTacnost:dajTacnost,
      porediRezultate:porediRezultate
   }
 } ());


     
 
  