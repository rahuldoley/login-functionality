import './App.css';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SignIn />
      </div>
    </Router>
  );
}

export default App;
