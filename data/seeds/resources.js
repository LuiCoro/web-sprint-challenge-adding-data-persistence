const resources = [
  {
    resource_name: 'Youtube',
    resource_description: "Able to learn anything and everything!"
  },
  {
    resource_name: 'Knex Documentation',
    resource_description: "Documentation about Knex!"
  },
  {
    resource_name: 'Udemy',
    resource_description: "Watch more videos on projects"
  },
]

exports.resources = resources

exports.seed = function(knex) {
  return knex('resources').insert(resources)
}