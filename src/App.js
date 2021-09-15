import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/Users';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from './context/NoteState';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
function App() {
  return (
    <> 
    <NoteState>
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Switch>
          <Route exact  path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
        </Switch>
          <Footer/>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
