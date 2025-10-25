import Header from './Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { StyleProvider, useStyle } from './states/StyleContext';

// Child component to use the style context
function MainContent() {
  const { style } = useStyle(); // Now safe to call within StyleProvider

  return (
    <div
      className={`flex justify-center ${
        style === 'basic' ? '' : 'bg-zinc-950'
      }`}
    >
      <div className="max-w-[1440px]">
        <Router>
          <Header className="z-100" />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

function App() {
  return (
    <StyleProvider>
      <MainContent />
    </StyleProvider>
  );
}

export default App;