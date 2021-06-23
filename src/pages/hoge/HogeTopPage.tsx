import { Layout } from "antd";
import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

interface IHogeContext {
  list: { title: string; msg: string }[];
}

export const HogeContext = createContext({} as IHogeContext);

const HogeTopPage = () => {
  const match = useRouteMatch();
  const [hogeValue, setHogeValue] = useState({
    list: [
      {
        title: "title1",
        msg: "msg1",
      },
      {
        title: "title2",
        msg: "msg2",
      },
      {
        title: "title3",
        msg: "msg4",
      },
    ],
  } as IHogeContext);

  return (
    <HogeContext.Provider value={hogeValue}>
      <Router>
        <Layout style={{ padding: 10, backgroundColor: "#ccffff" }}>
          <Route exact path={match.path} component={ListPage}></Route>
          <Route path={`${match.path}/:id`} component={DetailPage}></Route>
        </Layout>
      </Router>
    </HogeContext.Provider>
  );
};

export default HogeTopPage;
