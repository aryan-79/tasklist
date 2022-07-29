const form = document.querySelector('#task-form')
      , taskInput = document.getElementById('task')
      , filter = document.querySelector('.filter'),
      taskList = document.querySelector('.collection');


form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);

function addTask(e){
    const input = taskInput.value;
    if(input === ''){
        alert('please enter a task');
    } else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(input));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class = "fa fa-remove"></i>';

        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value ='';
    }

    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}