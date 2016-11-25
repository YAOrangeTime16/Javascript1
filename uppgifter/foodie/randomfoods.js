var matArray=[{food:"Biff Teriyaki", vego:false, url:"http://www.arla.se/recept/biff-teriyaki"}, {food: "Vegetarisk Pastagratäng", vego: true, url:"https://www.landleyskok.se/recept/vegetarisk-pastagratang.html"}, {food: "Viltskavsgryta Med Mandelpotatispuré & Rårörda Lingon", vego: false, url:"https://www.mathem.se/recept/viltskavsgryta-med-mandelpotatispure-o-rarorda-lingon"},{food:"Skärgårdssoppa Toppad Med Syrlig Fänkål", vego:false, url:"http://www.arla.se/recept/skargardssoppa-toppad-med-syrlig-fankal/"},{food:"Senap- och Honumgsfylld Kycklingfilé", vego:false, url:"http://www.arla.se/recept/senap--och-honungsfylld-kycklingfile"},{food:"Pasta Med Ost och Citronsås", vego:true, url:"http://www.arla.se/recept/pasta-med-ost--och-citronsas"},{food:"Zucchinilasagne Med Cottage Cheese", vego:true, url:"http://www.arla.se/recept/zucchinilasagne-med-keso-cottage-cheese"},{food:"Quinoabiffar Med Citrongräsröra", vego:true, url:"http://www.arla.se/recept/vegobiffar-med-citrongrasrora/"}, {food:"Kycklingburgare med Mojo Rojo", vego: false, url:"http://www.arla.se/recept/kycklingburgare-med-mojorojosas"}, {food:"Helstekt Fläskfilé Med Spansk Potatissallad", vego:false, url:"http://www.ica.se/recept/helstekt-flaskfile-med-spansk-potatissallad-520034/"}, {food:"Spaghetti Med Tomatsås och Fetaost",vego:true, url:"http://www.ica.se/recept/spaghetti-med-tomatsas-och-fetaost-720901/"}, {food:"Risonirisotto Med Champinijoner och Sojabönor", vego:true, url:"http://www.ica.se/recept/risonirisotto-med-champinjoner-och-sojabonor-719708/"},{food:"Crepes Med Champinjoner och Sojabönor", vego:true, url:"http://www.ica.se/recept/crepes-med-champinjoner-och-sojabonor-721042"}, {food:"Falafel Med Avokadosallad och Vitlökssås", vego:true, url:"http://www.ica.se/recept/falafel-med-avokadosallad-och-vitlokssas-719044"}, {food:"Minutbiff Med Betsallad och Pepparrotskräm", vego:false, url:"http://www.ica.se/recept/minutbiff-med-betsallad-och-pepparrotskram-721364/"}];

var vegoArray=[];
var ml=matArray.length;

var yesVego= function(){
     for(var i=0; i<ml; i++){
        if(matArray[i].vego){
            vegoArray.push(matArray[i]);
        }
    }
}

var cBox=document.getElementById("cbox");
var a=document.getElementById("anchor");

var pickupRandom=function(){
    var boxIsChecked=cbox.checked;
    if(boxIsChecked){
        var vl=vegoArray.length;
        var indexVego=Math.floor(Math.random()*vl);
        a.href=vegoArray[indexVego].url;
        a.innerHTML=vegoArray[indexVego].food;
    }else{
        var index=Math.floor(Math.random()*ml);
        a.href=matArray[index].url;
        a.innerHTML=matArray[index].food;
    }
}