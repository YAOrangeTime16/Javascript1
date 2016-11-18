function addTask (){
    var str = document.form.addText.value;
    //alert for empty
    if(str == ""){
        alert("Please add your task");
        return false;
    }
    var li = document.createElement("li");
    var text = document.createTextNode(str);
    li.appendChild(text);
    var ul = document.getElementById("ul");
    ul.appendChild(li);
    li.setAttribute("class", "taskName");
//add checkbox
    var taskName = document.getElementsByClassName("taskName");
    var input = document.createElement("input");
    input.type="checkbox";
    input.name="cbox";
    input.value=str;
    li.appendChild(input);
//clear text area
    document.form.reset();
}

function addDoneList(){
    var elements = document.getElementsByName("cbox");
    var ulDone = document.getElementById("ulDone");
    for(var i=0; i<elements.length; i++){
        var boxIsChecked = elements[i].checked;
        if(boxIsChecked){
            var checkedTxt =elements[i].value;
            var donetask=document.createTextNode(checkedTxt);
            var liDone = document.createElement("li");
            liDone.appendChild(donetask);
            ulDone.appendChild(liDone);
        }
    }
    deleteList();
}

function deleteList(){
    var elements = document.getElementsByName("cbox");
    var children=document.getElementsByClassName("taskName");
    var parent=document.getElementById("ul");
    var l=elements.length;
    for(var i=l-1; i>=0; i--){
        var boxIsChecked = elements[i].checked;
        if(boxIsChecked){
        parent.removeChild(children[i]);
        }
    }
}