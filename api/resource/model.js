// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
  return db('resources')
}

const getResourcesById = (id) => {
  return db('resources').where('resource_id', id).first()
}


const createResource = async (resource) => {
  const [id] = await  db('resources').insert(resource)

  return getResourcesById(id)
}

module.exports = {
  getResources,
  createResource
}
