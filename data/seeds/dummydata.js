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


exports.seed = function (knex) {
  return knex('resources').truncate()
      .then(function () {
        return knex('resources').insert([
          {
            resource_name: 'Google',
            resource_description: 'Gotta Love Google',
          },
          {
            resource_name: 'Youtube',
            resource_description: 'You can learn anything on youtube',
          },
          {
            resource_name: 'Wing it!',
          }
        ])
      })
}