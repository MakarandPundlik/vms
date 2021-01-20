import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch , Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Services from './Services';
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
