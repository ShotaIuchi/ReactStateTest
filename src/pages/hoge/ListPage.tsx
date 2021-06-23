import { Layout } from "antd";
import { Link, useRouteMatch } from "react-router-dom";

const ListPage = () => {
  const match = useRouteMatch();
  return (
    <Layout style={{ padding: 10, backgroundColor: "#ffccff" }}>
      <Link to={`${match.url}/1`}>1</Link>
      <Link to={`${match.url}/2`}>2</Link>
      <Link to={`${match.url}/3`}>3</Link>
    </Layout>
  );
};

export default ListPage;
