const ToDo =(function(){
    
    /* ===================
        VARIABLES
     =================== */
    //---- adding
    let userTask, ul, li;
    let task, 
        taskList= document.getElementById('task_list'),
        editBtn;
    
    //---- editing
    let taskToEdit, taskText, btnEdit, btnDone, indexOfTargetItem,taskToSave, modalOverlay, modalContent;
    
    //---- removing
    let todo;
    
    /* ===================
        METHODS
     =================== */
    
    //-----ADD TASK---------
    let getTask=()=>{
        userTask = document.forms.formTask.textTask.value;
        let error=document.getElementById('error-message');
        error.innerHTML="";
        if(!userTask){
            error.innerHTML='please add a task';
            return false;
        }else{
            task = document.getElementById('textTask').value;
            addToList();
        }
        document.forms.formTask.textTask.value="";
    };
    
    let addToList=()=>{
        li = document.createElement('li');
        li.innerHTML=`<span class="taskText">${task}</span>`;
        
        //set <ul> if there isn't
        if(document.getElementById('todo-div')===null){
            ul=document.createElement('ul');
            ul.setAttribute('id', 'todo-div');
        }
        
        taskList.appendChild(ul);
        ul.appendChild(li);
        
        let btn_done = document.createElement('input');
            btn_done.setAttribute('type', 'button');
            btn_done.setAttribute('value', 'done');
            btn_done.setAttribute('class', 'done change');
        let btn_edit = document.createElement('input');
            btn_edit.setAttribute('type', 'button');
            btn_edit.setAttribute('value', 'edit');
            btn_edit.setAttribute('class', 'edit change');
        
        li.appendChild(btn_edit);
        li.appendChild(btn_done);
    };
    

    //----EDIT------------------

    let getIndex = (event)=>{
        btnEdit=document.getElementsByClassName('edit');
        btnDone=document.getElementsByClassName('done');
        
        if(event.target.className === 'done change'){
            indexOfTargetItem =Array.from(btnDone).indexOf(event.target)
            moveToDone(removeForDone);
        } else {
            indexOfTargetItem=Array.from(btnEdit).indexOf(event.target);
            getTaskText(editTask);
        }
    };

    let getTaskText = (callback)=>{
        taskText = btnEdit.item(indexOfTargetItem).parentNode.firstChild.innerHTML;
        callback();
    };

    let editTask = ()=>{
        modalOverlay= document.getElementById('modal-overlay');
        modalContent =document.getElementById('modal-content');
        modalContent.innerHTML = `<div class="modal-innerdiv"><input id="modal-edit" type='text' value='${taskText}'><input type='button' value='save' id="save" class="button-primary"></div>`;
        modalOverlay.style.display='block';
        modalContent.style.display='block';
        
        //Listener to Save Button
        let save = document.getElementById('save');
        save.addEventListener('click', saveTask);
    };
    
    let saveTask = ()=>{
        let editedTask = document.getElementById('modal-edit');
        taskToSave = editedTask.value;
        btnEdit.item(indexOfTargetItem).parentNode.firstChild.innerHTML = taskToSave;
        modalOverlay.style.display='none';
        modalContent.style.display='none';
    };
        
    
    //----DONE-------
    let moveToDone=(callback)=>{
        let doneTask = btnDone.item(indexOfTargetItem).parentNode.firstChild.innerHTML;
        
        if(document.getElementById('done-ul')===null){
            let doneContainer = document.getElementById('done_list');
            let ul=document.createElement('ul');
            ul.setAttribute('id', 'done-ul');
            doneContainer.appendChild(ul);
            
        }
        let doneul = document.getElementById('done-ul');
        let doneli = document.createElement('li');
        doneul.appendChild(doneli);
        doneli.textContent=doneTask;
        
        callback();
    };
    
    let removeForDone = ()=>{
       let parentNode = btnDone.item(indexOfTargetItem).parentNode.parentNode;
       parentNode.removeChild(parentNode.childNodes[indexOfTargetItem]);
    };
    
    return {
        addTask: getTask,
        editTask: getIndex
    }
    
}());


//------Event Listner-------------
const addBtn = document.getElementById('btn_addNewTask');
addBtn.addEventListener('click', ToDo.addTask, true);


const taskList = document.getElementById('task_list');
taskList.addEventListener('click', ToDo.editTask);
