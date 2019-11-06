const db = require('../data/db-config');

module.exports = {
  find,
  findById,
}

function find() {
  return db('schemes AS s')
    .select('s.scheme_name');
}

function findById(id) {
  return db('schemes AS s')
  .where({ 's.id': id })
  .first(); // Ensures resolves to _null_ if illegitimate id.
}