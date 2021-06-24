import React from "react";
import Meta from "../components/Meta";
import DesignAndConstruction from "../pagesRoute/DesignAndConstruction";
import * as api from "../api";
function Design(props) {
  return (
    <>
      <Meta
        title="Thiết kế nội thất | Chung cư, nhà phố, khách sạn"
        description="Thiết kế chung cư, nhà phố, khách sạn"
      />
      <DesignAndConstruction {...props} />
    </>
  );
}
export const getStaticProps = async () => {
  const res = await api.getALLProjectsByService("design");
  const projects = res.data;
  return {
    props: {
      projects,
    },
    revalidate: 1800,
  };
};
export default Design;
