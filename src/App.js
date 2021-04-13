import './App.css';
import SignIn from './SignIn';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import FindOutMore from './FindOutMore';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/findoutmore'>
            <Navbar />
            <FindOutMore />
          </Route>
        <Route path='/contact'>
            <Navbar />
            <ContactUs />
          </Route>
          <Route path='/'>
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
