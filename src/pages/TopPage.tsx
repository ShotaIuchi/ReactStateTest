import { BrowserRouter as Router, Route } from "react-router-dom";
import FugaTopPage from "./fuga/FugaTopPage";
import HogeTopPage from "./hoge/HogeTopPage";

const TopPage = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HogeTopPage}></Route>
        <Route path="/fuga" component={FugaTopPage}></Route>
      </div>
    </Router>
  );
};

export default TopPage;
