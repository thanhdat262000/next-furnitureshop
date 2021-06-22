import { useRouter } from "next/router";
import React from "react";
import CategoryPage from "../../pagesRoute/Category";
import * as api from "../../api";
function Category(props) {
  return <CategoryPage {...props} />;
}
export const getStaticPaths = async () => {
  const res = await api.getAllCategories();
  const categories = res.data;
  const paths = categories.map((category) => ({
    params: {
      category: category.name,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await api.getALLProjectsByCategory(params.category);
  const projects = res.data;
  return {
    props: {
      projects,
      params,
    },
  };
};

export default Category;
