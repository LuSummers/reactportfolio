
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Recent projects',
    },
    { name: 'Resume',
     description: <div> <h3>Technical Skills</h3>
  <ul><li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
  <li>REACT</li>
  <li>MySQL</li>
  </ul>
  <a
    href="portfolio/src/assets/Lu Summers resume.pdf"
    download
  >
    Click here download my resume!
  </a>
</div>
}]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header></Header>

      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
            <Footer></Footer>
          </>
        ) : (
          <Contact></Contact>

        )}
      </main>
    </div>
  );
} 

export default App;
