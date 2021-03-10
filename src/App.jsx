import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
