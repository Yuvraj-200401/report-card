# 🎓 Student Report Card Generator

A full-stack web application built with **Rust (Actix Web)** and **React** to generate student report cards, calculate grades, and export beautifully designed PDFs.

---

## 📌 Features

- ➕ Add/Edit/Delete student records
- 📊 Calculate average marks and assign grades
- 📄 Generate downloadable PDF report cards
- 💡 React frontend with Tailwind CSS & Framer Motion animations
- 🚀 Rust backend using Actix Web
- 📤 REST API communication

---

## 🛠 Tech Stack

| Layer        | Technology                  |
|--------------|------------------------------|
| Frontend     | React, Tailwind CSS, Framer Motion |
| Backend      | Rust, Actix Web, Serde       |
| PDF Export   | Rust `printpdf` crate        |
| API Format   | JSON via REST                |
| Build Tools  | Cargo, Vite                  |

---

## 🛠️ Local Setup

### 📦 Prerequisites

- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js](https://nodejs.org/) & npm
- Git

---

### 🔧 Backend Setup (Rust API)

```bash
cd student_api
cargo build
cargo run
