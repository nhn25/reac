import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./libs/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Post from "./pages/Post";


const Routing = () => {
  return(
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/post" component={Post}/>
      <Route exact path="/login" component={Login}/>
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