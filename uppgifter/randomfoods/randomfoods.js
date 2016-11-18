var matArray=[{food:"pasta0", vego:false, url:"google.com"}, {food: "laxfile1", vego: false, url:"google.com"}, {food: "soup2", vego: true, url:"google.com"},{food:"pasta3", vego:false, url:"google.com"},{food:"pasta4", vego:false, url:"google.com"},{food:"pasta5", vego:true, url:"google.com"},{food:"pasta6", vego:false, url:"google.com"},{food:"pasta7", vego:false},{food:"pasta8", vego:false, url:"google.com"},{food:"pasta9", vego:false, url:"google.com"},{food:"pasta10", vego:true, url:"google.com"},];
/*
function FoodObj(food, vego){
    this.food=food;
    this.vego=vego;
}

FoodObj.prototype.addFood=function(){
    matArray.push(this);
}
*/

var vegoArray=[];

var yesVego= function(){
     for(var i=0; i<matArray.length; i++){
        if(matArray[i].vego){
            vegoArray.push(matArray[i]);
        }
    }
        var indexVego=Math.floor(Math.random()*10);
        a.href=vegoArray[indexVego].url;
        a.innerHTML=vegoArray[indexVego].food;
}

var cBox=document.getElementById("cbox");
var a=document.getElementById("anchor");

var pickupRandom=function(){
    var boxIsChecked=cbox.checked;
    if(boxIsChecked){
        yesVego();
    }else{
        var index=Math.floor(Math.random()*10);
        a.href=matArray[index].url;
        a.innerHTML=matArray[index].food;
    }
}
/*
var myfood=new FoodObj("tomato", true);
myfood.addFood();
console.log(matArray);
*/