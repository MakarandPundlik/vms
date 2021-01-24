import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch , Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/> {/*importtant*/}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/services" component={Services}/>
        <Redirect to="/"/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
