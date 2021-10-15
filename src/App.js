import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./libs/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Post from "./pages/Post";


const Routing = () => {
  return(
    <Switch>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Users" component={Users}/>
      <Route exact path="/Post" component={Post}/>
      <Route exact path="/Login" component={Login}/>
    </Switch>
    )
}

function App() {
  return (
<Router>
<Navbar/>
<Routing/>
</Router>
  );
}

export default App;