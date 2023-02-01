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
    id: 0,
    title: '',
    description: '',
  },
]

console.log(backlogTasks)
