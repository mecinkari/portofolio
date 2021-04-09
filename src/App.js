import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./css/style.css"
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={Blog} path="/blog"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
