import * as api from "../api";
import HomePage from "../pagesRoute/Home";
export default function Home({ projects }) {
  return <HomePage projects={projects} />;
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
