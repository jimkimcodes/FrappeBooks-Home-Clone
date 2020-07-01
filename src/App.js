import React from 'react';
import './App.css';
import Navbar from './components/MyNavbar';
import Face from './components/Face';
import CardContainer from './components/CardContainer'
import ExamplesContainer from './components/ExamplesContainer'
import Team from './components/Team'
import More from './components/More'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Face />
      <CardContainer />
      <ExamplesContainer />
      <Team />
      <More />
      <Footer />
    </div>
  );
}

export default App;
