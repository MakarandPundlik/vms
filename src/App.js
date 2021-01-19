import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch , Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/> {/*importtant*/}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
