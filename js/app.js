const taskLists = document.querySelectorAll('.task-list')
const backlogTasks = document.querySelector('#backlog .task-list')

let tasks = [
  {
    id: 0,
    title: 'Fix submit button',
    description:
      'The submit button has stopped working since the last release.',
  },
  {
    id: 1,
    title: "Change text on T and C's",
    description:
      'The terms and conditions need updating as per the business meeting.',
  },
  {
    id: 2,
    title: 'Change banner picture',
    description:
      'Marketing has requested a new banner to be added to the website',
  },
]

function createTask(taskId, title, description) {
  const taskCard = document.createElement('div')
  const taskHeader = document.createElement('div')
  const taskTitle = document.createElement('p')
  const taskDescriptionContainer = document.createElement('div')
  const taskDescription = document.createElement('p')
  const deleteIcon = document.createElement('p')

  taskCard.classList.add('task-container')
  taskHeader.classList.add('task-header')
  taskDescriptionContainer.classList.add('task-description-container')

  taskTitle.textContent = title
  taskDescription.textContent = description
  deleteIcon.textContent = '☒'

  taskHeader.append(taskTitle, deleteIcon)
  taskDescriptionContainer.append(taskDescription)
  taskCard.append(taskHeader, taskDescriptionContainer)
  backlogTasks.append(taskCard)
}

function addTasks() {
  tasks.forEach(task =>
    createTask(task.id, task.title, task.description)
  )
}

addTasks()
