(() => {
    // stub
    let toDoList = document.querySelector(".todo-list"),
        addButton = document.getElementById("addToDo"),
        saveButton = document.getElementById("saveToDo");

    function addToDo() {
        // Add a todo to the list
        //debugger;
        
        let newToDo = `
            <li>
                <span contenteditable>Add your todo info here</span>
                <button>Done</button>
            </li>
        `;

        toDoList.innerHTML += newToDo;
    }

    function saveToDo() {
        // Save our todos to LocalStorage
        //debugger;

        let allMyToDos = toDoList.innerHTML;

        if (window.localStorage) {
            localStorage.setItem("myToDoList", allMyToDos);
        }
    }

    function retrieveToDoList() {
        if (window.localStorage) {
            if (localStorage.getItem("myToDoList")) {
                let theToDoList = localStorage.getItem("myToDoList");

                toDoList.innerHTML = theToDoList;
            }
        }
    }

    addButton.addEventListener("click", addToDo);
    saveButton.addEventListener("click", saveToDo);

    retrieveToDoList();
})();