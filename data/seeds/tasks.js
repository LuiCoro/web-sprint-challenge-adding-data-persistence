const tasks = [
  {
    task_description: "Add some styling",
    task_notes: "need to add some styling so the page ain't boring",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "Make the user able to comment on a video",
    task_notes: "Use youtube or stackoverflow to figure out how to do it",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "Add Filler Information",
    task_notes: "some characters are missing some information",
    task_completed: false,
    project_id: 3,
  },
  {
    task_description: "Able to correctly display the right character correctly",
    task_notes: "All character should render our correctly ",
    task_completed: true,
    project_id: 3,
  },
]

exports.tasks = tasks

exports.seed = function(knex) {
  return knex('tasks').insert(tasks)
}