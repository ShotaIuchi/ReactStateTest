import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import FugaTopPage from "./fuga/FugaTopPage";
import HogeTopPage from "./hoge/HogeTopPage";

const TopPage = () => {
  const _padding = 10;
  return (
    <Router>
      <div style={{ padding: _padding, backgroundColor: "#ccccff" }}>
        <Link to="/">Hoge(TOP)</Link>
        <Link to="/fuga">Fuga</Link>
      </div>
      <div style={{ padding: _padding, backgroundColor: "#ccffcc" }}>
        <Route exact path="/" component={HogeTopPage}></Route>
        <Route path="/fuga" component={FugaTopPage}></Route>
      </div>
    </Router>
  );
};

export default TopPage;
