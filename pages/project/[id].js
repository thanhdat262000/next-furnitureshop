import React from "react";
import ProjectPage from "../../pagesRoute/Project";
import * as api from "../../api";
import Meta from "../../components/Meta";
function Project(props) {
  return (
    <>
      <Meta title={props.project.name} description={props.project.name} />
      <ProjectPage {...props} />
    </>
  );
}
export const getStaticPaths = async () => {
  const res = await api.getAllProjects();
  const projects = res.data;
  const paths = projects.map((projects) => ({
    params: { id: projects.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await api.getProjectById(params.id);
  const project = res.data;
  return {
    props: {
      project,
    },
    revalidate: 180,
  };
};
export default Project;
