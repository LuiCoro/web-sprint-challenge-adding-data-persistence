const projects = [
  {
    project_name: "Weather App",
    project_description: "Able to tell the user what is the weather forecast",
    project_completed: true
  },
  {
    project_name: "Youtube Clone",
    project_description: "Able to Search for videos, watch them and even look at the comments",
    project_completed: false
  },
  {
    project_name: "Rick & Morty Character Info",
    project_description: "Displays information about the character",
    project_completed: false
  }
]

exports.project = projects

exports.seed = function (knex) {
  return knex('projects').insert(projects)
}