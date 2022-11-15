function get_todos() {
    // creates an array of tasks that are input
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    // if input contains something, JSON.parse will communicate with browser to make task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// this function adds the input task to the get_todos function array
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    // adds a new task to end of the array
    if (task) {
        todos.push(task);
    }
    // converys task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value="";
    show();

    return false;
}

// this function keeps the tasks permanently displayed on the screen
function show() {
    // this sets the task that was retrieved as a variable
    var todos = get_todos();

    // this sets up each task as an unordered list
    var html = '<ul>';
    // displays a task to the list in the order that it was input
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };

    html += '</ul>;'
    // displays tasks as a list
    document.getElementById('todos').innerHTML = html;

    // get all "remove" buttons
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }

}


function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    return false;
}


// displays the input task when the 'Add item' button is clicked
document.getElementById('add').addEventListener('click', add);

show();