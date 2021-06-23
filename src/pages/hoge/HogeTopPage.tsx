import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

const HogeTopPage = () => {
  const match = useRouteMatch();
  return (
    <Router>
      <Layout style={{ padding: 10, backgroundColor: "#ccffff" }}>
        <Route exact path={match.path} component={ListPage}></Route>
        <Route path={`${match.path}/:id`} component={DetailPage}></Route>
      </Layout>
    </Router>
  );
};

export default HogeTopPage;
