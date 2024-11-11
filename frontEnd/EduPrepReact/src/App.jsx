import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Asegúrate de importar AuthProvider
import NavBar from './NavBar'; 
import HomeNotLogged from './HomeNotLogged';
import HomeCourses from './HomeCourses';
import LoginPage from './LoginPage';
import Registro from './Registro';
import Dashboard from './Dashboard';
import StudentProgress from './StudentProgress';
import AllCourse from './allCourse.jsx';
import Course from './course';
import CourseView from './courseViewToSubscribe';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider> {}
      <Router>
        <Routes>
          <Route path="/" element={
            <div className='home'>
              <NavBar />
              <HomeNotLogged />
              <HomeCourses />
            </div>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studentprogress" element={<StudentProgress />} />
          <Route path="/course" element={<Course />} />
          <Route path="/allCourse" element={<AllCourse />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/courseToSubscribe" element={<CourseView />} />
          <Route path="/cursos" element={<p>Here needs to be the register page</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;