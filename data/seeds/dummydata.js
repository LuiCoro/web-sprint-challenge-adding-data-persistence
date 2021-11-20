exports.seed = function (knex) {
  return knex('projects').truncate()
      .then(function () {
        return knex('projects').insert([
          {
            project_name: 'Node-api-1',
            project_description: 'Learn some Node!',
            project_completed: true
          },
          {
            project_name: 'Youtube Clone',
            project_description: 'A Youtube clone',
          },
          {
            project_name: 'Weather App'
          }
        ])
      })
}
