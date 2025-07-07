const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <span class="delete-btn">🗑</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Delete individual task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});

// Clear all tasks
clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});