import { useState } from "react";
import { motion } from "framer-motion";

export default function StudentForm() {
  const [form, setForm] = useState({ name: "", total_marks: "", subjects: "" });
  const [report, setReport] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/generate-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        total_marks: parseFloat(form.total_marks),
        subjects: parseInt(form.subjects),
      }),
    });
    const data = await res.json();
    setReport(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8 md:p-10 bg-white rounded-3xl shadow-2xl max-w-xl w-full"
    >
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
        📘 Student Report Generator
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Student Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          name="total_marks"
          placeholder="Total Marks"
          type="number"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          name="subjects"
          placeholder="Number of Subjects"
          type="number"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          🚀 Generate Report
        </button>
      </form>

      {report && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-300 p-6 rounded-xl shadow-md"
        >
          <p className="text-black text-lg font-semibold mb-2">
            ✅ Average: {report.average.toFixed(2)}
          </p>
          <p className="text-black text-lg font-semibold mb-2">
            🏅 Grade: {report.grade}
          </p>
          <a
            href={`http://localhost:8080${report.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
          >
            📄 Download PDF
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}
