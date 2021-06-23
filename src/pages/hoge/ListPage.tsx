import { Layout } from "antd";
import { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { HogeContext } from "./HogeTopPage";

const ListPage = () => {
  const match = useRouteMatch();
  const hogeValue = useContext(HogeContext);
  return (
    <Layout style={{ padding: 10, backgroundColor: "#ffccff" }}>
      <Link to={`${match.url}/0`}>{hogeValue.list[0].title}</Link>
      <Link to={`${match.url}/1`}>{hogeValue.list[1].title}</Link>
      <Link to={`${match.url}/2`}>{hogeValue.list[2].title}</Link>
    </Layout>
  );
};

export default ListPage;
