import { Layout } from "antd";
import { createContext, useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DetailPage from "./DetailPage";
import { HogeContext, IHogeContext } from "./model/IHogeContext";
import { IHogeData } from "./model/IHogeData";
import ListPage from "./ListPage";
import { THogeValue } from "./model/THogeValue";

export interface IHogeValueAction {
  type: string;
  list: THogeValue[];
}

export const HogeReducerFunc: React.Reducer<any, any> = (
  state: IHogeContext,
  action: IHogeValueAction
) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, list: action.list };
    case "ADD":
      var list = [] as THogeValue[];
      if (state?.list) {
        list = state.list.concat(list);
      }
      if (action?.list) {
        list = action.list.concat(list);
      }
      return {
        ...state,
        list,
      };
    default:
      return state;
  }
};

const HogeTopPage = () => {
  console.log(HogeTopPage.name);

  const match = useRouteMatch();
  const [hogeValue, hogeDispatch] = useReducer(
    HogeReducerFunc,
    {} as IHogeData
  );

  return (
    <HogeContext.Provider
      value={{ list: hogeValue?.list, dispatch: hogeDispatch } as IHogeContext}
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
