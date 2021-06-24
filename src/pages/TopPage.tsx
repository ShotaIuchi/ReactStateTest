import { Layout } from "antd";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import FugaTopPage from "./fuga/FugaTopPage";
import HogeTopPage from "./hoge/HogeTopPage";

const TopPage = () => {
  console.log(TopPage.name);
  const _padding = 10;
  return (
    <Router>
      <Layout style={{ padding: _padding, backgroundColor: "#ccccff" }}>
        <Link to="/hoge">Hoge(TOP)</Link>
        <Link to="/fuga">Fuga</Link>
      </Layout>
      <Layout style={{ padding: _padding, backgroundColor: "#ccffcc" }}>
        <Route exact path="/hoge" component={HogeTopPage}></Route>
        <Route path="/fuga" component={FugaTopPage}></Route>
      </Layout>
    </Router>
  );
};

export default TopPage;
