function addTask (){
    var str = document.form.addText.value;
    var li = document.createElement("li");
    var text = document.createTextNode(str);
    li.appendChild(text);
    var ul = document.getElementById("ul");
    ul.appendChild(li);
    li.setAttribute("class", "todo");
    li.setAttribute("value", str);
    //addbutton
    var taskName = document.getElementsByClassName("taskName");
    var addButton = document.createElement("button");
    var abText=document.createTextNode("done");
    addButton.type="button";
    addButton.class="dBtn";
    addButton.value=str;
    addButton.onclick="addDoneList()";
    addButton.appendChild(abText);
    li.appendChild(addButton);
    //deletebutton
    var dlButton=document.createElement("button");
    var dlText=document.createTextNode("delete");
    dlButton.type="button";
    dlButton.onclick="deleteList()";
    dlButton.value=str;
    dlButton.appendChild(dlText);
    li.appendChild(dlButton);
}

function addDoneList(){
    var getValue=document.getElementsByClassName("todo");
    for(var i =0; i<getValue.length; i++){
        var saveValue=getValue[i].getAttribute("value");
        console.log(saveValue);
    }

}
/*
function deleteList(){

    
}*/
