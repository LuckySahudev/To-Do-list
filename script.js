let editingLabel = null;
let add = document.getElementById("add")
let container = document.getElementById("container")
let cbox = document.querySelector(".cbox")
let addlist = document.getElementById("addlist")
let submit = document.getElementById("submit")
let listitems = document.getElementById("listitems")

// to check the window is closed or open 
let check = false;

// open window function open input window
function openWindow() {
    changecss();
}

//close window function to close input window 
function closeWindow() {
  const input = document.getElementById("Input");
  const text = input.value.trim();

  if (text === "") {
        addlist.style.display = "none";
        editingLabel = null;
        return;
  }

  //  EDIT MODE
  if (editingLabel) {

        editingLabel.textContent = " " + text;
        editingLabel = null;
        input.value = "";
        addlist.style.display = "none";
        return;
  }
  
  // create input checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task";

  // creat a label for that created checkbox
  const label = document.createElement("label");
  label.textContent = " "+text;


  // add a edit button
  const edits = document.createElement("button");
  edits.className = "edits";

  // for editing image
  const imageOfEdit = document.createElement("img");
  imageOfEdit.id = "e-image"
  imageOfEdit.src = "edit-button.svg";
  imageOfEdit.width = 10;
  imageOfEdit.height = 10;
  imageOfEdit.alt = "Edit";
  
  // append image of edit to the edit icon
  edits.appendChild(imageOfEdit);

  
  // for delete button 
  const deleting = document.createElement("button")
  deleting.className = "delete"

  // for delete button image
  const deletes = document.createElement("img");
  deletes.className = "d-image"
  deletes.src = "delete.png";
  deletes.width = 10;
  deletes.height = 10;
  deletes.alt = "delete";

  // append delete image to delete icon
  deleting.appendChild(deletes);

  // making a action div for edit and delete icon
  const action = document.createElement("div")
  action.className = "action"
  action.appendChild(edits);
  action.appendChild(deleting);

  // making span for the checkbox and the 
  const sitem = document.createElement("span"); 
  sitem.className = "span1"
  sitem.appendChild(checkbox); 
  sitem.appendChild(label); 

  // appending on all instancess on a new div
  const item = document.createElement("div");
  item.className = "item";
  item.appendChild(sitem); 
  item.appendChild(action);
  
  // appending new div to the listitems container to show task
  listitems.appendChild(item);
  Input.value = "";
  listitems.scrollTop = listitems.scrollHeight;
  
  // displaying none to the input window 
  document.getElementById("addlist").style.display = "none";
  check = false;
  return;
}

// Funtion for change the input window display 
function changecss(){
    check = true;
    document.getElementById("addlist").style.display = "block";
    addlist.style.background = "rgb(195, 195, 195)";
    addlist.style.display = "flex";
    addlist.style.justifyContent = "center";
    addlist.style.alignItems = "center";
    addlist.style.position = "relative";
    addlist.style.top = "2vh";
    addlist.style.left = "2vh";
    addlist.style.height = "10vh";
    addlist.style.width = "45vw";
    addlist.style.border = "1px solid black";
    addlist.style.borderRadius = "3px";
    
    addlist.querySelector("#Input").style.height = "20px";
    // move cusor to the input box 
    document.getElementById("Input").focus();
}

// Adding a event listener for + button 
add.addEventListener("click",function(){
    add.style.background = "grey";
    add.style.height = "50px"
    add.style.width = "50px"
    add.innerHTML = "+"
    add.style.fontSize = "30px"

    // this is for + buttun 
    setTimeout(function(){
        add.innerHTML = "+";
        add.style.height = "45px"
        add.style.width = "45px"
        add.style.fontSize = "25px"
    },100)
})
add.addEventListener("mouseleave",function(){
    add.style.background = "rgb(138, 137, 137)"
})

// working machanism of delete buttun 
addEventListener('click',function(e){
    if(e.target.classList.contains('delete') || e.target.classList.contains('d-image')){
        var item = e.target.closest('.item')
        item.remove();
    }
});

// working machanism of edit button 
addEventListener('click', function (e) {
    const target = e.target.closest('.edits, .e-image');
    if (!target) return;

    const item = target.closest('.item');
    if (!item) return;

    const label = item.querySelector('label');
    if (!label) return;

    editingLabel = label;
    changecss();
    document.getElementById("Input").value = label.textContent.trim();

});

// If Checked then disipear the task 
addEventListener("click",function(e){

    const task = e.target.closest('.task');
    if (!task) return;

    const item = task.closest('.item');
    if (!item) return;

    const span1 = item.querySelector('.span1');
    if (!span1) return;

    let label = span1.querySelector('label');
    let text = label.textContent;
    label.remove();

    let relabel = document.createElement("label")
    if(task.checked){ 
        relabel.className = "relabel"
        this.setTimeout(function(){
            item.remove();
        },100)
    }
    relabel.textContent = text;
    span1.appendChild(relabel)
    

});

// when Enter is presed call to closewindow 
function handleEnter(event){
    if(event.key === "Enter"){
        closeWindow();
    }
}

// when input window is open and i click on outside form the window so window will close
addEventListener("click",function(e){
    const tempaddlist = e.target.closest('#addlist');
    let Input = addlist.querySelector("#Input");
    if(!tempaddlist && check == true){
        // to resolve editing problem
        editingLabel = null;
        Input.value = "";
        document.getElementById("addlist").style.display = "none";
    }
},100);

// remove the all list 
function removelist(){
    listitems.innerHTML = `<!-- all one one items are store  -->` ;
}
// the last comment of the to do list  
