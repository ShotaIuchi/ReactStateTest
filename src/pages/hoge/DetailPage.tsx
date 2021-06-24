import { Layout } from "antd";
import { useContext } from "react";
import { HogeContext } from "./model/IHogeContext";

const DetailPage = (props: any) => {
  const hogeValue = useContext(HogeContext);
  const { id } = props.match.params;
  return <Layout>{hogeValue.list[id].msg}</Layout>;
};

export default DetailPage;
