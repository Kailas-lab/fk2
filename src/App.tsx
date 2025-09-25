import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Career from './pages/Career';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PythonCourse from './pages/PythonCourse';
import DataScienceCourse from './pages/DataScienceCourse';
import MachineLearningCourse from './pages/MachineLearningCourse';
import FullStackCourse from './pages/FullStackCourse';
import DigitalMarketingCourse from './pages/DigitalMarketingCourse';
import AutomationCourse from './pages/AutomationCourse';
import Franchise from './pages/Franchise';
import TallyPrimeCourse from './pages/TallyPrimeCourse';
import GenAICourse from './pages/GenAICourse';
import RProgrammingCourse from './pages/RProgramming';
import PythonLibrariesCourse from './pages/PythonLibraries';
import MySQLCourse from './pages/Mysql';
import PowerBICourse from './pages/PowerBI';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/career" element={<Career />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses/python-programming" element={<PythonCourse />} />
            <Route path="/courses/data-science" element={<DataScienceCourse />} />
            <Route path="/courses/machine-learning" element={<MachineLearningCourse />} />
            <Route path="/courses/full-stack" element={<FullStackCourse />} />
            <Route path="/courses/digital-marketing" element={<DigitalMarketingCourse />} />
            <Route path="/courses/automation" element={<AutomationCourse />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/courses/tally-prime" element={<TallyPrimeCourse/>} />
            <Route path="/courses/generative-ai-langchain-gemini" element={<GenAICourse/>} />
            <Route path="/courses/r-programming-essentials" element={<RProgrammingCourse/>} />
            <Route path="/courses/python-libraries-mastery" element={<PythonLibrariesCourse/>} />
            <Route path="/courses/mysql-database-masterclass" element={<MySQLCourse/>} />
            <Route path="/courses/power-bi-data-analytics" element={<PowerBICourse/>} />
            
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;