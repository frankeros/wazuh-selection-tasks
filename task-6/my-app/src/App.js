import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import Header from './components/Header/Header';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header></Header>
        </header>
        <div className="content">
          <Routes />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
