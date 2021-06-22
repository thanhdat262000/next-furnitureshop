import * as api from "../api";
import AboutPage from "../pagesRoute/About";
function About({ projects }) {
  return <AboutPage projects={projects} />;
}
export const getStaticProps = async (context) => {
  const res = await api.getAllProjects();
  const projects = res.data;
  return {
    props: {
      projects,
    },
  };
};
export default About;
