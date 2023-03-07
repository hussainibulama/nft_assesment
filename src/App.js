import './App.css';
import {Routes, Route} from 'react-router-dom';
import AllRoutes from './Components/Routes';
function App() {
  return (
    <div data-testid='app'>
      <Routes>
        {AllRoutes.map((item) => (
          <Route key={item.index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
