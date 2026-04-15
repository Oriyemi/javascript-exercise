// .To - Do List: Create a system to add items, mark them as "complete" (strikethrough), and delete them from the DOM.
const getInputBox = document.querySelector("#input-box");
const getTakList = document.querySelector(".task-list");
const getBtnDelete = document.querySelector(".btnDelete");
function addTask() {
    let li = document.createElement("li");
    li.textContent = getInputBox.value;
    
   

    li.addEventListener("click", () => {
        li.classList.toggle("complete");
    }) 


    let btn = document.createElement("button");
    btn.textContent = "delete";

  
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        li.remove();
    });

    li.appendChild(btn); 

    

    getTakList.appendChild(li);
    getInputBox.value=""
}
//  append means to put the li item inside the gettaklist

// e.stopPropagation() is used to only handle that particular click dont pass it to the whole ul just the li created so we can delete just that link created 

