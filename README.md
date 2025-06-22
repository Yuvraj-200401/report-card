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

## 🌐 Live Demo

> Coming soon on [Netlify](https://www.netlify.com/) and [Render](https://render.com/)

---

## 📸 Screenshots

### 🖥️ Web UI:
![UI Screenshot](https://via.placeholder.com/800x400.png?text=Student+Report+Card+Frontend+UI)

### 🧾 PDF Report Card Sample:
![PDF Preview](https://via.placeholder.com/800x400.png?text=PDF+Report+Card+Sample)

> Replace the image links above with your own screenshots or use GitHub's drag-n-drop to upload.

---

## 🎞️ PDF Generation Demo (GIF)

![Demo GIF](https://via.placeholder.com/800x400.gif?text=Generating+PDF+Report+Card)

> Optional: Record with [ScreenToGif](https://www.screentogif.com/) or use [LICEcap](https://www.cockos.com/licecap/) to make a demo GIF.

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
