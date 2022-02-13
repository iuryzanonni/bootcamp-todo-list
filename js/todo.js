const form = document.getElementById('form');
const tasks = document.getElementById('tasks');

form.onsubmit = function (event) {
	event.preventDefault();
	const task = document.getElementById('inputTask');
	addTask(task.value);
	form.reset();
}

function addTask(task) {
	const container = document.createElement('div');
	const taskText = document.createElement('p');
	const checkBox = document.createElement('input');
	const trashCan = document.createElement('i');

	checkBox.setAttribute('type', 'checkbox');
	checkBox.setAttribute('onclick', 'changeStyle(this.id, this.checked)');
	checkBox.setAttribute('id', task);

	taskText.setAttribute('id', 'p_' + task);

	trashCan.classList.add('fa-solid');
	trashCan.classList.add('fa-trash-can');
	trashCan.setAttribute('onclick', 'deleteTask(this.id)');
	trashCan.setAttribute('id', 'i-' + task);

	container.setAttribute('id', 'div-' + task);
	container.classList.add('task');
	container.appendChild(checkBox);
	container.appendChild(taskText);
	container.appendChild(trashCan);

	taskText.innerHTML = task;
	tasks.appendChild(container);

}

function changeStyle(id, value) {
	let taskValue = document.getElementById('p_' + id);
	if (value) {
		taskValue.style.color = 'gray';
		taskValue.style.textDecoration = 'line-through';
	} else {
		taskValue.style.color = 'black';
		taskValue.style.textDecoration = 'none';
	}
}

function deleteTask(id) {
	let div = document.getElementById('div-' + id.substring(2));
	tasks.removeChild(div);
}