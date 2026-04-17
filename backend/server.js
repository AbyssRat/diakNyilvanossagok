import express from "express";
import cors from "cors";

import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./db.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET ALL
app.get("/students", async (req, res) => {
  const data = await getAllStudents();
  res.json(data);
});

// GET ONE
app.get("/students/:id", async (req, res) => {
  const student = await getStudentById(req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Diák nem található" });
  }

  res.json(student);
});

// CREATE
app.post("/students", async (req, res) => {
  const newStudent = await createStudent(req.body);
  res.status(201).json(newStudent);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  const updated = await updateStudent(req.params.id, req.body);
  res.json(updated);
});

// DELETE
app.delete("/students/:id", async (req, res) => {
  const ok = await deleteStudent(req.params.id);

  if (!ok) {
    return res.status(404).json({ message: "Diák nem található" });
  }

  res.json({ message: "Törölve" });
});

app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});