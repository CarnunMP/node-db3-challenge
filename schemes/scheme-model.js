const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
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

function findSteps(id) {
  return db('steps AS st')
    .join('schemes AS sc', 'st.scheme_id', 'sc.id')
    .select(
      'st.id',
      'sc.scheme_name',
      'st.step_number',
      'st.instructions'
    )
    .where({ 'st.scheme_id': id });
    // Does it matter if ^this is as-is or _'sc.id': id_?
}

function add(scheme) {
  db('schemes').insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}
// ^This doesn't seem to be working. Any ideas? I'm tearing my hair out, ha.
// (Specifically: it doesn't seem to be returning a promise as it should...)