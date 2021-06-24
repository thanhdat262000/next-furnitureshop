import * as api from "../api";
import AboutPage from "../pagesRoute/About";
import Meta from "../components/Meta";
function About({ projects }) {
  return (
    <>
      <Meta
        title="Giới thiệu về New Furniture"
        description="Chúng tôi luôn nỗ lực để tạo ra những không gian đẹp nhất."
      />
      <AboutPage projects={projects} />
    </>
  );
}
export const getStaticProps = async (context) => {
  const res = await api.getAllProjects();
  const projects = res.data;
  return {
    props: {
      projects,
    },
    revalidate: 1800,
  };
};
export default About;
