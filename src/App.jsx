import React, { Routes, Route, BrowserRouter } from 'react-router-dom';
import Task from './pages/mainTask';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          teste
          <Route path="/" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
