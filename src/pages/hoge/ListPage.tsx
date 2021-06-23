import { Layout } from "antd";
import { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { HogeContext } from "./HogeTopPage";

const ListPage = () => {
  const match = useRouteMatch();
  const hogeValue = useContext(HogeContext);

  return (
    <Layout style={{ padding: 10, backgroundColor: "#ffccff" }}>
      <button
        onClick={() => {
          hogeValue.dispatch({
            list: [
              {
                title: `${Date().toString()}`,
                msg: `${Date().toLowerCase()}`,
              },
            ],
          });
        }}
      >
        UPDATE
      </button>

      {hogeValue?.list?.map((value, index) => {
        return <Link to={`${match.url}/${index}`}>{value.title}</Link>;
      })}
    </Layout>
  );
};

export default ListPage;
