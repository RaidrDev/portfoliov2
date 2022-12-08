import React from 'react';
import Intro from './componentes/intro/Intro.jsx'
import Header from './componentes/header/Header.jsx'
import Buttons from './componentes/buttons/Button.jsx'
import ProjectList from './componentes/projectList/ProjectList.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Buttons />
      <ProjectList />
    </div>
  );
}

export default App;
