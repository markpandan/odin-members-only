const pool = require("./pool");
const util = require("../lib/passwordUtils");

async function getUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
}

async function getUserByUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
}

// async function getFullUserDetails() {

// }

async function insertNewUser(username, email, password) {
  const hashedPassword = await util.encryptPassword(password);
  await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
    [username, email, hashedPassword]
  );
}

async function insertNewPost(userId, title, description) {
  await pool.query(
    "INSERT INTO posts (user_id, title, description) VALUES ($1, $2, $3)",
    [userId, title, description]
  );
}

module.exports = {
  getUserById,
  getUserByUsername,
  insertNewUser,
  insertNewPost,
};
