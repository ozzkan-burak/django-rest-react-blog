import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>

          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
