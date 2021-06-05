import "./App.css";
import Layout from "./components/Layout/Layout";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import InstructorPage from "./pages/InstructorPage";
import HomePage from "./pages/HomePage";
import ModulesPage from "./pages/ModulesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { createBrowserHistory } from "history";

const newHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Router exact history={newHistory} path="/home">
            <HomePage />
          </Router>

          <Router exact history={newHistory} path="/modules">
            <ModulesPage />
          </Router>

          <Router exact history={newHistory} path="/instructors">
            <InstructorPage />
          </Router>

          <Route to="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
