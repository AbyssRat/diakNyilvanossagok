import mysql from "mysql2/promise";

/* =========================
   MYSQL CONNECTION POOL
========================= */

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "diaknyilvantarto",
    port: 3307,  
  });

/* =========================
   GET ALL
========================= */
export async function getAllStudents() {
  const [rows] = await pool.query("SELECT * FROM students");
  return rows;
}

/* =========================
   GET BY ID
========================= */
export async function getStudentById(id) {
  const [rows] = await pool.query(
    "SELECT * FROM students WHERE id = ?",
    [id]
  );
  return rows[0];
}

/* =========================
   CREATE
========================= */
export async function createStudent(data) {
  const { name, birth_year, class: className, city, image } = data;

  const [result] = await pool.query(
    "INSERT INTO students (name, birth_year, class, city, image) VALUES (?, ?, ?, ?, ?)",
    [name, birth_year, className, city, image]
  );

  return {
    id: result.insertId,
    name,
    birth_year,
    class: className,
    city,
    image,
  };
}

/* =========================
   UPDATE
========================= */
export async function updateStudent(id, data) {
  const { name, birth_year, class: className, city, image } = data;

  await pool.query(
    "UPDATE students SET name=?, birth_year=?, class=?, city=?, image=? WHERE id=?",
    [name, birth_year, className, city, image, id]
  );

  return getStudentById(id);
}

/* =========================
   DELETE
========================= */
export async function deleteStudent(id) {
  const [result] = await pool.query(
    "DELETE FROM students WHERE id=?",
    [id]
  );

  return result.affectedRows > 0;
}