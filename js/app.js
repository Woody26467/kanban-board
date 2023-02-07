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

taskLists.forEach(taskList => {
  taskList.addEventListener('dragover', dragOver)
  taskList.addEventListener('drop', dragDrop)
})

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

  taskCard.setAttribute('draggable', true)
  taskCard.setAttribute('task-id', taskId)

  taskCard.addEventListener('dragstart', dragStart)

  taskHeader.append(taskTitle, deleteIcon)
  taskDescriptionContainer.append(taskDescription)
  taskCard.append(taskHeader, taskDescriptionContainer)
  backlogTasks.append(taskCard)
}

function addColor(column) {
  let color
  switch (column) {
    case 'backlog':
      color = 'rgb(96, 96, 192)'
      break
    case 'doing':
      color = 'rgb(83, 156, 174)'
      break
    case 'done':
      color = 'rgb(224, 165, 116)'
      break
    case 'discard':
      color = 'rgb(222, 208, 130)'
      break

    default:
      color = 'rgb(232, 232, 232)'
      break
  }
  return color
}

function addTasks() {
  tasks.forEach(task =>
    createTask(task.id, task.title, task.description)
  )
}

addTasks()

let elementBeingDragged

function dragStart() {
  console.log(this)
  elementBeingDragged = this
}

function dragOver(e) {
  e.preventDefault()
}

function dragDrop() {
  const columnId = this.parentNode.id
  console.log(elementBeingDragged.firstChild)
  elementBeingDragged.firstChild.style.backgroundColor =
    addColor(columnId)
  this.append(elementBeingDragged)
}
