// build your `Project` model here
const db = require('../../data/dbConfig')

const getProjects = async () => {
  const rows = await db("projects");

  const updatedRows = rows.map((row) => {
    if (row.project_completed === 0) {
      return { ...row, project_completed: false };
    } else {
      return { ...row, project_completed: true };
    }
  });

  return updatedRows;
};


module.exports = {
  getProjects
}
