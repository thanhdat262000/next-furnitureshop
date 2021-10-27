import * as api from "../api";
import Meta from "../components/Meta";
import HomePage from "../pagesRoute/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";
export default function Home({ projects }) {
  return (
    <>
      <Meta
        title="Noithat93 | Thiết kế & thi công nội thất hàng đầu Việt Nam"
        description="Thiết kế, thi công nội thất khách sạn, nhà phố, chung cư"
      />
      <HomePage projects={projects} />{" "}
      <MessengerCustomerChat pageId="106189040983304" appId="394734905518135" />
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
