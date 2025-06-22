import StudentForm from "./StudentForm";
import './App.css';

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-black px-4">
      <div className="bg-white text-black rounded-xl shadow-2xl p-8 w-full max-w-lg">
        
        <StudentForm />
      </div>
    </div>
  );
}

export default App;
