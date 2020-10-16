const db = require("../database/connection");

module.exports = {
  getAll,
  add,
  getById,
  update,
  remove,
};

function getAll() {
  return db("classes");
}

function getById(id) {
  return db("classes").where({ id }).first();
}

function add(exerciseClass) {
  return db("classes")
    .insert(exerciseClass, "id")
    .then((ids) => {
      const id = ids[0];
      return getById(id);
    });
}

function update(id, changes) {
  return db("classes").where({ id }).update(changes);
}

function remove(id) {
  return db("classes").where({ id }).del();
}
