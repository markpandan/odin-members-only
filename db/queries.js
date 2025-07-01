const pool = require("./pool");
const util = require("../lib/passwordUtils");
require("dotenv").config();

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

async function getFullUserDetails(userId) {
  const { rows } = await pool.query(
    `SELECT users.username, users.is_admin, users.is_member, COUNT(*) AS posts_count  
    FROM users 
    INNER JOIN posts ON users.id = posts.user_id 
    WHERE users.id = $1
    GROUP BY users.id`,
    [userId]
  );
  return rows[0];
}

async function getAllPosts() {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
}

async function getPostDetailsById(postId) {
  const { rows } = await pool.query(
    `SELECT users.id, users.username, posts.title, posts.description, 
    EXTRACT(DAY FROM NOW() - posts.posting_date) AS posting_date
    FROM posts INNER JOIN users ON posts.user_id = users.id 
    WHERE posts.id = $1`,
    [postId]
  );
  return rows[0];
}

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

async function verifyMembership(userId, code) {
  if (code == process.env.SECRET_MEMBER_CODE) {
    await pool.query("UPDATE users SET is_member = TRUE WHERE id = $1", [
      userId,
    ]);
  } else if (code == process.env.SECRET_ADMIN_CODE) {
    await pool.query(
      "UPDATE users SET is_member = TRUE, is_admin = TRUE WHERE id = $1",
      [userId]
    );
  }
}

module.exports = {
  getUserById,
  getUserByUsername,
  getFullUserDetails,
  getAllPosts,
  getPostDetailsById,
  insertNewUser,
  insertNewPost,
  verifyMembership,
};
