import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './pages/Blog';

// Wrapper components to fit the new layout structure if needed, 
// or we can use the existing components directly as pages.
// For now, I'll use them directly but wrapped in a fragment or div if they need specific page styling.

const Home = () => (
  <>
    <Hero />
    {/* We can include other sections on Home or keep them separate. 
        Given the "MVC" request, separate pages are better, but a Landing Page usually has teasers.
        Let's keep Home as a landing page with teasers. */}
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
