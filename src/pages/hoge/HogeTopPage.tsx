import { Layout } from "antd";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

export type THogeValue = {
  title: string;
  msg: string;
};

export interface IHogeData {
  list: THogeValue[];
}

export interface IHogeContext extends IHogeData {
  dispatch: React.Dispatch<any>;
}

export const HogeContext = createContext({} as IHogeContext);

const HogeTopPage = () => {
  const match = useRouteMatch();
  const [hogeValue, setHogeValue] = useState<IHogeData>();

  return (
    <HogeContext.Provider
      value={{ list: hogeValue?.list, dispatch: setHogeValue } as IHogeContext}
    >
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
