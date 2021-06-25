import DesignAndConstruction from "../pagesRoute/DesignAndConstruction";
import * as api from "../api";
import Meta from "../components/Meta";
function Design(props) {
  return (
    <>
      <Meta
        title="Thi công nội thất | Chung cư, nhà phố, khách sạn"
        description="Thi công chung cư, nhà phố, khách sạn"
      />
      <DesignAndConstruction {...props} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await api.getALLProjectsByService("construction");
  const projects = res.data;
  return {
    props: {
      projects,
    },
    revalidate: 1800,
  };
};

export default Design;
