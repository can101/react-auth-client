import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/home";

function App() {
  return (
  <div className="d-flex align-items-center justify-content-center flex-column text-center" style={{width:"100vw",height:"100vh"}}>
  <Router>
<Switch>
<Route exact path="/login" component={Login}/>
<Route exact path="/register" component={Register}/>
<Route  path="/" component={Home}/>
</Switch>
  </Router>
    </div>
  );
}

export default App;
