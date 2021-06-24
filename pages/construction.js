import DesignAndConstruction from "../pagesRoute/DesignAndConstruction";
import * as api from "../api";
function Design(props) {
  return <DesignAndConstruction {...props} />;
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
