import React from "react";
import ProjectPage from "../../pagesRoute/Project";
import * as api from "../../api";
function Project(props) {
  return <ProjectPage {...props} />;
}
export const getStaticPaths = async () => {
  const res = await api.getAllProjects();
  const projects = res.data;
  const paths = projects.map((projects) => ({
    params: { id: projects.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await api.getProjectById(params.id);
  const project = res.data;
  return {
    props: {
      project,
    },
  };
};
export default Project;
